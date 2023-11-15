import fs from "fs";
import path from "path";
import { createLanguageModel, createJsonTranslator } from "typechat";
import { CareProgramResponse } from "./careProgramSchema";

type CreateCareProgramBody = {
  userInput: string;
};

export async function createCareProgram({
  userInput,
}: CreateCareProgramBody): Promise<CareProgramResponse> {
  console.log(userInput, "userInput createCareProgram");

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

  console.log(translator, "translator");

  const response = await translator.translate(userInput);

  console.log(response, "response");

  if (!response.success) {
    console.log(response.message);
    throw new Error("Failed to translate user input");
  }

  return response.data;
}
