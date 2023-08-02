// let user = {
//   userId: 1,
//   userName: "Faizullah",
//   userEmail: "faiz@gmail.com",
//   userAddress: "Kabul",
// };
// // for (let i = 0; i < user.length; i++) {
// //   console.log(user[i]);
// // }
// for (const key in user) {
//   console.log(key, user[key]);
//   delete user.userId;
// }
// console.log("***********");

// let objlength = Object.keys(user).length;
// console.log(objlength);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// for (const digits of arr) {
//   console.log(digits);
// }

// var Books = [
//   {
//     title: "NodeJs for professionals",
//     author: "Faizullah",
//     alreadyRead: false,
//   },
//   {
//     title: "Javascript for professionals",
//     author: "Faizullah",
//     alreadyRead: true,
//   },
// ];
// for (var i = 0; i < Books.length; i++) {
//   let book = Books[i];
//   var bookInfor = `${book.title} by ${book.author}`;
//   if (book.alreadyRead) {
//     console.log(`You all ready red this Book`);
//   } else {
//     console.log(`you need to read this book`);
//   }
// }

let attendence = [
  {
    userId: 1,
    userName: "Ahmad",
    days: 12,
    active: true,
  },
  {
    userId: 1,
    userName: "Ali",
    days: 12,
    active: false,
  },
  {
    userId: 1,
    userName: "Wali",
    days: 12,
    active: true,
  },
  {
    userId: 1,
    userName: "Javad",
    days: 12,
    active: false,
  },
];
for (let i = 0; i < attendence.length; i++) {
  let onePersoneAdd = attendence[i];
  if (onePersoneAdd.active) {
    console.log(
      `Mr. ${onePersoneAdd.userName} you are present ${onePersoneAdd.days} days`
    );
  } else {
    console.log(
      `Mr. ${onePersoneAdd.userName} you are absent ${onePersoneAdd.days} days`
    );
  }
}
