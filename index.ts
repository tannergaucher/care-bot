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

window.addEventListener("load", function () {
  fetch(`${SERVER_BASE_URL}/example-program`)
    .then((response) => response.json())
    .then((data: ProgramResponse) => {
      console.log(data);
      renderProgram(data);
      if (form) {
        form.style.display = "block";
      }
    })
    .catch((error) => console.error("Error:", error));
});

let selectedMood: string | null = null;

const buttons = document.querySelectorAll('button[name="mood"]');

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedMood = (event.target as HTMLButtonElement)
      .value as ProgramResponse["currentUserMood"];
  });
});

form.addEventListener("submit", function (event) {
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

function renderProgram(data: ProgramResponse) {
  const programContainer = document.getElementById("program-container");

  if (!programContainer) {
    throw new Error("Could not find program container");
  }

  // Clear any existing content
  programContainer.innerHTML = "";

  if (form) {
    form.style.display = "none";
  }

  const programIntro = document.createElement("p");
  programIntro.textContent = data.intro;
  programContainer.appendChild(programIntro);

  const morningTitle = document.createElement("h2");
  morningTitle.textContent = data.morningTitle;
  programContainer.appendChild(morningTitle);

  const morningText = document.createElement("p");
  morningText.textContent = data.morningText;
  programContainer.appendChild(morningText);

  const afternoonEveningTitle = document.createElement("h2");
  afternoonEveningTitle.textContent = data.afternoonEveningTitle;
  programContainer.appendChild(afternoonEveningTitle);

  const afternoonEveningText = document.createElement("p");
  afternoonEveningText.textContent = data.afternoonEveningText;
  programContainer.appendChild(afternoonEveningText);

  const nightTitle = document.createElement("h2");
  nightTitle.textContent = data.nightTitle;
  programContainer.appendChild(nightTitle);

  const nightText = document.createElement("p");
  nightText.textContent = data.nightText;
  programContainer.appendChild(nightText);

  const programOutro = document.createElement("p");
  programOutro.textContent = data.outro;
  programContainer.appendChild(programOutro);
}
