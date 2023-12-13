import {
  happyButton,
  imListeningSection,
  sadButton,
  spokenMoodSubmitButton,
  spokenMoodText,
  userPromptSection,
} from "../selectors/index-page";

export function handleSpeechInput(event: SpeechRecognitionEvent) {
  imListeningSection.style.display = "none";
  happyButton.style.display = "none";
  sadButton.style.display = "none";

  userPromptSection.style.display = "block";
  spokenMoodText.style.display = "block";
  spokenMoodSubmitButton.style.display = "flex";

  const transcript = event.results[0][0].transcript;

  spokenMoodText.value = transcript;
}
