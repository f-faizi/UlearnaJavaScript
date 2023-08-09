let i = 1;
for (let main of carousel.querySelectorAll(".cardMain")) {
  main.style.position = "relative";
  main.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute; left:20; top:0;>${i}</span>`
  );
  i++;
}

let width = 300;
let count = 2;
let list = carousel.querySelector(".main");
let listitems = carousel.querySelectorAll(".cardMain");
let position = 0;

carousel.querySelector(".prev").onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (listitems.length - count));
  list.style.marginLeft = position + "px";
};
