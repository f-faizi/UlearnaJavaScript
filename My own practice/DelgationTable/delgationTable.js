let selectedTd = document.querySelector("td");
let table = document.querySelector("table");

// table.onclick = function (event) {
//   let target = event.target;
//   if (target.tagName != "TD") return;

//   highlight(target);
// };

table.onclick = function (event) {
  // This is the best way
  let td = event.target.closest("td"); // (1)

  if (!td) return; // (2)

  if (!table.contains(td)) return; // (3)

  highlight(td); // (4)
};

function highlight(td) {
  if (selectedTd) {
    selectedTd.classList.remove("highlight");
  }
  selectedTd = td;
  selectedTd.classList.add("highlight");
}

class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  save() {
    alert("saving");
  }

  load() {
    alert("loading");
  }

  search() {
    alert("searching");
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}

new Menu(menu);

document.addEventListener("click", function (event) {
  if (event.target.dataset.counter != undefined) {
    // if the attribute exists...
    event.target.value++;
  }
});

document.addEventListener("click", function (event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;

  let elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
});

container.onclick = function (event) {
  if (event.target.className != "remove-button") return;

  let pane = event.target.closest(".pane");
  pane.remove();
};

// move all text into <span>
// they occupy exactly the place necessary for the text,
for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling); // move the text node into span
}

// catch clicks on whole tree
tree.onclick = function (event) {
  if (event.target.tagName != "SPAN") {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector("ul");
  if (!childrenContainer) return; // no children

  childrenContainer.hidden = !childrenContainer.hidden;
};
