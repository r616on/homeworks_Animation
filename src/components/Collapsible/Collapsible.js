export default class Collapsible {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.counter = false;
    this.onClick.bind(this);
  }

  static get markup() {
    return `<dir class="Collapsible">
        <div class="Collapsible-row">
          <button class="btn">Collapsible</button>
        </div>
      </dir>`;
  }

  static get widgetSelector() {
    return ".Collapsible";
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    this.widget = this.parentEl.querySelector(this.constructor.widgetSelector);

    this.widget.addEventListener("click", (evt) => this.onClick(evt));
  }

  onClick(e) {
    if (e.target.closest(".btn")) {
      e.target.closest(".btn").classList.toggle("action");
      if (
        e.target.closest(".btn").classList.contains("action") &&
        !this.parentEl.querySelector(".promt")
      ) {
        const prompt = document.createElement("div");
        prompt.className = "promt";
        prompt.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            voluptatibus debitis porro odio iure in aspernatur consequuntur,
            enim ducimus suscipit provident architecto molestiae quaerat.
            Obcaecati assumenda hic fuga porro pariatur.`;

        this.widget.querySelector(".Collapsible-row").append(prompt);
      } else if (
        !e.target.closest(".btn").classList.contains("action") &&
        this.parentEl.querySelector(".promt")
      ) {
        e.target.closest(".btn").classList.remove("action");
        this.parentEl
          .querySelector(".promt")
          .addEventListener("animationend", () => {
            this.parentEl.querySelector(".promt").remove();
          });
        this.parentEl.querySelector(".promt").classList.add("hiden");
      }
    }
    if (
      !e.target.closest(".btn") &&
      this.parentEl.querySelector(".btn").classList.contains("action")
    ) {
      this.parentEl.querySelector(".btn").classList.remove("action");
      this.parentEl
        .querySelector(".promt")
        .addEventListener("animationend", () => {
          this.parentEl.querySelector(".promt").remove();
        });
      this.parentEl.querySelector(".promt").classList.add("hiden");
    }
  }
}
