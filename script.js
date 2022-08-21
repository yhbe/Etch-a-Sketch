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
button.addEventListener("click", resizeGrid);

//creating clearGrid button
let clearButton = document.createElement("button");
body.appendChild(clearButton);
clearButton.setAttribute("id", "clear-button");
clearButton.innerHTML = "clear";
clearButton.addEventListener("click", resetGridColor);

//button container
let buttoncontainer = document.createElement("div");
buttoncontainer.appendChild(button);
buttoncontainer.appendChild(clearButton);
body.appendChild(buttoncontainer);
buttoncontainer.setAttribute("id", "button-container");

//creating container for grid & appending
let container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

//creating grid of divs
function makeGrid(size) {
  let dimensions = size;
  let cubeSize = 900 / size - 2;
  for (let i = 0; i < dimensions * dimensions; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "gridDiv");
    container.appendChild(div);
    div.addEventListener("pointerover", colorOver);
    //resizes boxes
    div.setAttribute("style", `height: ${cubeSize}px; width: ${cubeSize}px`);
  }
}

//starting grid on load
makeGrid(16);

// colors div when hovored over
function colorOver() {
  this.style.backgroundColor = "black";
}

function resetGridColor() {
  let resetColor = document.querySelectorAll(".gridDiv");
  resetColor.forEach((grid) => {
    grid.style.backgroundColor = "red";
  });
}

// removes old grid and replaces it with prompt size
function resizeGrid() {
  let size = parseInt(
    prompt(
      "What dimensions would you like your grid to be? (100x100 is the maximum size allowed)",
      ""
    )
  );
  if (size < 0 || size > 100 || !parseInt(size)) {
    alert("try a different number");
  } else deleteGrid();
  makeGrid(size);
}

function deleteGrid() {
  let gridDivs = document.querySelectorAll(".gridDiv");
  gridDivs.forEach((divs) => {
    divs.remove();
  });
}
