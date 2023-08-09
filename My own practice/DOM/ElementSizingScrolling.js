// elem.onclick = function (event) {
//   // show event type, element and coordinates of the click
//   alert(event.type + " at " + event.currentTarget);
//   alert("Coordinates: " + event.clientX + ":" + event.clientY);
// };
// elem.onclick = function (event) {
//   alert(event.type);
//   alert(event.currentTarget);
//   alert(event.clientX);
//   alert(event.clientY);
// };
// let obj = {
//   handleEvent(event) {
//     alert(event.type);
//   },
// };
// btn.addEventListener("click", obj);

// btn.onclick = () => {
//   p.hidden = true;
//   btn.hidden = true;
// };
// elem.onclick = () => {
//   p.hidden = false;
//   btn.hidden = false;
// };
form.onclick = function (event) {
  event.target.style.backgroundColor = "yellow";

  // chrome needs some time to paint yellow
  setTimeout(() => {
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
    event.target.style.backgroundColor = "";
  }, 0);
};
