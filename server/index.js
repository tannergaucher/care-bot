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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToSpeechClient = exports.transcribeSpeechClient = exports.storage = exports.CloudStorage = exports.TextToSpeech = exports.CloudSpeech = void 0;
const CloudSpeech = __importStar(require("@google-cloud/speech"));
exports.CloudSpeech = CloudSpeech;
const CloudStorage = __importStar(require("@google-cloud/storage"));
exports.CloudStorage = CloudStorage;
const TextToSpeech = __importStar(require("@google-cloud/text-to-speech"));
exports.TextToSpeech = TextToSpeech;
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importStar(require("express"));
const typechat_1 = require("typechat");
const config_1 = require("./config");
const create_program_1 = require("./functions/create-program");
dotenv_1.default.config();
exports.storage = new CloudStorage.Storage();
exports.transcribeSpeechClient = new CloudSpeech.v1.SpeechClient();
exports.textToSpeechClient = new TextToSpeech.v1.TextToSpeechClient();
const model = (0, typechat_1.createLanguageModel)(process.env);
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use((0, cors_1.default)({
    origin: config_1.WORKER_BASE_URL,
}));
app.post("/create-program", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mood } = req.body;
    if (!mood) {
        return res.status(400).json({
            message: "No mood provided",
        });
    }
    return res.json(yield (0, create_program_1.createProgram)({
        mood,
        model,
    }));
}));
const port = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "8080");
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
