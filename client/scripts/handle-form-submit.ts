import { SERVER_BASE_URL } from "../utils";
import { CreateProgramBody } from "../../server/functions/create-program";
import { CareResponse } from "../../server/functions/programSchema";
import { renderProgram } from "./render-program";

import { form, fieldset, loadingIndicator, spokenMoodText } from "../selectors";

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
    .then((data: CareResponse) => {
      renderProgram(data);
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      fieldset.disabled = false;
      document.body.removeAttribute("loading");
      loadingIndicator.style.display = "none";
    });
}
