import {
  CreateProgramBody,
  CreateProgramResponse,
} from "../server/functions/create-program";
import { WORKER_BASE_URL } from "./config";
import { renderProgram } from "./scripts/render-program";
import { setLoadingProgramResponse } from "./scripts/set-loading-program-response";

fetchProgram();

async function fetchProgram() {
  const params = new URLSearchParams(window.location.search);

  const mood = params.get("mood");

  if (mood) {
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
        renderProgram(data);
      })
      .catch((error) => console.error("Error:", error));

    setLoadingProgramResponse(false);
  }
}
