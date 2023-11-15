import type { Request } from "express";
import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { createCareProgram } from "./create-program";

dotenv.config();

const app = express();

app.use(json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/hello-world", (req: Request, res) => {
  res.json({
    message: "hello world",
  });
});

app.post("/create-program", async (req: Request, res) => {
  console.log("create-program");
  const { feelings } = req.body;

  if (!feelings) {
    res.status(400).json({
      message: "missing user input",
    });
    return;
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
