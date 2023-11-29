import * as CloudSpeech from "@google-cloud/speech";
import { Storage } from "@google-cloud/storage";
import { promisify } from "util";
import fs from "fs";

import { BUCKET_NAME } from "../utils";

type TranscribeSpeech = {
  speechGcsUri: string;
  client: CloudSpeech.v1.SpeechClient;
  storage: Storage;
};

export async function transcribeSpeech({
  speechGcsUri,
  client,
  storage,
}: TranscribeSpeech) {
  const [response] = await client.recognize({
    audio: { uri: speechGcsUri },
    config: {
      encoding:
        CloudSpeech.protos.google.cloud.speech.v1.RecognitionConfig
          .AudioEncoding.LINEAR16,
      languageCode: "en-US",
      sampleRateHertz: 24000,
      useEnhanced: true,
    },
  });

  if (!response?.results) {
    throw new Error("No response");
  }

  const timestamp = speechGcsUri.split("/speech-")[1]?.split(`.wav`)[0];

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
