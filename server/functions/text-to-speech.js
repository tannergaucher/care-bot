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
exports.textToSpeech = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const index_1 = require("../index");
const utils_1 = require("../utils");
function textToSpeech({ text, client, storage, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const [response] = yield client.synthesizeSpeech({
            input: { text },
            voice: {
                languageCode: "en-US",
                ssmlGender: index_1.TextToSpeech.protos.google.cloud.texttospeech.v1.SsmlVoiceGender.MALE,
            },
            audioConfig: {
                sampleRateHertz: 24000,
                audioEncoding: index_1.TextToSpeech.protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16,
            },
        });
        if (!response.audioContent) {
            throw new Error("No audio content");
        }
        const timestamp = new Date().getTime();
        const filename = `speech-${timestamp}.wav`;
        const writeFile = (0, util_1.promisify)(fs_1.default.writeFile);
        writeFile(filename, response.audioContent, "binary");
        yield storage
            .bucket(utils_1.BUCKET_NAME)
            .upload(filename, {
            destination: filename,
        })
            .catch((err) => {
            console.log(err);
        })
            .finally(() => {
            fs_1.default.unlink(filename, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
        return {
            speechUri: `gs://${utils_1.BUCKET_NAME}/${filename}`,
            speechUrl: `https://storage.googleapis.com/${utils_1.BUCKET_NAME}/${filename}`,
        };
    });
}
exports.textToSpeech = textToSpeech;
