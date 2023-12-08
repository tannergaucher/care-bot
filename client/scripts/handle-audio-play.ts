import { audio } from "../selectors";

interface TranscriptWord {
  startTime: number;
  endTime: number;
  word: string;
}

export function handleAudioPlay({
  transcriptWords,
}: {
  transcriptWords: TranscriptWord[];
}) {
  let currentWordIndex = 0;
  let interval: NodeJS.Timeout | null = null;

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
  const wordSpan = document.getElementById(
    `${currentWordIndex}`
  ) as HTMLSpanElement | null;

  const previousWordSpan = document.getElementById(
    `${currentWordIndex - 1}`
  ) as HTMLSpanElement | null;

  previousWordSpan?.removeAttribute("current");
  previousWordSpan?.setAttribute("spoken", "true");

  wordSpan?.setAttribute("current", "true");
  wordSpan?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}
