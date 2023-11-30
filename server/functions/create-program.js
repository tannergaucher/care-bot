"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProgram = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const typechat_1 = require("typechat");
const utils_1 = require("../utils");
const text_to_speech_1 = require("./text-to-speech");
const transcribe_speech_1 = require("./transcribe-speech");
function createProgram({ mood, model, storage, textToSpeechClient, transcribeSpeechClient, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = fs_1.default.readFileSync(path_1.default.join(__dirname, "programSchema.ts"), "utf8");
        const translator = (0, typechat_1.createJsonTranslator)(model, schema, "CareResponse");
        const response = yield translator.translate(mood);
        if (!response.success) {
            console.log(response);
            throw new Error("Failed to translate user input");
        }
        const text = (0, utils_1.getPlainTextResponse)(response.data);
        const { speechUri, speechUrl } = yield (0, text_to_speech_1.textToSpeech)({
            client: textToSpeechClient,
            storage,
            text,
        });
        console.log(speechUri, "created speech at gcsUri");
        const { transcriptionUri } = yield (0, transcribe_speech_1.transcribeSpeech)({
            client: transcribeSpeechClient,
            storage,
            speechUri,
        });
        console.log(transcriptionUri, "created transcription at gcsUri");
        return Object.assign({ speechUrl }, response.data);
    });
}
exports.createProgram = createProgram;
