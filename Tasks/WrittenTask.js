// // 1 what is the DoM in the context of a web browser?
// DOM stands for Document Object Model. we use it for HTMl manipulation. it is used to get the html Object and we can set it.

// // 2 how do you select an elecmet by the id attribute using javascript
// Document.getElementById("idName")

// // 3 how would you select all element with a specific class name?
// // we can use querySelectorAll('.className')

// 4. we should first select the Element then set the property using .innerHtml or textcontent etc

// 5. the innerText manipulate the only text that is inside the Element but textcontent can set the Element too

// 6. can use document.setAttribute()

// 7. element.classList.remove()

// 8. element.style.color = 'red'

// 9. querySelector just select one item and querySelectorAll selects all.DOM

// 10. it give us the access of Html objects

// 11. alert is uesd to show the message . prompt is used to get value from User . conform is used to conform sth form User

// 12. it can set the html property

// 13. we can use it like element.removeProperty('color')

// 14. == see the value and === beside the value it checks the datatype.DOM

// 15. sometime we use it to check the output that we can't see in the' page

// 16. we can do element.classList.add("className")

// for (const li of document.querySelectorAll("li")) {
//   li.style.backgroundColor = "red";
// }
// for (const li of document.querySelectorAll("li")) {
//   li.style.backgroundColor = "orange";
// }

let funCard = () => {
  let wrapper = document.createElement("div");
  let card = document.createElement("div");

  wrapper.style.cssText = `display: flex; width: 100%`;
  card.style.cssText = `width: 300px; margin: auto; backgroundColor: gray; border: 2px solid black; border-radius: 20px; padding: 30px; `;
  card.innerHTML = `<h1>This is the heading of the code</h1>`;
  card.innerHTML += `<img src='about.png' width='150' height='200'/>`;
  card.innerHTML += `<p>This isragharph of tan give it hereThis is hereThis is the paragharph of the div and we can give it hereThis is the paragharph of the div and we can give it here</p>
  `;
  wrapper.append(card);
  return document.body.append(wrapper);
};
funCard();
funCard();
funCard();
