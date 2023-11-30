import type { SpeechClient as TranscribeSpeechClientType } from "@google-cloud/speech";
import { SpeechClient as TranscribeSpeechClient } from "@google-cloud/speech";
import type { Storage as StorageType } from "@google-cloud/storage";
import { Storage } from "@google-cloud/storage";
import type { TextToSpeechClient as TextToSpeechClientType } from "@google-cloud/text-to-speech";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import cors from "cors";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import express, { json } from "express";
import { createLanguageModel } from "typechat";

export { TranscribeSpeechClientType, TextToSpeechClientType, StorageType };

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

const storage = new Storage();

const transcribeSpeechClient = new TranscribeSpeechClient();

const textToSpeechClient = new TextToSpeechClient();

app.post(
  "/create-program",
  async (req: Request<object, object, CreateProgramBody>, res: Response) => {
    const { mood } = req.body;

    if (!mood) {
      return res.status(400).json({
        message: "No mood provided",
      });
    }

    const response = await createProgram({
      mood,
      model,
      storage,
      transcribeSpeechClient,
      textToSpeechClient,
    });

    return res.json(response);
  }
);

const port = parseInt(process.env.PORT ?? "8080");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
