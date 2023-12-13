const FORM_SELECTOR = "form";
const FIELDSET_SELECTOR = "fieldset";

const HAPPY_BUTTON_SELECTOR = "#happy-button";
const SAD_BUTTON_SELECTOR = "#sad-button";
const USER_PROMPT_SECTION_SELECTOR = "#user-prompt-section";
const SPEAK_MOOD_BUTTON_SELECTOR = "#speak-mood-button";
const SPOKEN_MOOD_TEXT_SELECTOR = "#spoken-mood-text";
const IM_LISTENING_SELECTOR = "#im-listening";
const SPOKEN_MOOD_SUBMIT_BUTTON_SELECTOR = "#spoken-mood-submit-button";

import { querySelectorOrThrow } from "../utils";

export const form = querySelectorOrThrow<HTMLFormElement>(
  document,
  FORM_SELECTOR
);

export const fieldset = querySelectorOrThrow<HTMLFieldSetElement>(
  form,
  FIELDSET_SELECTOR
);

export const spokenMoodText = querySelectorOrThrow<HTMLTextAreaElement>(
  document,
  SPOKEN_MOOD_TEXT_SELECTOR
);

export const happyButton = querySelectorOrThrow<HTMLButtonElement>(
  document,
  HAPPY_BUTTON_SELECTOR
);

export const sadButton = querySelectorOrThrow<HTMLButtonElement>(
  document,
  SAD_BUTTON_SELECTOR
);

export const userPromptSection = querySelectorOrThrow<HTMLDivElement>(
  document,
  USER_PROMPT_SECTION_SELECTOR
);

export const speakMoodButton = querySelectorOrThrow<HTMLButtonElement>(
  document,
  SPEAK_MOOD_BUTTON_SELECTOR
);

export const spokenMoodSubmitButton = querySelectorOrThrow<HTMLButtonElement>(
  document,
  SPOKEN_MOOD_SUBMIT_BUTTON_SELECTOR
);

export const imListeningSection = querySelectorOrThrow<HTMLDivElement>(
  document,
  IM_LISTENING_SELECTOR
);
