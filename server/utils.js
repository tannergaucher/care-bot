"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlainTextResponse = exports.SERVER_BASE_URL = exports.CLIENT_BASE_URL = exports.BUCKET_NAME = void 0;
exports.BUCKET_NAME = "carebot-text-to-speech";
exports.CLIENT_BASE_URL = "http://localhost:5173";
exports.SERVER_BASE_URL = "http://localhost:8080";
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
