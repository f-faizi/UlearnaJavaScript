// function Myfun(a, b, c) {
//   let res = a + b + c;
//   return res;
// }
// console.log(Myfun(23, 34, 23, 34, 231, 2));

// function Myfun(...items) {
//   let sum = 0;
//   for (let item of items) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(Myfun(23, 34, 23, 34, 231, 2));

// function Myfun() {
//   console.log(arguments.length);
//   console.log(arguments[2]);
// }
// console.log(Myfun(23, 34, 23, 34, 231, 2));

// let arr = [34, 56, 23];
// console.log(Math.max(arr));
// console.log(Math.max(...arr));

let arr1 = [34, 34, 56, 34];
let arr2 = [98, 89, 98];
let marrged = [...arr1, ...arr2];
console.log(marrged);
let concat = arr1.concat(arr2);
console.log(concat);
