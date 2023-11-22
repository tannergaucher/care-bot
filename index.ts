import { CareResponse } from "./server/create-program/programSchema";
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

const spokenMood = document.getElementById(
  "spoken-mood"
) as HTMLTextAreaElement | null;

if (spokenMood) {
  spokenMood.style.display = "none";
}

const spokenMoodSubmit = document.getElementById(
  "spoken-mood-submit"
) as HTMLButtonElement | null;

if (spokenMoodSubmit) {
  spokenMoodSubmit.style.display = "none";
}

const programContainer = document.getElementById(
  "program-container"
) as HTMLDivElement | null;

if (!programContainer) {
  throw new Error("Could not find program container");
}

let selectedMood: string | null = null;

const loadingElement = document.getElementById(
  "loading"
) as HTMLDivElement | null;

if (!loadingElement) {
  throw new Error("Could not find loading element");
}

if (selectedMood === null) {
  programContainer.style.display = "none";
  loadingElement.style.display = "none";
}

const dayOfWeek = `It's ${new Date().toLocaleString("en-us", {
  weekday: "long",
})} and I feel: `;

const buttons = document.querySelectorAll('button[name="mood"]');

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedMood = (dayOfWeek +
      (event.target as HTMLButtonElement)
        .value) as CareResponse["currentUserMood"];
  });
});

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  fieldset.disabled = true;
  document.body.setAttribute("loading", "true");
  form.style.display = "none";
  loadingElement.style.display = "block";

  if (!event.target) {
    throw new Error("Could not find event target");
  }

  // get the value from the textarea spoken mood
  const spokenMood = document.getElementById(
    "spoken-mood"
  ) as HTMLTextAreaElement | null;

  const spokenMoodValue = spokenMood?.value;

  if (spokenMoodValue) {
    selectedMood = dayOfWeek + spokenMoodValue;
  }

  if (!selectedMood) {
    throw new Error("No mood selected");
  }

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
    .then((data: CareResponse) => {
      console.log(data);
      renderProgram(data);
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      fieldset.disabled = false;
      document.body.removeAttribute("loading");
      loadingElement.style.display = "none";
    });
});

let wordId = 0;

function renderProgram(data: CareResponse) {
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
