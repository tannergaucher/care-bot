import fs from "fs";
import path from "path";
import { createLanguageModel, createJsonTranslator } from "typechat";
import { ProgramResponse } from "./programSchema";

export type CreateProgramBody = {
  mood: "positive" | "negative" | string;
};

export async function createProgram({
  mood,
}: CreateProgramBody): Promise<ProgramResponse> {
  const model = createLanguageModel(process.env);

  const schema = fs.readFileSync(
    path.join(__dirname, "programSchema.ts"),
    "utf8"
  );

  const translator = createJsonTranslator<ProgramResponse>(
    model,
    schema,
    "ProgramResponse"
  );

  const response = await translator.translate(mood);

  if (!response.success) {
    console.log(response.message);
    throw new Error("Failed to translate user input");
  }

  const stringifiedProgram = JSON.stringify(response.data, null, 2);

  console.log(stringifiedProgram);

  return response.data;
}
