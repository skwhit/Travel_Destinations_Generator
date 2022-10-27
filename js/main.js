import { hamburger, navMenu, hideText, hideTextHome } from "./nav.js";
import { destinationsArr } from "./destinations.js";

const locationsArr = destinationsArr;
const location = document.querySelector(".location");
const travelText = document.querySelector(".travelText");
const travelLink = document.querySelector(".travelLink");
const hide = document.querySelector(".hideText");
const destinationContainer = document.querySelector(".destinationContainer");
const map = document.querySelector(".map");
const flight = document.querySelector(".getFlight");
const hotel = document.querySelector(".getHotel");

let randomNum;
let item;
let index = localStorage.getItem("index");
let counter = 0; //used to keep track of times the "New Destination" button is clicked
let n = 0; // used to keep track of number of times "Hide/Unhide elements" is clicked

//button used to randomly generate a destination
const generateDestination = document.querySelector(".generateDestination");
generateDestination.addEventListener("click", getLocation);

//function hides elements on main page when "Hide/Unhide elements" is clicked so image can be viewed by itself
hide.addEventListener("click", () => {
  counter === 0 ? hideTextHome() : hideText();
  n % 2 === 0
    ? (hide.innerHTML = "Unhide Elements")
    : (hide.innerHTML = "Hide Elements");
  n++;
});

// Hides initial page when location is selected from about page; then executes the getLocation function
if (index != undefined) {
  document.body.style.visibility = "hidden";
  item = locationsArr[index];
  getLocation();
}

//Function that changes the page whenever a new destination is called
function getLocation() {
  console.clear();
  counter++; //keeps track of number of button clicks
  index = localStorage.getItem("index");
  if (index != undefined) {
    localStorage.removeItem("index"); //removes index from local storage
    console.log(`Index: ${index}`);
  } else {
    randomNum = Math.floor(Math.random() * locationsArr.length); //randomly generates an array index number
    item = locationsArr[randomNum]; //assigns random number as the index for the array item
    console.log(`Index: ${randomNum}`);
  }

  console.log(item);

  if (counter > 1) {
    generateDestination.classList.toggle("rotate"); //After initial page, button will spin when clicked
  }
  //fade  effect initialized imediately
  document.body.classList.toggle("fade");

  //map will change after .5 seconds
  setTimeout(() => {
    map.src = item.map;
  }, 500);

  //image, text, and booking links will be updated after 1 second
  setTimeout(() => {
    if (counter === 1) {
      document.querySelector(".marker").remove();
      generateDestination.innerHTML = "New Destination?";
      generateDestination.classList.add("generateNoMarker");
      generateDestination.classList.remove("wiggle");
      travelText.classList.remove("hidden");
      travelLink.innerHTML = "Click here to plan a trip";
    }
    document.body.style.visibility = "visible";
    destinationContainer.style.backgroundImage = `url(${item.image})`;
    location.innerHTML = `${item.location}, ${item.state}`;

    flight.href = `https://www.united.com/en-us/flights-to-${item.flight}`;
    hotel.href = `https://www.booking.com/${item.type}/us/${item.hotel}.html`;
  }, 1000);

  //fade and rotate classes removed after 2 seconds so animations can be initialized again
  setTimeout(() => {
    document.body.classList.toggle("fade");
    if (counter > 1) {
      generateDestination.classList.toggle("rotate");
    }
  }, 2000);
}
