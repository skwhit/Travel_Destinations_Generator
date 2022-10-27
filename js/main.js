import { hamburger, navMenu, hideText, hideTextHome } from "./nav.js";
import { destinationsArr } from "./destinations.js";

const locationsArr = destinationsArr;
const location = document.querySelector(".location");
const travelText = document.querySelector(".travelText")
const travelLink = document.querySelector(".travelLink");
const hide = document.querySelector(".hideText");
const destinationContainer = document.querySelector(".destinationContainer");
const map = document.querySelector(".map");
const flight = document.querySelector(".getFlight");
const hotel = document.querySelector(".getHotel");

let randomNum;
let item;
let index = localStorage.getItem("index");
let counter = 0;
let n = 0;

const generateDestination = document.querySelector(".generateDestination");
generateDestination.addEventListener("click", getLocation);

hide.addEventListener("click", ()=>{
  counter===0 ? hideTextHome() : hideText();
  n % 2===0 ? hide.innerHTML = "Unhide Elements": hide.innerHTML = "Hide Elements";
  n++;
});

if (index != undefined) {
  document.body.style.visibility = "hidden";
  item = locationsArr[index];
  getLocation();
}

function getLocation() {
  console.clear();
  counter++;
  index = localStorage.getItem("index");
  if (index != undefined) {
    localStorage.removeItem("index");
    console.log(`Index: ${index}`);
  } else {
    randomNum = Math.floor(Math.random() * locationsArr.length);
    item = locationsArr[randomNum];
    console.log(`Index: ${randomNum}`);
  }

  console.log(item);

  if (counter > 1) {
    generateDestination.classList.toggle("rotate");
  }
  //fade  effect initialized imediately
  document.body.classList.toggle("fade");

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
      generateDestination.classList.remove("wiggle");
      travelText.classList.remove("hidden");
      travelLink.innerHTML = 'Click here to plan a trip';
    }
    document.body.style.visibility = "visible";
    destinationContainer.style.backgroundImage = `url(${item.image})`;
    location.innerHTML = `${item.location}, ${item.state}`;
    
     
    flight.href = `https://www.united.com/en-us/flights-to-${item.flight}`;
    hotel.href = `https://www.booking.com/${item.type}/us/${item.hotel}.html`;
  }, 1000);

  //fade class removed after 2 seconds when fade animation is complete
  setTimeout(() => {
    document.body.classList.toggle("fade");
    if (counter > 1) {
      generateDestination.classList.toggle("rotate");
    }
  }, 2000);
}