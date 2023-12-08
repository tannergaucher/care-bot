import {
  audio,
  fieldset,
  form,
  loadingIndicator,
  programContainer,
} from "../selectors";

export function setLoadingProgramResponse(loading: boolean) {
  if (loading) {
    fieldset.disabled = true;
    document.body.setAttribute("loading", "true");
    form.style.display = "none";
    loadingIndicator.style.display = "block";
  } else {
    fieldset.disabled = false;
    document.body.removeAttribute("loading");
    loadingIndicator.style.display = "none";

    audio.style.display = "block";
    programContainer.style.display = "block";
  }
}
