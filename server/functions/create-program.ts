import fs from "fs";
import path from "path";
import { createJsonTranslator, TypeChatLanguageModel } from "typechat";

import {
  type CloudSpeech,
  storage,
  textToSpeechClient,
  transcribeSpeechClient,
} from "../index";
import { getPlainTextResponse } from "../utils";
import { CareResponse } from "./programSchema";
import { textToSpeech } from "./text-to-speech";
import { transcribeSpeech } from "./transcribe-speech";

export type CreateProgramBody = {
  mood: "positive" | "negative" | string;
  model: TypeChatLanguageModel;
};

export interface CreateProgramResponse extends CareResponse {
  speechUrl: string;
  transcriptionResult: CloudSpeech.protos.google.cloud.speech.v1.ISpeechRecognitionResult[];
}

export async function createProgram({
  mood,
  model,
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

  const { transcriptionUri, results } = await transcribeSpeech({
    client: transcribeSpeechClient,
    storage,
    speechUri,
  });

  console.log(transcriptionUri, "created transcription at gcsUri");

  return {
    speechUrl,
    transcriptionResult: results,
    ...response.data,
  };
}
