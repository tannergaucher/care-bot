"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const CloudSpeech = __importStar(require("@google-cloud/speech"));
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const utils_1 = require("../utils");
function transcribeSpeech({ speechUri, client, storage, }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const [response] = yield client.recognize({
            audio: { uri: speechUri },
            config: {
                enableWordTimeOffsets: true,
                encoding: CloudSpeech.protos.google.cloud.speech.v1.RecognitionConfig
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
            transcriptionUri: `gs://${utils_1.BUCKET_NAME}/${filename}`,
            results: response.results,
        };
    });
}
exports.transcribeSpeech = transcribeSpeech;
