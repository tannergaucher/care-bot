import fs from "fs";
import path from "path";
import { createLanguageModel, createJsonTranslator } from "typechat";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { SpeechClient } from "@google-cloud/speech";
import { Storage } from "@google-cloud/storage";

import { CareResponse } from "./programSchema";
import { textToSpeech } from "../text-to-speech";
import { getPlainTextResponse } from "../text-to-speech/utils";
import { transcribeSpeech } from "../transcribe-speech";

export type CreateProgramBody = {
  mood: "positive" | "negative" | string;
};

export async function createProgram({
  mood,
}: CreateProgramBody): Promise<CareResponse> {
  const model = createLanguageModel(process.env);

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
    console.log(response.message);
    throw new Error("Failed to translate user input");
  }

  response.data;

  console.log(JSON.stringify(response.data, null, 2));

  const text = getPlainTextResponse(response.data);

  const { speechGcsUri } = await textToSpeech({
    text,
    client: new TextToSpeechClient(),
    storage: new Storage(),
  });

  console.log(speechGcsUri, "created speech at gcsUri");

  const { transcriptionUri } = await transcribeSpeech({
    gcsUri: speechGcsUri,
    client: new SpeechClient(),
    storage: new Storage(),
  });

  console.log(transcriptionUri, "created transcription at gcsUri");

  return response.data;
}
