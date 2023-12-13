import { audio } from "../selectors/program-page";
import { TranscriptWord } from "./get-words-from-transcription-result";

export function handleAudioPlay({
  transcriptWords,
}: {
  transcriptWords: TranscriptWord[];
}) {
  let currentWordIndex = 0;
  let interval: NodeJS.Timeout | null = null;

  clearInterval(interval!);

  const spokenWords = document.querySelectorAll('span[spoken="true"]');

  spokenWords.forEach((word) => {
    word.removeAttribute("spoken");
  });

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
      highlightWord(currentWordIndex + 1);

      clearInterval(interval!);
    }
  }, 30);
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
  currentWordSpan?.setAttribute("spoken", "true");

  currentWordSpan?.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
}
