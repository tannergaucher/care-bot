import fs from "fs";
import { promisify } from "util";

import { CloudStorage, TextToSpeech } from "../index";
import { BUCKET_NAME } from "../utils";

interface TextToSpeechParams {
  client: TextToSpeech.v1.TextToSpeechClient;
  storage: CloudStorage.Storage;
  text: string;
}

export async function textToSpeech({
  text,
  client,
  storage,
}: TextToSpeechParams) {
  const [response] = await client.synthesizeSpeech({
    input: { text },
    voice: {
      languageCode: "en-US",
      ssmlGender:
        TextToSpeech.protos.google.cloud.texttospeech.v1.SsmlVoiceGender.MALE,
    },
    audioConfig: {
      sampleRateHertz: 24000,
      audioEncoding:
        TextToSpeech.protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16,
    },
  });

  if (!response.audioContent) {
    throw new Error("No audio content");
  }

  const timestamp = new Date().getTime();

  const filename = `speech-${timestamp}.wav`;

  const writeFile = promisify(fs.writeFile);

  writeFile(filename, response.audioContent, "binary");

  await storage
    .bucket(BUCKET_NAME)
    .upload(filename, {
      destination: filename,
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      fs.unlink(filename, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });

  return {
    speechUri: `gs://${BUCKET_NAME}/${filename}`,
    speechUrl: `https://storage.googleapis.com/${BUCKET_NAME}/${filename}`,
  };
}
