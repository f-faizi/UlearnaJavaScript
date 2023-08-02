// let arr = ["ali", "wali", "ahmad", "BMW", 12, 34, 45, 23, 12, 345, 23];
// let [std1, std2, std3, ...rest] = arr;

// console.log(rest.length);
// console.log(rest[4]);

// console.log(std2);
// let [firstName, lastName] = "Ahmad Ali".split(" ");
// console.log(lastName);

// let obj = {
//   id: 1,
//   name: "Faizi",
//   address: "Kabul",
//   contact: "0773232332",
// };

// let { id: userId, name, ...rest } = obj;
// console.log(rest.contact);

let options = {
  id: 1,
  name: "Faizi",
  size: ["Apple", "Kivi"],
};
function myfunction({ id, name, size: [item11, item22] }) {
  console.log(item11);
}
myfunction(options);
