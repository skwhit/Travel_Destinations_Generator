import { destinationsArr } from "./destinations.js";

const container = document.querySelector(".container");

//loops through each location from destinationsArr and displays them side by side on the page
for (let item of destinationsArr) {
  //creates container for each image
  const imgContainer = document.createElement("div");
  container.append(imgContainer);
  imgContainer.classList.add("imgContainer");

  //appends each image to it's container
  const img = document.createElement("img");
  imgContainer.append(img);
  img.classList.add("locationImg");
  img.src = item.image;

  //appends an overlay element in each container where text will be displayed
  const overlay = document.createElement("div");
  imgContainer.append(overlay);
  overlay.classList.add("overlay");

  //appends text into overlay div corresponding to the location and state of each destination
  const overlayText = document.createElement("h3");
  overlay.append(overlayText);
  overlayText.classList.add("overlayText");
  overlayText.innerHTML = `${item.location}, ${item.state}`;
}

//A double click on any image will redirect to the home page and store the index of the item in local storage
document.body.querySelectorAll(".imgContainer").forEach((n, index) =>
  n.addEventListener("dblclick", () => {
    location.href = "./index.html";
    localStorage.setItem("index", index);
  })
);
