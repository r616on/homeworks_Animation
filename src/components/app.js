import Collapsible from "./Collapsible/Collapsible";

document.addEventListener("DOMContentLoaded", () => {
  const perent = document.querySelector(".conteiner");
  const widget = new Collapsible(perent);
  widget.bindToDOM();
});
