// Select elements
const playground = document.querySelector(".playground");
const sizeButton = document.querySelector("#size");
const clearButton = document.querySelector("#clear");
const rainbowButton = document.querySelector("#rainbow");
const blackButton = document.querySelector("#black");

// Generate random colors
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

// Function to generate a random color from the rainbow array
function generateRandomColor() {
  return rainbow[Math.floor(Math.random() * rainbow.length)];
}

// Function to create grid divs
function createDivs(size) {
  playground.innerHTML = "";
  for (let i = 1; i <= size ** 2; i++) {
    const innerdiv = document.createElement("div");
    innerdiv.classList.add("innerdiv");
    playground.appendChild(innerdiv);
  }
  playground.style.display = "grid";
  playground.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  playground.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

// Event listener for the "size" button
sizeButton.addEventListener("click", () => {
  const size = prompt("Enter size: ");
  if (size) {
    createDivs(Number(size));
    addEventListenersToInnerDivs();
  }
});

// Function to add event listeners to inner divs
function addEventListenersToInnerDivs() {
  const innerdivs = document.querySelectorAll(".innerdiv");

  innerdivs.forEach((div) => {
    div.addEventListener("dblclick", (e) => {
      e.target.style.backgroundColor = generateRandomColor();
    });
  });

  rainbowButton.addEventListener("click", () => {
    innerdivs.forEach((div) => {
      div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = generateRandomColor();
      });
    });
  });

  blackButton.addEventListener("click", () => {
    innerdivs.forEach((div) => {
      div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
    });
  });

  clearButton.addEventListener("click", () => {
    innerdivs.forEach((div) => {
      div.style.backgroundColor = "white";
    });
  });
}

// Initial setup with a default grid size
const initialSize = 16;
createDivs(initialSize);
addEventListenersToInnerDivs();
