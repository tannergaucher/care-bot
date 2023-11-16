import type { Request } from "express";
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { createCareProgram } from "./create-program";
import { MOCK_CARE_PROGRAM_RESPONSE } from "./mocks";
import { CLIENT_BASE_URL } from "../utils";

dotenv.config();

const app = express();

app.use(json());

app.use(
  cors({
    origin: CLIENT_BASE_URL,
  })
);

app.get("/example-program", (req: Request, res) => {
  return res.json(MOCK_CARE_PROGRAM_RESPONSE);
});

app.post("/create-program", async (req: Request, res) => {
  console.log("create-program");
  const { feelings } = req.body;

  if (!feelings) {
    console.log("missing user input!");

    return res.status(400).json({
      message: "missing user input",
    });
  }

  const response = await createCareProgram({
    userInput: feelings,
  });

  return res.json(response);
});

const port = parseInt(process.env.PORT ?? "8080");

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
