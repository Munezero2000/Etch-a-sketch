let value = prompt("Enter size: ");
document.querySelector("#slider").value


let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
function generateRandomColor() {
  let color = Math.floor(Math.random() * rainbow.length);
  return color;
}

//
let playground = document.querySelector(".playground");
playground.style.display = "grid";
playground.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
playground.style.gridTemplateRows = `repeat(${value}, 1fr)`;

//
function createDivs(size) {
  for (i = 1; i <= size ** 2; i++) {
    let innerdiv = document.createElement("div");
    innerdiv.classList.add("innerdiv");
    playground.appendChild(innerdiv);
  }
}
createDivs(value);

//
document.querySelectorAll(".innerdiv").forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = `${rainbow[generateRandomColor()]}`;
  });
});
