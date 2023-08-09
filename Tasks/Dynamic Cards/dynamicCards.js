let cardsSource = [
  {
    resturantName: "Kabul Resturant",
    resturantImage: "imgs/wal1.jpg",
    aboutResturant:
      "This is the kabul best resturant. Here you can get any Food",
    resturantLocation: "Kabul",
  },
  {
    resturantName: "Laghman Resturant",
    resturantImage: "imgs/wal2.jpg",
    aboutResturant:
      "This is the Laghman best resturant. Here you can get any Food",
    resturantLocation: "Laghman",
  },
  {
    resturantName: "Parwan Resturant",
    resturantImage: "imgs/wal3.jpg",
    aboutResturant:
      "This is the Parwan best resturant. Here you can get any Food",
    resturantLocation: "Parwan",
  },
  {
    resturantName: "Hetat Resturant",
    resturantImage: "imgs/wal4.jpg",
    aboutResturant:
      "This is the Herat best resturant. Here you can get any Food",
    resturantLocation: "Herat",
  },
  {
    resturantName: "Mazar Resturant",
    resturantImage: "imgs/wal5.jpg",
    aboutResturant:
      "This is the Mazar best resturant. Here you can get any Food",
    resturantLocation: "Mazar",
  },
];
document.body.cssText = `padding:0; margin:0;`;
let resturant = (cardsSource) => {
  let wrapper = document.createElement("div");
  wrapper.style.cssText = `width: 90%; margin:auto; display:flex; flex-wrap: wrap; gap: 30px; boxshadow: 0px 0px 15px black;`;

  cardsSource.map(
    ({ resturantName, resturantImage, aboutResturant, resturantLocation }) => {
      let card = document.createElement("div");
      card.style.cssText = `width: 300px;  background-color: lightgray; padding: 20px; border-radius: 10px;`;

      card.innerHTML = `<h1 style='text-align: center; margin: 20px 0;'>${resturantName}</h1>`;
      card.innerHTML += `<img src=${resturantImage} width='300' style='border-radius: 10px;' >`;
      card.innerHTML += `<p style='padding: 15px'>${aboutResturant}</p>`;
      card.innerHTML += `<a href='#' style='padding:8px 15px; margin:30px 10px; text-decoration: none; background-color: red; border-radius: 6px; color: white;'>${resturantLocation}</a>`;

      wrapper.append(card);
    }
  );
  document.body.append(wrapper);
};

resturant(cardsSource);
