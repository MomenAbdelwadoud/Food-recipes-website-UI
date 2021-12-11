const BTN = document.querySelector("#menu-button");
const MENU = document.querySelector("#menu");

BTN.addEventListener("click", () => {
  if (MENU.classList.contains("hidden")) {
    MENU.classList.remove("hidden");
  } else {
    MENU.classList.add("hidden");
  }
});
