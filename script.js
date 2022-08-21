//selecting body element
let body = document.querySelector("body");

//h1 title creation
let title = document.createElement("h1");
title.innerHTML = "Etch-A-Sketch";
title.setAttribute("id", "title");

//appending h1 title to body
body.appendChild(title);

//creating container , appending , setting styles
let container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

//creating divs
for (let i = 0; i < 257; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "gridDiv");
  container.appendChild(div);
  div.innerHTML = "helo";
}
