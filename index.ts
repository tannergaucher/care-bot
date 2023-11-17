import { ProgramResponse } from "./server/create-program/programSchema";
import { CreateProgramBody } from "./server/create-program";

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

  // fetch the example program for the first time, because the actual generation takes a long time.
  const res = await fetch(`${SERVER_BASE_URL}/example-program`);

  const data = (await res.json()) as ProgramResponse;
  renderProgram(data);

  // fetch(`${SERVER_BASE_URL}/create-program`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     mood: selectedMood,
  //   } as CreateProgramBody),
  // })
  //   .then((response) => response.json())
  //   .then((data: ProgramResponse) => {
  //     console.log(data);
  //     renderProgram(data);
  //     fieldset.disabled = false;
  //   })
  //   .catch((error) => console.error("Error:", error));
});

function renderProgram(data: ProgramResponse) {
  const programContainer = document.getElementById("program-container");

  if (!programContainer) {
    throw new Error("Could not find program container");
  }

  // Clear any existing content
  programContainer.innerHTML = "";
  // and show the container
  programContainer.style.display = "block";

  if (form) {
    form.style.display = "none";
  }

  const programIntro = document.createElement("p");
  programIntro.textContent = data.intro;
  programContainer.appendChild(programIntro);

  programContainer.appendChild(document.createElement("hr"));

  const morningTitle = document.createElement("h2");
  morningTitle.textContent = data.morningTitle;
  programContainer.appendChild(morningTitle);

  const morningText = document.createElement("marquee");
  morningText.textContent = data.morningText;
  programContainer.appendChild(morningText);

  programContainer.appendChild(document.createElement("hr"));

  const afternoonEveningTitle = document.createElement("h2");
  afternoonEveningTitle.textContent = data.afternoonEveningTitle;
  programContainer.appendChild(afternoonEveningTitle);

  const afternoonEveningText = document.createElement("marquee");
  afternoonEveningText.textContent = data.afternoonEveningText;
  programContainer.appendChild(afternoonEveningText);

  programContainer.appendChild(document.createElement("hr"));

  const nightTitle = document.createElement("h2");
  nightTitle.textContent = data.nightTitle;
  programContainer.appendChild(nightTitle);

  const nightText = document.createElement("marquee");
  nightText.textContent = data.nightText;
  programContainer.appendChild(nightText);

  programContainer.appendChild(document.createElement("hr"));

  const programOutro = document.createElement("p");
  programOutro.textContent = data.outro;
  programContainer.appendChild(programOutro);
}
