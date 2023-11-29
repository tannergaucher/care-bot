import { CareResponse } from "./functions/programSchema";

export const BUCKET_NAME = "carebot-text-to-speech";

// export const CLIENT_BASE_URL = "https://care-bot.netlify.app";

// export const SERVER_BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://server-yzmezs2csa-ue.a.run.app"
//     : "http://localhost:8080";

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
