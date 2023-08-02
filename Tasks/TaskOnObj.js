let books = [
  {
    bookName: "You don't know JavaScript",
    bookAuther: "Stev jobs",
    bookEdition: "21th",
    bookPublishYear: "2022",
    bookPages: 302,
    bookprice: "$200",
  },
  {
    bookName: "English Comprehensive",
    bookAuther: "Israr",
    bookEdition: "2th",
    bookPublishYear: "2002",
    bookPages: 102,
    bookprice: "$10",
  },
  {
    bookName: "Best English Grammar",
    bookAuther: "John wali",
    bookEdition: "12th",
    bookPublishYear: "2012",
    bookPages: 206,
    bookprice: "$40",
  },
  {
    bookName: "Business In real world",
    bookAuther: "Jamaludin",
    bookEdition: "5th",
    bookPublishYear: "2019",
    bookPages: 359,
    bookprice: "$50",
  },
  {
    bookName: "How to scam people",
    bookAuther: "Fatih",
    bookEdition: "1th",
    bookPublishYear: "2023",
    bookPages: 502,
    bookprice: "$500",
  },
  {
    bookName: "Afghan History",
    bookAuther: "Hikmat yar",
    bookEdition: "2th",
    bookPublishYear: "2013",
    bookPages: 267,
    bookprice: "$120",
  },
  {
    bookName: "Women freedom",
    bookAuther: "Abdul Qadar Khan",
    bookEdition: "8th",
    bookPublishYear: "2020",
    bookPages: 82,
    bookprice: "$200",
  },
  {
    bookName: "Zahir Shah",
    bookAuther: "Daud Khan",
    bookEdition: "1th",
    bookPublishYear: "1984",
    bookPages: 245,
    bookprice: "$378",
  },
  {
    bookName: "Ashraf Ghani",
    bookAuther: "Amrullah Saleh",
    bookEdition: "1th",
    bookPublishYear: "2023",
    bookPages: 420,
    bookprice: "$0",
  },
];

for (const {
  bookName,
  bookAuther,
  bookEdition,
  bookPublishYear,
  bookPages,
  bookprice,
} of books) {
  let card = (document.getElementsByClassName(
    "cards"
  ).innerhmtl = `<li> The Book Name is ${bookName} written by ${bookAuther} in ${bookPublishYear} the Eddition of this book is ${bookEdition} It has ${bookPages} Pages and it's price is ${bookprice}</li>`);
  document.write(card);
}
