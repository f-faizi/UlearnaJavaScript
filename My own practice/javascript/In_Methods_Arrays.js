// let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Orange
// console.log(fruits[2]); // P
// console.log(fruits[fruits.length - 1])
// console.log(fruits.at(-1))
// console.log(fruits.pop())
// fruits.push('Kiwi')
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits.unshift('Manaa'))
// console.log(fruits)

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix[0][0], matrix[0][1], matrix[0][2]);
// console.log(matrix[1][0], matrix[1][1], matrix[1][2]);
// console.log(matrix[2][0], matrix[2][1], matrix[2][2]);

// function sumInput() {

//     let numbers = [];

//     while (true) {

//         let value = prompt("A number please?", 0);

//         // should we cancel?
//         if (value === "" || value === null || !isFinite(value)) break;

//         numbers.push(+value);
//     }

//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }

// alert(sumInput());

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) { // for each item of arr
//         partialSum += item; // add it to partialSum
//         maxSum = Math.max(maxSum, partialSum); // remember the maximum
//         if (partialSum < 0) partialSum = 0; // zero if negative
//     }

//     return maxSum;
// }

// console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
// console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
// console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// console.log(getMaxSubSum([1, 2, 3])); // 6
// console.log(getMaxSubSum([-1, -2, -3]));

// +++++++++==================>>>>>>>>>>>>>>>>>
// let arr = ["Let's", "Study", "JavaScript", "right", "now"];
// arr.splice(0, 3, "Let's", "Study", "Holy Quran");
// console.log(arr);

// let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// console.log(arr);

// let arr1 = ["I", "Study", "Holy", "Quran"];
// arr1.splice(1, 0, "All", "Night")
// console.log(arr1)
// console.log(arr1.slice(3, 6))

// let arr1 = ["I", "am"];
// let arr2 = ["coding", "now"];
// let arr3 = arr1.concat(arr2)
// console.log(arr3)

// ["Faizullah", "Wali", "Ahmad"].forEach((item, index, arry) => {
//     console.log(item, index, arry)
// })

// let arr = ["Faizullah", "Wali", 0, "Ahmad", "Faizullah", false];
// console.log(arr.indexOf('Faizullah', 1))
// console.log(arr.includes('Faizullah'))
// console.log(arr.includes(false))
// console.log(arr.indexOf(false))
// console.log(arr.lastIndexOf('Faizullah'))

// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Pete" },
//     { id: 3, name: "Mary" }
// ];

// let user = users.find(item => item.id == 1);
// console.log(user.name);

// let users = [
//     { id: 1, name: "faiz" },
//     { id: 2, name: "wali" },
// ]
// let user = users.find(item => item.id == 1);
// console.log(user.name, user.id)
// console.log(user)
// console.log(users.filter(item => item))

// let name = "Faizullah, Ali, Ahmad";
// let arr = name.split(', ', 2);
// console.log(arr)
// for (let user of arr) {
//     console.log(user)
// }

// let names = ["Faizullah", "Ali", "Ahmad"];
// let arr = names.join("-");
// console.log(arr)

// let arr = [12, 34, 45, 56, 34];
// arr.forEach((item, index) => {
//   console.log(`The item ${item} is in index ${index}`);
// });
// let search = arr.indexOf(45, 1);
// let search = arr.includes(45, 1);
// console.log(search);

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// let someUsers = users.filter((item) => item.id);
// console.log(someUsers);

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => {
//   if (item === "Bilbo") {
//     console.log("The name is found");
//   } else {
//     console.log("The name is not found");
//   }
// });
// console.log(lengths);

let arr = [1, 2, 3];
let res = arr.reduce((add, item) => add + item);
console.log(res);
