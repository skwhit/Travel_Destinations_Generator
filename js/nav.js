export const hamburger = document.querySelector(".hamburger");
export const navMenu = document.querySelector(".nav-list");

//hamburger menu toggled between visible and hidden. Used to navigate around the website
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//When a nav item is clicked, hamburger menu will automatically return to being hidden
document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//hides text and other elements for home page
export function hideTextHome() {
  document.querySelector(".generateDestination").classList.toggle("hidden");
  document.querySelector(".location").classList.toggle("hidden");
  document.querySelector(".travelLink").classList.toggle("hidden");
}

//hides text and other elements for each destination page
export function hideText() {
  document.querySelector(".generateDestination").classList.toggle("hidden");
  document.querySelector(".location").classList.toggle("hidden");
  document.querySelector(".travelText").classList.toggle("hidden");
  document.querySelector(".travelLink").classList.toggle("hidden");
}
