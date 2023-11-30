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
exports.transcribeSpeech = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const index_1 = require("../index");
const utils_1 = require("../utils");
function transcribeSpeech({ speechUri, client, storage, }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const [response] = yield client.recognize({
            audio: { uri: speechUri },
            config: {
                enableWordTimeOffsets: true,
                encoding: index_1.CloudSpeech.protos.google.cloud.speech.v1.RecognitionConfig
                    .AudioEncoding.LINEAR16,
                languageCode: "en-US",
                sampleRateHertz: 24000,
                model: "latest_long",
            },
        });
        if (!(response === null || response === void 0 ? void 0 : response.results)) {
            throw new Error("No response");
        }
        const timestamp = (_a = speechUri.split("/speech-")[1]) === null || _a === void 0 ? void 0 : _a.split(`.wav`)[0];
        const filename = `transcription-${timestamp}.json`;
        const writeFile = (0, util_1.promisify)(fs_1.default.writeFile);
        writeFile(filename, JSON.stringify(response.results), "binary");
        yield storage
            .bucket(utils_1.BUCKET_NAME)
            .upload(filename, {
            destination: filename,
        })
            .catch((err) => {
            console.log(err, "error uploading file");
        })
            .finally(() => {
            fs_1.default.unlink(filename, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
        return {
            results: response.results,
            transcriptionUri: `gs://${utils_1.BUCKET_NAME}/${filename}`,
        };
    });
}
exports.transcribeSpeech = transcribeSpeech;
