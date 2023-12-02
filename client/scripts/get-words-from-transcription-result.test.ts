import { expect, test } from "vitest";

import { CreateProgramResponse } from "../../server/functions/create-program";
import { getWordsFromTranscriptionResult } from "./get-words-from-transcription-result";

test("getWordsFromTranscriptionResult", () => {
  const mockTranscriptionResult: CreateProgramResponse["transcriptionResult"] =
    [
      {
        alternatives: [
          {
            words: [
              {
                startTime: {
                  seconds: "0",
                  nanos: 0,
                },
                endTime: {
                  seconds: "1",
                  nanos: 0,
                },
                word: "hello",
              },
              {
                startTime: {
                  seconds: "1",
                  nanos: 0,
                },
                endTime: {
                  seconds: "2",
                  nanos: 0,
                },
                word: "world",
              },
            ],
          },
        ],
      },
    ];

  const result = getWordsFromTranscriptionResult(mockTranscriptionResult);

  expect(result).toEqual([
    {
      endTime: 1,
      startTime: 0,
      word: "hello",
    },
    {
      endTime: 2,
      startTime: 1,
      word: "world",
    },
  ]);
});
