//selecting body element
let body = document.querySelector("body");

//h1 title creation
let title = document.createElement("h1");
title.innerHTML = "Etch-A-Sketch";
title.setAttribute("id", "title");

//appending h1 title to body
body.appendChild(title);

//creating container for grid & appending
let container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

//creating grid of divs
function makeGrid() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "gridDiv");
    container.appendChild(div);
    div.addEventListener("pointerover", colorOver);
  }
}

makeGrid();

// colors div when hovored over
function colorOver() {
  this.style.backgroundColor = "black";
}
