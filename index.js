let playground = document.querySelector(".playground");

function createDivs(size) {
  for (i = 1; i <= size; i++) {
    let innerdiv = document.createElement("div");
    innerdiv.classList.add("innerdiv");
    playground.appendChild(innerdiv);
  }
}
createDivs(256);

document.querySelectorAll(".innerdiv").forEach((div) => {
  div.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "black";
  });
});
