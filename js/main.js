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
const destinationContainer = document.querySelector(".destinationContainer");
const map = document.querySelector(".map");
let randomNum;
let item;

const generateDestination = document.querySelector(".generateDestination");
generateDestination.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * locationsArr.length);
  item = locationsArr[randomNum];
  console.log(item);

  //fade  effect initialized imediately
  document.body.classList.toggle("fade");

  //map will change after .5 seconds
  setTimeout(() => {
    map.src = item.map;
  }, 500);

  //image will be updated after 1 second
  setTimeout(() => {
    destinationContainer.style.backgroundImage = `url(${item.image})`;
    location.innerHTML = `${item.location}, ${item.state} <br><br>
    Scroll down to book a flight and hotel for this destination`;
  }, 1000);

  //fade class removed after 2 seconds when fade animation is complete
  setTimeout(() => {
    document.body.classList.toggle("fade");
  }, 2000);
});

// api key for google maps AIzaSyA8KtrifgseiVbD7VJ39xQ3LMezaJJ9sBs
