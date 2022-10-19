import { destinationsArr } from "./destinations.js";

const container = document.querySelector(".container");

for (let item of destinationsArr) {
  const imgContainer = document.createElement("div");
  container.append(imgContainer);
  imgContainer.classList.add("imgContainer");

  const img = document.createElement("img");
  imgContainer.append(img);
  img.classList.add("locationImg");
  img.src = item.image;

  const overlay = document.createElement("div");
  imgContainer.append(overlay);
  overlay.classList.add("overlay");

  const overlayText = document.createElement("h3");
  overlay.append(overlayText);
  overlayText.innerHTML = `${item.location}, ${item.state}`;
}
