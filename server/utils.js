"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlainTextResponse = exports.BUCKET_NAME = void 0;
exports.BUCKET_NAME = "carebot-text-to-speech";
// export const CLIENT_BASE_URL = "https://care-bot.netlify.app";
// export const SERVER_BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://server-yzmezs2csa-ue.a.run.app"
//     : "http://localhost:8080";
function getPlainTextResponse(response) {
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
exports.getPlainTextResponse = getPlainTextResponse;
