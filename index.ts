import { CareProgramResponse } from "./server/create-program/careProgramSchema";

const programContainer = document.getElementById(
  "program-container"
) as HTMLDivElement | null;

if (!programContainer) {
  throw new Error("Could not find program container");
}

const feelingsForm = document.getElementById(
  "feelings-form"
) as HTMLFormElement | null;

if (!feelingsForm) {
  throw new Error("Could not find feelings form");
}

feelingsForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(feelingsForm);

  const feelings = formData.get("feelings") as string | null;

  feelingsForm.setAttribute("disabled", "true");

  fetch("http://localhost:8080/create-program", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      feelings,
    }),
  })
    .then((response) => response.json())
    .then((data: CareProgramResponse) => {
      Object.values(data.program).forEach((day) => {
        const dayCard = createDayCard(day);
        programContainer.appendChild(dayCard);
      });

      feelingsForm.removeAttribute("disabled");
    })
    .catch((error) => console.error("Error:", error));
});

type Day =
  | CareProgramResponse["program"]["monday"]
  | CareProgramResponse["program"]["tuesday"]
  | CareProgramResponse["program"]["wednesday"]
  | CareProgramResponse["program"]["thursday"]
  | CareProgramResponse["program"]["friday"]
  | CareProgramResponse["program"]["saturday"]
  | CareProgramResponse["program"]["sunday"];

function createDayCard(day: Day) {
  // create a card for each day
  // the container is an article element
  // then render all data inside the article element
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
