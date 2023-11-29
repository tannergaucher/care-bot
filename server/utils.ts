import { CareResponse } from "./functions/programSchema";

export const BUCKET_NAME = "carebot-text-to-speech";
export const SERVER_BASE_URL = "http://localhost:8080";

export function getPlainTextResponse(response: CareResponse) {
  let text = "";

  text += `${response.intro}.`;
  text += "\n\n";

  text += `${response.morning.period}. ${response.morning.step.careType}.`;
  text += "\n\n";
  text += `${response.morning.step.text}.`;

  text += "\n\n";

  text += `${response.afternoonEvening.period}. ${response.afternoonEvening.step.careType}.`;
  text += "\n\n";
  text += `${response.afternoonEvening.step.text}.`;

  text += "\n\n";

  text += `${response.night.period}. ${response.night.step.careType}.`;
  text += "\n\n";
  text += `${response.night.step.text}.`;

  text += "\n\n";

  text += `${response.outro}.`;

  return text;
}
