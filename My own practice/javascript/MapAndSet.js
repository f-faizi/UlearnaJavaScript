// let map = new Map();
// map.set("1", "First_string").set(1, "Number").set(null, "Null");

// console.log(map.get("1"));
// console.log(map.get(null));
// console.log(map.size);

// let john = { name: "John" };
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 123);
// console.log(visitsCountMap.get(john));

// let recipeMap = new Map([
//   ["cucumber", 500],
//   ["tomatoes", 350],
//   ["onion", 50],
// ]);
// // iterate over keys (vegetables)
// for (vegetable of recipeMap.keys()) {
//   console.log(vegetable);
// }
// for (vegetable of recipeMap.values()) {
//   console.log(vegetable);
// }
// for (vegetable of recipeMap.entries()) {
//   console.log(vegetable);
// }

// let obj = {
//   name: "faizi",
//   age: 24,
// };
// let map = new Map(Object.entries(obj));
// console.log(map);

// let fruitsCount = Object.fromEntries([
//   ["Banana", 20],
//   ["Apple", 40],
//   ["kivi", 100],
// ]);
// console.log(fruitsCount);

// let map = new Map();
// map.set("banana", 39).set("kivi", 100);

// let obj = Object.fromEntries(map);
// console.log(obj);

let set = new Set();

let ali = { name: "Ali" };
let wali = { name: "Wali" };

set.add(ali);
set.add(wali);
set.add(wali);
set.add(wali);

console.log(set.size);
for (name of set) {
  console.log(name);
}
