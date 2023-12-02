import "./index.css";

import { CareResponse } from "../server/functions/programSchema";
import { handleFormSubmit } from "./scripts/handle-form-submit";
import { handleSpeechInput } from "./scripts/handle-speech-input";
import { toggleLoadingProgram } from "./scripts/toggle-loading-program";
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

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  toggleLoadingProgram(true);
  handleFormSubmit({
    mood,
  });
});

let recognition: SpeechRecognition | null = null;

if ("SpeechRecognition" in window) {
  recognition = new window.SpeechRecognition();
}

if ("webkitSpeechRecognition" in window) {
  recognition = new window.webkitSpeechRecognition();
}

if (recognition) {
  recognition.onresult = function (event) {
    handleSpeechInput(event);
  };
}

speakMoodButton.addEventListener("click", () => {
  if (!recognition) return;

  userPromptSection.style.display = "none";
  imListeningSection.style.display = "block";
  recognition.start();
});
