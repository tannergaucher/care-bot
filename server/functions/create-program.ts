import fs from "fs";
import path from "path";
import { createJsonTranslator, TypeChatLanguageModel } from "typechat";

import { CloudSpeech, CloudStorage, TextToSpeech } from "../index";
import { getPlainTextResponse } from "../utils";
import { CareResponse } from "./programSchema";
import { textToSpeech } from "./text-to-speech";
import { transcribeSpeech } from "./transcribe-speech";

export type CreateProgramBody = {
  mood: "positive" | "negative" | string;
  model: TypeChatLanguageModel;
  storage: CloudStorage.Storage;
  textToSpeechClient: TextToSpeech.v1.TextToSpeechClient;
  transcribeSpeechClient: CloudSpeech.v1.SpeechClient;
};

export interface CreateProgramResponse extends CareResponse {
  speechUrl: string;
}

export async function createProgram({
  mood,
  model,
  storage,
  textToSpeechClient,
  transcribeSpeechClient,
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
    client: textToSpeechClient,
    storage,
    text,
  });

  console.log(speechUri, "created speech at gcsUri");

  const { transcriptionUri } = await transcribeSpeech({
    client: transcribeSpeechClient,
    storage,
    speechUri,
  });

  console.log(transcriptionUri, "created transcription at gcsUri");

  return {
    speechUrl,
    ...response.data,
  };
}
