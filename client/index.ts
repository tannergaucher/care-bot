import "./index.css";

import { CareResponse } from "../server/functions/programSchema";
import { handleFormSubmit } from "./scripts/handle-form-submit";
import { handleSpeechInput } from "./scripts/handle-speech-input";
import {
  audio,
  form,
  imListeningSection,
  loadingIndicator,
  programContainer,
  speakMoodButton,
  spokenMoodSubmitButton,
  spokenMoodText,
  userPromptSection,
} from "./selectors";

let mood: string | null = null;

if (mood === null) {
  [
    programContainer,
    loadingIndicator,
    audio,
    spokenMoodText,
    spokenMoodSubmitButton,
    imListeningSection,
  ].forEach((element) => {
    element.style.display = "none";
  });
}

const buttons = document.querySelectorAll('button[name="mood"]');

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    mood = (event.target as HTMLButtonElement)
      .value as CareResponse["currentUserMood"];
  });
});

form.addEventListener("submit", (event) => {
  handleFormSubmit({
    event,
    mood,
  });
});

if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const recognition =
    new window.SpeechRecognition() || new window.webkitSpeechRecognition();

  recognition.onresult = function (event) {
    handleSpeechInput(event);
  };

  speakMoodButton.addEventListener("click", () => {
    userPromptSection.style.display = "none";
    imListeningSection.style.display = "block";
    recognition.start();
  });
}
