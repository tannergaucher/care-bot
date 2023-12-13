import {
  audio,
  loadingIndicator,
  programContainer,
} from "../selectors/program-page";

export function setLoadingProgramResponse(loading: boolean) {
  if (loading) {
    audio.style.display = "none";
    programContainer.style.display = "none";

    document.body.setAttribute("loading", "true");
    loadingIndicator.style.display = "block";
  } else {
    document.body.removeAttribute("loading");
    loadingIndicator.style.display = "none";

    audio.style.display = "block";
    programContainer.style.display = "block";
  }
}
