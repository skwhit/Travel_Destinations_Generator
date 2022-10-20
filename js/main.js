import { destinationsArr } from "./destinations.js";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

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

const locationsArr = destinationsArr;
const location = document.querySelector(".location");
let randomNum;
let item;
// let opacity;
// let inervalID;

const generateDestination = document.querySelector(".generateDestination");
generateDestination.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * locationsArr.length);
  item = locationsArr[randomNum];

  console.log(item);
  document.querySelector(
    "style"
  ).innerHTML = `.destinationContainer::before {background-image: url(${item.image});}`;
  location.innerHTML = `${item.location}, ${item.state} <br><br>
    Scroll down to book a flight and hotel for this destination`;

  document.querySelector(".map").src = item.map;
});

// api key for google maps AIzaSyA8KtrifgseiVbD7VJ39xQ3LMezaJJ9sBs
