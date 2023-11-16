import fs from "fs";
import path from "path";
import { createLanguageModel, createJsonTranslator } from "typechat";
import { CareProgramResponse } from "./careProgramSchema";

export type CreateCareProgramBody = {
  userInput: string;
};

export async function createCareProgram({
  userInput,
}: CreateCareProgramBody): Promise<CareProgramResponse> {
  const model = createLanguageModel(process.env);

  const schema = fs.readFileSync(
    path.join(__dirname, "careProgramSchema.ts"),
    "utf8"
  );

  const translator = createJsonTranslator<CareProgramResponse>(
    model,
    schema,
    "CareProgramResponse"
  );

  const response = await translator.translate(userInput);

  if (!response.success) {
    console.log(response.message);
    throw new Error("Failed to translate user input");
  }

  const stringifiedProgram = JSON.stringify(response.data, null, 2);

  console.log(stringifiedProgram);

  return response.data;
}
