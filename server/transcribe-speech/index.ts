import * as CloudSpeech from "@google-cloud/speech";
import { Storage } from "@google-cloud/storage";
import { promisify } from "util";
import fs from "fs";

import { BUCKET_NAME } from "../utils";

type TranscribeSpeech = {
  gcsUri: string;
  client: CloudSpeech.SpeechClient;
  storage: Storage;
};

export async function transcribeSpeech({
  gcsUri,
  client,
  storage,
}: TranscribeSpeech) {
  const [response] = await client.recognize({
    audio: { uri: gcsUri },
    config: {
      encoding:
        CloudSpeech.protos.google.cloud.speech.v1.RecognitionConfig
          .AudioEncoding.MP3,
      sampleRateHertz: 16000,
      languageCode: "en-US",
    },
  });

  if (!response?.results) {
    throw new Error("No response");
  }

  const timestamp = gcsUri.split("/speech-")[1]?.split(".mp3")[0];

  const filename = `transcription-${timestamp}.json`;

  const writeFile = promisify(fs.writeFile);
  writeFile(filename, JSON.stringify(response.results), "binary");

  await storage
    .bucket(BUCKET_NAME)
    .upload(filename, {
      destination: filename,
    })
    .catch((err) => {
      console.log(err, "error uploading file");
    });

  return {
    transcriptionUri: `gs://${BUCKET_NAME}/${filename}`,
  };
}
