import {
  happyButton,
  imListeningSection,
  sadButton,
  spokenMoodSubmitButton,
  spokenMoodText,
  userPromptSection,
} from "../selectors";

export interface HandleSpeechInputEvent {
  results: { [key: number]: { [key: number]: { transcript: string } } };
}

export function handleSpeechInput(event: {
  results: { [key: number]: { [key: number]: { transcript: string } } };
}) {
  imListeningSection.style.display = "none";
  happyButton.style.display = "none";
  sadButton.style.display = "none";

  userPromptSection.style.display = "block";
  spokenMoodText.style.display = "block";
  spokenMoodSubmitButton.style.display = "flex";

  const transcript = event.results[0][0].transcript;

  spokenMoodText.value = transcript;
}
