// import { CLOUD_TRANSCRIPTION_RESPONSE } from "./server/text-to-speech/utils";

// const words = CLOUD_TRANSCRIPTION_RESPONSE.results[0].alternatives[0].words;

// let currentWordIndex = 0;

// const audioSource = document.getElementById(
//   "audio-source"
// ) as HTMLAudioElement | null;

// if (!audioSource) {
//   throw new Error("Audio source not found");
// }

// let interval;

// audioSource.addEventListener("play", () => {
//   interval = setInterval(() => {
//     const currentTime = audioSource.currentTime;
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

//     console.log(wordSpan);

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

// audioSource.addEventListener("pause", () => {
//   clearInterval(interval);
// });
