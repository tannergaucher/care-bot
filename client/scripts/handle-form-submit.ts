import {
  CreateProgramBody,
  CreateProgramResponse,
} from "../../server/functions/create-program";
import { WORKER_BASE_URL } from "../config";
import { renderProgram } from "./render-program";
import { setLoadingProgramResponse } from "./set-loading-program-response";

export async function handleFormSubmit({ mood }: { mood: string }) {
  setLoadingProgramResponse(true);

  await fetch(`${WORKER_BASE_URL}/create-program`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mood,
    } as CreateProgramBody),
  })
    .then((response) => response.json())
    .then((data: CreateProgramResponse) => {
      console.log("data", data);
      renderProgram(data);
    })
    .catch((error) => console.error("Error:", error));

  setLoadingProgramResponse(false);
}
