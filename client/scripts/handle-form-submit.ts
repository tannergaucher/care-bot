import {
  CreateProgramBody,
  CreateProgramResponse,
} from "../../server/functions/create-program";
import { SERVER_BASE_URL } from "../config";
import { spokenMoodText } from "../selectors";
import { renderProgram } from "./render-program";
import { setLoadingProgramResponse } from "./toggle-loading-program";

export async function handleFormSubmit({
  mood,
  spokenMoodTextarea,
}: {
  mood: string;
  spokenMoodTextarea: typeof spokenMoodText;
}) {
  if (spokenMoodTextarea.value) {
    mood = spokenMoodTextarea.value;
  }

  setLoadingProgramResponse(true);

  fetch(`${SERVER_BASE_URL}/create-program`, {
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
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      setLoadingProgramResponse(false);
    });
}
