import { audio } from "../selectors";
import { TranscriptWord } from "./get-words-from-transcription-result";

export function handleAudioPlay({
  transcriptWords,
}: {
  transcriptWords: TranscriptWord[];
}) {
  let currentWordIndex = 0;
  let interval: NodeJS.Timeout | null = null;

  clearInterval(interval!);

  interval = setInterval(() => {
    const currentTime = audio.currentTime;
    const currentWord = transcriptWords[currentWordIndex];

    if (currentTime >= currentWord.startTime) {
      highlightWord(currentWordIndex);
    }

    if (currentTime >= currentWord.endTime) {
      currentWordIndex++;
    }

    if (currentWordIndex >= transcriptWords.length) {
      highlightWord(currentWordIndex);
      clearInterval(interval!);
    }
  }, 40);
}

function highlightWord(currentWordIndex: number) {
  const currentWordSpan = document.getElementById(
    `${currentWordIndex}`
  ) as HTMLSpanElement | null;

  const previousCurrentWordSpan = document.querySelector(
    'span[current="true"]'
  ) as HTMLSpanElement | null;

  previousCurrentWordSpan?.removeAttribute("current");

  currentWordSpan?.setAttribute("current", "true");
  currentWordSpan?.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
}
