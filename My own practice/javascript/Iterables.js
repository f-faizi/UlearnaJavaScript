// let range = {
//   from: 1,
//   to: 5,
// };

// // 1. call to for..of initially calls this
// range[Symbol.iterator] = function () {
//   // ...it returns the iterator object:
//   // 2. Onward, for..of works only with the iterator object below, asking it for next values
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() is called on each iteration by the for..of loop
//     next() {
//       // 4. it should return the value as an object {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// // now it works!
// for (let num of range) {
//   console.log(num); // 1, then 2, 3, 4, 5
// }

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 2, "Faizullah", "faizi"); // from index 1 remove 1 element
// delete arr[1];
arr.splice(3, 0, "My", "Father", "Name", "is", "Nazifullah");
console.log(arr); // ["I", "JavaScript"]
console.log(arr.length);

let arr2 = [1, 2, 5];
arr2.splice(-1, 0, 3, 4);
console.log(arr2);
