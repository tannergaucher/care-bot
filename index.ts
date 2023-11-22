import { ProgramResponse } from "./server/create-program/programSchema";
import { CreateProgramBody } from "./server/create-program";

import "./highlight-text";

import "./index.css";

import { SERVER_BASE_URL } from "./utils";

const form = document.querySelector("form") as HTMLFormElement | null;

if (!form) {
  throw new Error("Could not find form");
}

const fieldset = form.querySelector("fieldset") as HTMLFieldSetElement | null;

if (!fieldset) {
  throw new Error("Could not find fieldset");
}

const audioElement = document.getElementById(
  "audio-source"
) as HTMLAudioElement | null;

if (audioElement) {
  audioElement.style.display = "none";
}

const programContainer = document.getElementById(
  "program-container"
) as HTMLDivElement | null;

if (!programContainer) {
  throw new Error("Could not find program container");
}

let selectedMood: string | null = null;

if (selectedMood === null) {
  programContainer.style.display = "none";
}

const buttons = document.querySelectorAll('button[name="mood"]');

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedMood = (event.target as HTMLButtonElement)
      .value as ProgramResponse["currentUserMood"];
  });
});

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (!event.target) {
    throw new Error("Could not find event target");
  }

  if (!selectedMood) {
    throw new Error("No mood selected");
  }

  fieldset.disabled = true;

  fetch(`${SERVER_BASE_URL}/create-program`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mood: selectedMood,
    } as CreateProgramBody),
  })
    .then((response) => response.json())
    .then((data: ProgramResponse) => {
      console.log(data);
      renderProgram(data);
      fieldset.disabled = false;
    })
    .catch((error) => console.error("Error:", error));
});

let wordId = 0;

function renderProgram(data: ProgramResponse) {
  const programContainer = document.getElementById("program-container");

  if (!programContainer) {
    throw new Error("Could not find program container");
  }

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

  programContainer.innerHTML = "";
  programContainer.style.display = "block";

  if (form) {
    form.style.display = "none";
  }

  if (audioElement) {
    audioElement.style.display = "block";
  }

  const programIntro = document.createElement("p");
  appendSpansToContainer(programIntro, wrapWordsInSpans(data.intro));
  programContainer.appendChild(programIntro);

  programContainer.appendChild(document.createElement("hr"));

  const morningTitle = document.createElement("h2");
  appendSpansToContainer(morningTitle, wrapWordsInSpans(data.morningTitle));
  programContainer.appendChild(morningTitle);

  const morningText = document.createElement("p");
  appendSpansToContainer(morningText, wrapWordsInSpans(data.morningText));
  programContainer.appendChild(morningText);

  programContainer.appendChild(document.createElement("hr"));

  const afternoonEveningTitle = document.createElement("h2");
  appendSpansToContainer(
    afternoonEveningTitle,
    wrapWordsInSpans(data.afternoonEveningTitle)
  );
  programContainer.appendChild(afternoonEveningTitle);

  const afternoonEveningText = document.createElement("p");
  appendSpansToContainer(
    afternoonEveningText,
    wrapWordsInSpans(data.afternoonEveningText)
  );
  programContainer.appendChild(afternoonEveningText);

  programContainer.appendChild(document.createElement("hr"));

  const nightTitle = document.createElement("h2");
  appendSpansToContainer(nightTitle, wrapWordsInSpans(data.nightTitle));
  programContainer.appendChild(nightTitle);

  const nightText = document.createElement("p");
  appendSpansToContainer(nightText, wrapWordsInSpans(data.nightText));
  programContainer.appendChild(nightText);

  programContainer.appendChild(document.createElement("hr"));

  const programOutro = document.createElement("p");
  appendSpansToContainer(programOutro, wrapWordsInSpans(data.outro));
  programContainer.appendChild(programOutro);
}
