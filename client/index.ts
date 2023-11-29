import { CareResponse } from "../server/functions/programSchema";
import { handleFormSubmit } from "./scripts/handle-form-submit";
import {
  HandleSpeechInputEvent,
  handleSpeechInput,
} from "./scripts/handle-speech-input";

import "./index.css";
import {
  form,
  audio,
  spokenMoodText,
  speakMoodButton,
  spokenMoodSubmitButton,
  programContainer,
  loadingIndicator,
  userPromptSection,
  imListeningSection,
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
  console.log("Speech recognition is supported");

  const recognition = new ((window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition)();

  recognition.onresult = function (event: HandleSpeechInputEvent) {
    handleSpeechInput(event);
  };

  speakMoodButton.addEventListener("click", () => {
    userPromptSection.style.display = "none";
    imListeningSection.style.display = "block";
    recognition.start();
  });
}
