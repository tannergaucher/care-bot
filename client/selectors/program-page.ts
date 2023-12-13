const LOADING_INDICATOR_SELECTOR = "#loading-indicator";
const PROGRAM_CONTAINER_SELECTOR = "#program-container";
const AUDIO = "audio";

import { querySelectorOrThrow } from "../utils";

export const audio = querySelectorOrThrow<HTMLAudioElement>(document, AUDIO);

export const loadingIndicator = querySelectorOrThrow<HTMLDivElement>(
  document,
  LOADING_INDICATOR_SELECTOR
);

export const programContainer = querySelectorOrThrow<HTMLDivElement>(
  document,
  PROGRAM_CONTAINER_SELECTOR
);
