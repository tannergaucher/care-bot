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

let mood: string | null = spokenMoodText.value || null;

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

  if (!mood) {
    throw new Error("No user mood selected.");
  }

  handleFormSubmit({
    mood: spea,
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
  userPromptSection.style.display = "none";
  imListeningSection.style.display = "block";
  recognition?.start();
});
