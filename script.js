var elemDiv = document.createElement("div");
let container = document.querySelector("#container");
container.style.display = "grid";

for (let i = 0; i < 256; i++) {
  var elemDiv = document.createElement("div");
  elemDiv.id = "singleDiv";
  container.appendChild(elemDiv);
  elemDiv.innerHTML = "hi";
}

let singleDiv = document.querySelectorAll("#singleDiv");

container.style.gridTemplateRows = "repeat(16, 1fr)";
container.style.gridTemplateColumns = "repeat(16, 1fr)";
