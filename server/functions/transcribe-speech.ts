import fs from "fs";
import { promisify } from "util";

import { CloudSpeech, CloudStorage } from "../index";
import { BUCKET_NAME } from "../utils";

type TranscribeSpeech = {
  speechUri: string;
  client: CloudSpeech.v1.SpeechClient;
  storage: CloudStorage.Storage;
};

export async function transcribeSpeech({
  speechUri,
  client,
  storage,
}: TranscribeSpeech) {
  const [response] = await client.recognize({
    audio: { uri: speechUri },
    config: {
      enableWordTimeOffsets: true,
      encoding:
        CloudSpeech.protos.google.cloud.speech.v1.RecognitionConfig
          .AudioEncoding.LINEAR16,
      languageCode: "en-US",
      sampleRateHertz: 24000,
      model: "latest_long",
    },
  });

  if (!response?.results) {
    throw new Error("No response");
  }

  const timestamp = speechUri.split("/speech-")[1]?.split(`.wav`)[0];

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
    })
    .finally(() => {
      fs.unlink(filename, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });

  return {
    results: response.results,
    transcriptionUri: `gs://${BUCKET_NAME}/${filename}`,
  };
}
