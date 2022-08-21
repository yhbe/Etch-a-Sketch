//selecting body element & creating div element
let body = document.querySelector("body");

//h1 title creation
let title = document.createElement("h1");
title.innerHTML = "Etch-A-Sketch";
title.setAttribute("id", "title");

//appending h1 title to body
body.appendChild(title);

//creating resize button
let button = document.createElement("button");
body.appendChild(button);
button.setAttribute("id", "resize-button");
button.innerHTML = "click here to resize the grid";
button.addEventListener("click", makeGrid);

//creating container for grid & appending
let container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

//creating grid of divs
function makeGrid() {
  let size = prompt(
    "What dimensions would you like your grid to be? (100x100 is the maximum size allowed)",
    ""
  );
  console.log(size);
  for (let i = 0; i < size; i++) {
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
