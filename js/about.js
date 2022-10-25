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
  overlayText.classList.add("overlayText");
  overlayText.innerHTML = `${item.location}, ${item.state}`;
}

document.body.querySelectorAll(".imgContainer").forEach((n, index) =>
  n.addEventListener("dblclick", () => {
    location.href = "./index.html";
    localStorage.setItem("index", index);
  })
);

// alert("Double click on any of the images to be taken back to the main page.")

console.log(document.body.querySelectorAll(".imgContainer"));
