import { SpeechClient as TranscribeSpeechClient } from "@google-cloud/speech";
import { Storage } from "@google-cloud/storage";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import fs from "fs";
import path from "path";
import { createJsonTranslator, TypeChatLanguageModel } from "typechat";

import { getPlainTextResponse } from "../utils";
import { CareResponse } from "./programSchema";
import { textToSpeech } from "./text-to-speech";
import { transcribeSpeech } from "./transcribe-speech";

export type CreateProgramBody = {
  mood: "positive" | "negative" | string;
  model: TypeChatLanguageModel;
  storage: Storage;
};

export interface CreateProgramResponse extends CareResponse {
  speechUrl: string;
}

export async function createProgram({
  mood,
  model,
  storage,
}: CreateProgramBody): Promise<CreateProgramResponse> {
  const schema = fs.readFileSync(
    path.join(__dirname, "programSchema.ts"),
    "utf8"
  );

  const translator = createJsonTranslator<CareResponse>(
    model,
    schema,
    "CareResponse"
  );

  const response = await translator.translate(mood);

  if (!response.success) {
    console.log(response);
    throw new Error("Failed to translate user input");
  }

  const text = getPlainTextResponse(response.data);

  const { speechUri, speechUrl } = await textToSpeech({
    text,
    storage,
    client: new TextToSpeechClient(),
  });

  console.log(speechUri, "created speech at gcsUri");

  const { transcriptionUri } = await transcribeSpeech({
    speechUri,
    storage,
    client: new TranscribeSpeechClient(),
  });

  console.log(transcriptionUri, "created transcription at gcsUri");

  return {
    speechUrl,
    ...response.data,
  };
}
