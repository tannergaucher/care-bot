import { CreateProgramResponse } from "../../server/functions/create-program";
import { audio, programContainer } from "../selectors";
import { createProgramElements } from "./create-program-elements";
import { getWordsFromTranscriptionResult } from "./get-words-from-transcription-result";
import { handleAudioPlay } from "./handle-audio-play";

export function renderProgram(data: CreateProgramResponse) {
  createProgramElements({ data, programContainer });

  audio.src = data.speechUrl;
  audio.load();
  audio.play();
  audio.addEventListener("play", () =>
    handleAudioPlay({
      transcriptWords: getWordsFromTranscriptionResult(
        data.transcriptionResult
      ),
    })
  );
}
