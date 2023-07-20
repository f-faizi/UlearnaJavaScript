// // Here is the practice of object
// let obj = {
//   name: "faizullah",
//   lastName: "faizi",
//   province: "kabul",
//   phoneNumber: 773402090,
// };
// console.log(obj.province);
// console.log([obj.name, obj.lastName, obj.province, obj.phoneNumber]);
// console.log(obj.name, obj.lastName, obj.province, obj.phoneNumber);
// // how to delete any value
// delete obj.lastName;
// console.log(obj.lastName);
// // ->
// let obj2 = {
//   name: "Ali",
//   "Last Name": "Ahmadi",
// };
// console.log(obj2["Last Name"]);
// // how to access an object value dynamically
// let dynamicObject = {
//   userId: 144,
//   name: "faizullah",
// };
// let key = "name";
// console.log(dynamicObject[key]);
// // here is one function that retruns the object
// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }
// let user = makeUser("Faizullah from function", 24);
// console.log(user.name);
// console.log("name" in dynamicObject);
// console.log("age" in dynamicObject);

// // It's the example of for in loop
// let forinObject = {
//   id: 1,
//   name: "faizullah",
//   lastName: "faizi",
//   province: "Laghman",
// };
// for (let key in forinObject) {
//   console.log(key);
//   console.log(forinObject[key]);
// }

// // some the object property
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// console.log(salaries.John + salaries.Ann + salaries.Pete);
// let sum;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// // Multiply numeric property values by 2
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// function multiplyNumeric(objt) {
//   for (let key in objt) {
//     if (typeof objt == "number") {
//       objt[key] *= 2;
//       console.log(objt[key]);
//     }
//     console.log(objt[key]);
//   }
// }
// multiplyNumeric(menu);

// constructor new and their
// let obj = {
//   name: "faizi",
//   province: "Kabul",
// };
// function A() {
//   return obj.name;
// }
// function B() {
//   return obj.province;
// }
// console.log(new A() == new B());
// console.log(new A());
// let use = new A();
// console.log(use);

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// let cal = new Calculator();
// cal.read();
// alert(cal.sum().mul());
// alert(cal.mul());

console.log("Hello");