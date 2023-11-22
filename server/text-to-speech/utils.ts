import { CareResponse } from "../create-program/programSchema";

export type CloudTranscriptionResponse = {
  results: Result[];
};

type Result = {
  alternatives: Alternative[];
  languageCode: string;
  resultEndTime: string;
};

type Alternative = {
  confidence: number;
  words: Word[];
  transcript: string;
};

type Word = {
  word: string;
  confidence: number;
  startTime: string;
  endTime: string;
};

export function getPlainTextResponse(response: CareResponse) {
  let text = "";

  text += response.intro;
  text += "\n\n";

  text += `${response.morning.period} ${response.morning.step.careType}.`;
  text += "\n\n";
  text += `${response.morning.step.text}.`;

  text += "\n\n";

  text += `${response.afternoonEvening.period} ${response.afternoonEvening.step.careType}.`;
  text += "\n\n";
  text += `${response.afternoonEvening.step.text}.`;

  text += "\n\n";

  text += `${response.night.period} ${response.night.step.careType}.`;
  text += "\n\n";
  text += `${response.night.step.text}.`;

  text += "\n\n";

  text += `${response.outro}.`;

  return text;
}
