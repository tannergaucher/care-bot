import {
  CreateProgramBody,
  CreateProgramResponse,
} from "../../server/functions/create-program";
import { SERVER_BASE_URL } from "../config";
import { fieldset, form, loadingIndicator, spokenMoodText } from "../selectors";
import { renderProgram } from "./render-program";

export async function handleFormSubmit({
  event,
  mood,
}: {
  event: SubmitEvent;
  mood: string | null;
}) {
  event.preventDefault();

  fieldset.disabled = true;
  document.body.setAttribute("loading", "true");
  form.style.display = "none";
  loadingIndicator.style.display = "block";

  if (spokenMoodText.value) {
    mood = spokenMoodText.value;
  }

  if (!mood) {
    throw new Error("No mood selected");
  }

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
      fieldset.disabled = false;
      document.body.removeAttribute("loading");
      loadingIndicator.style.display = "none";
    });
}
