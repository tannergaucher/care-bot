import { CreateProgramResponse } from "../../server/functions/create-program";
import { audio, form, programContainer } from "../selectors";

interface TranscriptWord {
  startTime: number;
  endTime: number;
  word: string;
}

export function renderProgram(data: CreateProgramResponse) {
  const transcriptWords = getWordsFromTranscriptionResult(
    data.transcriptionResult
  );

  createElements({ data });

  audio.src = data.speechUrl;
  audio.load();
  audio.play();
  audio.addEventListener("play", () => handlePlay({ transcriptWords }));
}

function getWordsFromTranscriptionResult(
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

function createElements({ data }: { data: CreateProgramResponse }) {
  let wordId = 0;

  // We want to wrap each word in a span so we can highlight it
  function wrapWordsInSpans(text: string) {
    return text.split(" ").map((word) => {
      const span = document.createElement("span");
      span.id = `${wordId++}`;
      span.textContent = word;
      return span;
    });
  }

  function appendSpansToContainer(
    container: HTMLElement,
    spans: HTMLElement[]
  ) {
    spans.forEach((span) => {
      container.appendChild(span);
      container.appendChild(document.createTextNode(" ")); // Add space between words
    });
  }

  form.style.display = "none";
  programContainer.innerHTML = "";

  audio.style.display = "block";
  programContainer.style.display = "block";

  const programIntro = document.createElement("p");
  appendSpansToContainer(programIntro, wrapWordsInSpans(data.intro));
  programContainer.appendChild(programIntro);

  programContainer.appendChild(document.createElement("hr"));

  const morningTitle = document.createElement("h2");
  appendSpansToContainer(
    morningTitle,
    wrapWordsInSpans(`${data.morning.period} ${data.morning.step.careType}`)
  );
  programContainer.appendChild(morningTitle);

  const morningText = document.createElement("p");
  appendSpansToContainer(morningText, wrapWordsInSpans(data.morning.step.text));
  programContainer.appendChild(morningText);

  programContainer.appendChild(document.createElement("hr"));

  const afternoonEveningTitle = document.createElement("h2");
  appendSpansToContainer(
    afternoonEveningTitle,
    wrapWordsInSpans(
      `${data.afternoonEvening.period} ${data.afternoonEvening.step.careType}`
    )
  );
  programContainer.appendChild(afternoonEveningTitle);

  const afternoonEveningText = document.createElement("p");
  appendSpansToContainer(
    afternoonEveningText,
    wrapWordsInSpans(data.afternoonEvening.step.text)
  );
  programContainer.appendChild(afternoonEveningText);

  programContainer.appendChild(document.createElement("hr"));

  const nightTitle = document.createElement("h2");
  appendSpansToContainer(
    nightTitle,
    wrapWordsInSpans(`${data.night.period} ${data.night.step.careType}`)
  );
  programContainer.appendChild(nightTitle);

  const nightText = document.createElement("p");
  appendSpansToContainer(nightText, wrapWordsInSpans(data.night.step.text));
  programContainer.appendChild(nightText);

  programContainer.appendChild(document.createElement("hr"));

  const programOutro = document.createElement("p");
  appendSpansToContainer(programOutro, wrapWordsInSpans(data.outro));
  programContainer.appendChild(programOutro);
}

function handlePlay({
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
      clearInterval(interval!);
    }
  }, 50);
}

function highlightWord(currentWordIndex: number) {
  const wordSpan = document.getElementById(
    `${currentWordIndex}`
  ) as HTMLSpanElement | null;

  if (wordSpan?.getAttribute("current")) {
    return;
  }

  const previousWordSpan = document.getElementById(
    `${currentWordIndex - 1}`
  ) as HTMLSpanElement | null;

  if (previousWordSpan) {
    previousWordSpan.removeAttribute("current");
    previousWordSpan.setAttribute("spoken", "true");
  }

  wordSpan?.setAttribute("current", "true");
  wordSpan?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}
