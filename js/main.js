import { hamburger, navMenu } from "./nav.js";
import { destinationsArr } from "./destinations.js";

const locationsArr = destinationsArr;
const location = document.querySelector(".location");
const destinationContainer = document.querySelector(".destinationContainer");
const map = document.querySelector(".map");
let randomNum;
let item;
let index = localStorage.getItem("index");
let counter = 0;

const generateDestination = document.querySelector(".generateDestination");
generateDestination.addEventListener("dblclick", getLocation);

if (index != undefined) {
  document.body.style.visibility = "hidden";
  item = locationsArr[index];
  getLocation();
}

function getLocation() {
  counter++;
  index = localStorage.getItem("index");
  if (index != undefined) {
    localStorage.removeItem("index");
    console.log(index);
  } else {
    randomNum = Math.floor(Math.random() * locationsArr.length);
    item = locationsArr[randomNum];
  }

  console.log(item);
  if (counter >= 1) {
    generateDestination.classList.toggle("rotate");
  }
  //fade  effect initialized imediately
  document.body.classList.toggle("fade");
  console.lo;

  //map will change after .5 seconds
  setTimeout(() => {
    map.src = item.map;
  }, 500);

  //image will be updated after 1 second
  setTimeout(() => {
    if (counter === 1) {
      document.querySelector(".marker").remove();
      generateDestination.innerHTML = "New Destination?";
      generateDestination.classList.add("generateNoMarker");
      generateDestination.classList.remove('wiggle')
    }
    document.body.style.visibility = "visible";
    destinationContainer.style.backgroundImage = `url(${item.image})`;
    location.innerHTML = `${item.location}, ${item.state}`;
  }, 1000);

  //fade class removed after 2 seconds when fade animation is complete
  setTimeout(() => {
    document.body.classList.toggle("fade");
    generateDestination.classList.toggle("rotate");
  }, 2000);
}

// api key for google maps AIzaSyA8KtrifgseiVbD7VJ39xQ3LMezaJJ9sBs
