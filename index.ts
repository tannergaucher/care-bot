import {
  CareProgramResponse,
  Day,
} from "./server/create-program/careProgramSchema";
import { CreateCareProgramBody } from "./server/create-program";

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

// add an event listener to fetch the example program from the server after the document has loaded
window.addEventListener("load", function () {
  fetch(`${SERVER_BASE_URL}/example-program`)
    .then((response) => response.json())
    .then((data: CareProgramResponse) => {
      Object.values(data.program).forEach((day) => {
        const dayCard = createDayCard(day);
        programContainer.appendChild(dayCard);
      });
    })
    .catch((error) => console.error("Error:", error));
});

// add an event listener to the form to fetch the user's program from the server
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const feelings = formData.get("feelings") as string | null;

  fieldset.disabled = true;

  fetch(`${SERVER_BASE_URL}/create-program`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userInput: feelings,
    } as CreateCareProgramBody),
  })
    .then((response) => response.json())
    .then((data: CareProgramResponse) => {
      Object.values(data.program).forEach((day) => {
        const dayCard = createDayCard(day);
        programContainer.appendChild(dayCard);
      });

      fieldset.disabled = false;
    })
    .catch((error) => console.error("Error:", error));
});

function createDayCard(day: Day) {
  const dayCard = document.createElement("article");
  dayCard.classList.add("day-container");

  const dayHeader = document.createElement("h2");
  dayHeader.innerText = day.day;
  dayCard.appendChild(dayHeader);

  const themeHeader = document.createElement("h3");
  themeHeader.innerText = day.theme;
  dayCard.appendChild(themeHeader);

  const morningCareStep = document.createElement("p");
  morningCareStep.innerText = day.morning.text;
  dayCard.appendChild(morningCareStep);

  const afternoonCareStep = document.createElement("p");
  afternoonCareStep.innerText = day.afternoonEvening.text;
  dayCard.appendChild(afternoonCareStep);

  const nightCareStep = document.createElement("p");
  nightCareStep.innerText = day.night.text;
  dayCard.appendChild(nightCareStep);

  return dayCard;
}
