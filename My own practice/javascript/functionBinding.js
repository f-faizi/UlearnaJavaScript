// let user = {
//   name: "faizi",
//   sayHi() {
//     console.log(`Hello ${this.name}`);
//   },
// };
// setTimeout(user.sayHi, 1000);
// let timer = setInterval(user.sayHi, 3000);
// setTimeout(() => {
//   clearInterval(timer);
// }, 7000);

// let user = {
//   name: "faizi",
//   sayHi() {
//     console.log(`Hello ${this.name}`);
//   },
// };
// let method1 = user.sayHi;
// setTimeout(method1, 1000);

// setTimeout(() => user.sayHi());

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// setTimeout(() => user.sayHi(), 1000);

// // ...the value of user changes within 1 second
// user = {
//   sayHi() {
//     console.log("Another user in setTimeout!");
//   },
// };

// let user = {
//   name: "faizullah",
// };

// function sayHi(sentence) {
//   console.log(`${this.name} wellcome ${sentence}`);
// }

// let fun = sayHi.bind(user);
// fun("to Kabul");

let user = {
  name: "faizullah",
  sayhi() {
    console.log(`Hello ${this.name}`);
  },
};

let sayHi = user.sayhi.bind(user);
sayHi();

setTimeout(sayHi, 1000);

user = {
  sayHi() {
    console.log("good bye");
  },
};
