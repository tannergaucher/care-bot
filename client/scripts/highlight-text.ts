// import { audio } from "../selectors";

// // get words from transcription response
// const words = [];

// let interval;

// audio.addEventListener("play", () => {
//   let currentWordIndex = 0;

//   interval = setInterval(() => {
//     const currentTime = audio.currentTime;
//     const currentWord = words[currentWordIndex];

//     if (currentTime >= parseInt(currentWord.startTime)) {
//       highlightWord(currentWordIndex);
//     }

//     if (currentTime >= parseInt(currentWord.endTime)) {
//       currentWordIndex++;
//     }

//     if (currentWordIndex >= words.length) {
//       clearInterval(interval);
//     }
//   }, 50);

//   function highlightWord(currentWordIndex: number) {
//     const wordSpan = document.getElementById(
//       `${currentWordIndex}`
//     ) as HTMLSpanElement | null;

//     if (wordSpan?.getAttribute("current")) {
//       return;
//     }

//     const previousWordSpan = document.getElementById(
//       `${currentWordIndex - 1}`
//     ) as HTMLSpanElement | null;

//     if (previousWordSpan) {
//       previousWordSpan.removeAttribute("current");
//       previousWordSpan.setAttribute("spoken", "true");
//     }

//     wordSpan?.setAttribute("current", "true");
//     wordSpan?.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//       inline: "center",
//     });
//   }
// });

// audio.addEventListener("pause", () => {
//   clearInterval(interval);
// });
