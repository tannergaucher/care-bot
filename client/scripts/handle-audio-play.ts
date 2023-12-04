import { audio } from "../selectors";
import { TranscriptWord } from "./types";

export function handleAudioPlay({
  transcriptWords,
}: {
  transcriptWords: TranscriptWord[];
}) {
  let currentWordIndex = 0;
  let interval: NodeJS.Timeout | undefined = undefined;

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
      clearInterval(interval);
    }
  }, 30);
}

function highlightWord(currentWordIndex: number) {
  const currentWordSpan = document.getElementById(
    `${currentWordIndex}`
  ) as HTMLSpanElement | null;

  if (!currentWordSpan) return;

  const previousWordSpan = document.getElementById(
    `${currentWordIndex - 1}`
  ) as HTMLSpanElement | null;

  if (previousWordSpan) {
    previousWordSpan.removeAttribute("current");
  }

  currentWordSpan.setAttribute("spoken", "true");
  currentWordSpan.setAttribute("current", "true");

  currentWordSpan.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}
