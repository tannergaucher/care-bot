import type { Request, Response } from "express";
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createLanguageModel } from "typechat";
import { Storage } from "@google-cloud/storage";

import {
  createProgram,
  type CreateProgramBody,
} from "./functions/create-program";
import { CLIENT_BASE_URL } from "./config";

dotenv.config();

const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
});

const model = createLanguageModel(process.env);

const app = express();

app.use(json());

app.use(
  cors({
    origin: CLIENT_BASE_URL,
  })
);

app.post(
  "/create-program",
  async (req: Request<{}, {}, CreateProgramBody>, res: Response) => {
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
    });

    return res.json(response);
  }
);

const port = parseInt(process.env.PORT ?? "8080");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
