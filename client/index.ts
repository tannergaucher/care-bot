import "./index.css";

import { handleSpeechInput } from "./scripts/handle-speech-input";
import {
  form,
  imListeningSection,
  speakMoodButton,
  spokenMoodSubmitButton,
  spokenMoodText,
  userPromptSection,
} from "./selectors/index-page";

let mood: string | null = null;

if (mood == null) {
  spokenMoodText.style.display = "none";
  spokenMoodSubmitButton.style.display = "none";
  imListeningSection.style.display = "none";
}

const moodButtons = document.querySelectorAll(
  'button[name="mood"]'
) as NodeListOf<typeof spokenMoodSubmitButton>;

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mood = button.value;
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

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (spokenMoodText.value) {
    mood = spokenMoodText.value;
  }

  if (!mood) {
    throw new Error("No user mood selected.");
  }

  window.location.href = `/program.html?mood=${encodeURIComponent(mood)}`;
});
