import { CreateProgramResponse } from "../../server/functions/create-program";
import { TranscriptWord } from "./types";

export function getWordsFromTranscriptionResult(
  transcriptionResult: CreateProgramResponse["transcriptionResult"]
): TranscriptWord[] {
  const words: TranscriptWord[] = [];

  transcriptionResult.forEach((result) => {
    result.alternatives?.forEach((alternative) => {
      alternative.words?.forEach((word) => {
        if (!word.startTime || !word.endTime || !word.word) {
          return;
        }
        words.push({
          startTime: parseFloat(
            `${word.startTime.seconds}.${word.startTime.nanos}`.replace("s", "")
          ),
          endTime: parseFloat(
            `${word.endTime.seconds}.${word.endTime.nanos}`.replace("s", "")
          ),
          word: word.word,
        });
      });
    });
  });

  return words;
}
