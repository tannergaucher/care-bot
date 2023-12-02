import { CreateProgramResponse } from "../../server/functions/create-program";

export function createProgramElements({
  data,
  programContainer,
}: {
  data: CreateProgramResponse;
  programContainer: HTMLDivElement;
}) {
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
      // Add space between words
      container.appendChild(document.createTextNode(" "));
    });
  }

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
