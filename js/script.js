// You could easily add more colors to this array.
const colors = [
  "red",
  "blue",
  "green",
  "teal",
  "pink",
  "tan",
  "plum",
  "saddlebrown",
];
const boxes = document.querySelectorAll(".project.container");

for (i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = colors[i];
}
