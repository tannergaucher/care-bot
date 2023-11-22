import fs from "fs";
import path from "path";
import { createLanguageModel, createJsonTranslator } from "typechat";
import { CareResponse } from "./programSchema";

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

  return response.data;
}
