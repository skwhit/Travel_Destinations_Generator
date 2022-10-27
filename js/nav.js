export const hamburger = document.querySelector(".hamburger");
export const navMenu = document.querySelector(".nav-list");
let counter = 0;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

export function hideTextHome() {
  document.querySelector(".generateDestination").classList.toggle("hidden");
  document.querySelector(".location").classList.toggle("hidden");
  document.querySelector(".travelLink").classList.toggle("hidden");
}

export function hideText() {
  document.querySelector(".generateDestination").classList.toggle("hidden");
  document.querySelector(".location").classList.toggle("hidden");
  document.querySelector(".travelText").classList.toggle("hidden");
  document.querySelector(".travelLink").classList.toggle("hidden");
}

