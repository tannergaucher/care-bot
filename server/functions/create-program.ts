import fs from "fs";
import path from "path";
import { createJsonTranslator, TypeChatLanguageModel } from "typechat";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { SpeechClient as TranscribeSpeechClient } from "@google-cloud/speech";
import { Storage } from "@google-cloud/storage";

import { CareResponse } from "./programSchema";
import { textToSpeech } from "./text-to-speech";
import { getPlainTextResponse } from "../utils";
import { transcribeSpeech } from "./transcribe-speech";

export type CreateProgramBody = {
  mood: "positive" | "negative" | string;
  model: TypeChatLanguageModel;
  storage: Storage;
};

export async function createProgram({
  mood,
  model,
  storage,
}: CreateProgramBody): Promise<CareResponse> {
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

  const { speechGcsUri } = await textToSpeech({
    text,
    storage,
    client: new TextToSpeechClient(),
  });

  console.log(speechGcsUri, "created speech at gcsUri");

  const { transcriptionUri } = await transcribeSpeech({
    speechGcsUri,
    storage,
    client: new TranscribeSpeechClient(),
  });

  console.log(transcriptionUri, "created transcription at gcsUri");

  return response.data;
}
