import * as CloudSpeech from "@google-cloud/speech";
import * as CloudStorage from "@google-cloud/storage";
import * as TextToSpeech from "@google-cloud/text-to-speech";
import cors from "cors";
import dotenv from "dotenv";
import express, { json, type Request, type Response } from "express";
import { createLanguageModel } from "typechat";

export { CloudSpeech, TextToSpeech, CloudStorage };

import { CLIENT_BASE_URL } from "./config";
import {
  createProgram,
  type CreateProgramBody,
} from "./functions/create-program";

dotenv.config();

const app = express();

app.use(json());

app.use(
  cors({
    origin: CLIENT_BASE_URL,
  })
);

const model = createLanguageModel(process.env);

const storage = new CloudStorage.Storage();

const transcribeSpeechClient = new CloudSpeech.v1.SpeechClient();

const textToSpeechClient = new TextToSpeech.v1.TextToSpeechClient();

app.post(
  "/create-program",
  async (req: Request<object, object, CreateProgramBody>, res: Response) => {
    const { mood } = req.body;

    if (!mood) {
      return res.status(400).json({
        message: "No mood provided",
      });
    }

    return res.json(
      await createProgram({
        mood,
        model,
        storage,
        transcribeSpeechClient,
        textToSpeechClient,
      })
    );
  }
);

const port = parseInt(process.env.PORT ?? "8080");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
