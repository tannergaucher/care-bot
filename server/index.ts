import type { Request, Response } from "express";
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { createProgram } from "./create-program";
import { MOCK_PROGRAM_RESPONSE } from "./mocks";

import { CLIENT_BASE_URL } from "../utils";

import { CreateProgramBody } from "./create-program";

dotenv.config();

const app = express();

app.use(json());

app.use(
  cors({
    origin: CLIENT_BASE_URL,
  })
);

app.get("/example-program", (req: Request, res) => {
  return res.json(MOCK_PROGRAM_RESPONSE);
});

app.post(
  "/create-program",
  async (req: Request<{}, {}, CreateProgramBody>, res: Response) => {
    console.log("create-program");

    const { mood } = req.body;

    if (!mood) {
      return res.status(400).json({
        message: "No mood provided",
      });
    }

    const response = await createProgram({
      mood,
    });

    return res.json(response);
  }
);

const port = parseInt(process.env.PORT ?? "8080");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
