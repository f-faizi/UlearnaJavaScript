// let elem = document.getElementById("content");
// elem.style.background = "red";
// elem.style.border = "2px solid black";
// elem.style.width = "50%";
// elem.style.height = "400px";
// elem.style.textAlign = "center";

// let elem1 = document.body;

// // let's examine: what type of node is in elem?
// alert(elem1.nodeType); // 1 => element

// // and its first child is...
// alert(elem1.firstChild.nodeType); // 3 => text

// // for the document object, the type is 9
// alert(document.nodeType);

// alert(document.body.nodeName);
// alert(document.body.tagName);

// alert(document.body.firstChild.nodeName);
// alert(document.body.firstChild.tagName);

// document.body.innerHTML = "How is from js";

// let text = (document.getElementById("content").innerHTML +=
//   " / This is the inner Html of js");

// let item = document.getElementById("content");
// let p2 = document.getElementById("p2");
// alert(item.outerHTML);
// alert(item.textContent);
// p2.hidden = true;

// setInterval(() => (p2.hidden = !p2.hidden), 1000);
// alert(item.nodeValue);

// Element.prototype.sayHi = function () {
//   alert(`Hello this is ${this.tagName}`);
// };
// document.documentElement.sayHi();
// document.body.sayHi();

// let elem = document.getElementById("content");
// alert(elem.hasAttribute("class"));
// alert(elem.getAttribute("class"));
// alert(elem.setAttribute("class", 123));
// alert(elem.removeAttribute("class"));
// alert(elem.hasAttribute("class"));

// let div = document.createElement("div");
// let text = document.createTextNode("I come from the js");
// div.className = "content";
// div.innerHTML = "<b>I am the man of innerHTML</b>";
// document.body.append(div);
// elem.append(div);
// elem.prepend(div);
// elem.before(div);
// elem.after(div);
// elem.replaceWith(div);
// elem.insertAdjacentHTML("beforebegin", "Hello");
// elem.insertAdjacentHTML("afterbegin", "Hello");
// elem.insertAdjacentHTML("beforeend", "Hello");
// elem.insertAdjacentHTML("afterend", "Hello");
// elem.insertAdjacentElement("afterbegin", <p></p>);
// setTimeout(() => div.remove(), 1000);

// let div2 = elem.cloneNode(true);
// let div2 = elem.cloneNode(false);
// document.body.append(div2);

// let ul = document.getElementById("ul");
// function list() {
//   let fragment = new DocumentFragment();
//   for (let i = 0; i <= 10; i++) {
//     let li = document.createElement("li");
//     li.append(`Num:-> ${i}`);
//     fragment.append(li);
//   }
//   return fragment;
// }
// ul.append(list());

// let elem = document.getElementById("content");
// // elem.style.cssText = `color: red; border-radius: 20px; border: 5px solid white; padding: 20px; text-align: center;`;
// elem.setAttribute("style", "border: 10px solid blue; color: orange;");
// let computed = getComputedStyle(elem);
// alert(computed.backgroundColor);
