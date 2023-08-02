// let student = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
//   spouse: null,
// };

// let json = JSON.stringify(student);
// console.log(json);
// let obj = JSON.parse(json);
// console.log(obj);

// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };
// room.occupiedBy = meetup; // room references meetup

// console.log(
//   JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
// );

let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user, null, 10));
