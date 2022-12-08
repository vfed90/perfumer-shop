const items = [
  {
    title: "Dolce & Gabbana K",
    fragrance: "whoody",
    volume: "50ml 100ml 150ml",
    tags: ["male"],
    price: 75,
    img: "./image/k-by-dolce&gabbana.jpeg",
    rating: 4.5,
  },
  {
    title: "Yves Saint Laurent Black Opium",
    fragrance: "resinous",
    volume: "30ml 50ml 90ml",
    tags: ["female"],
    price: 150,
    img: "./image/YVES SAINT LAURENT black opium.jpeg",
    rating: 3.8,
  },
  {
    title: "Hugo Boss Boss The Scent",
    fragrance: "fruit",
    volume: "30ml 50ml 100ml",
    tags: ["female"],
    price: 130,
    img: "./image/HUGO BOSS boss the scent.jpeg",
    rating: 4.3,
  },
  {
    title: "Dolce & Gabbana Light Blue Intense Pour Homme",
    fragrance: "aquatic",
    volume: "50ml 100ml",
    tags: ["male"],
    price: 95,
    img: "./image/DOLCE&GABBANA light blue intense pour homme.jpeg",
    rating: 4.8,
  },
  {
    title: "Yves Saint Laurent Libre",
    fragrance: "floral",
    volume: "30ml 50ml 90ml",
    tags: ["female"],
    price: 135,
    img: "./image/YVES SAINT LAURENT libre.jpeg",
    rating: 3.4,
  },
  {
    title: "Lacoste L12.12 French Panache",
    fragrance: "spicy",
    volume: "50ml 100ml",
    tags: ["male"],
    price: 55,
    img: "./image/LACOSTE l12.12 french panache.jpeg",
    rating: 2.8,
  },
  {
    title: "Hugo Boss Alive",
    fragrance: "fruit",
    volume: "50ml 80ml",
    tags: ["female"],
    price: 130,
    img: "./image/HUGO BOSS alive.jpeg",
    rating: 3.9,
  },
  {
    title: "Paco Rabanne Pure XS",
    fragrance: "spicy",
    volume: "50ml 100ml",
    tags: ["male"],
    price: 75,
    img: "./image/PACO RABANNE pure xs.jpeg",
    rating: 4.2,
  },
  {
    title: "Giorgio Armani Because It's You",
    fragrance: "fruity floral",
    volume: "30ml 50ml 100ml",
    tags: ["female"],
    price: 80,
    img: "./image/GIORGIO ARMANI because it's you.jpeg",
    rating: 4.6,
  },
  {
    title: "Giorgio Armani Acqua Di Gio Profondo",
    fragrance: "fougère",
    volume: "40ml 75ml",
    tags: ["male"],
    price: 140,
    img: "./image/GIORGIO ARMANI acqua di gio profondo.jpeg",
    rating: 3.9,
  },
  {
    title: "Giorgio Armani Si Passione",
    fragrance: "fruit",
    volume: "30ml 50ml 100ml",
    tags: ["female"],
    price: 90,
    img: "./image/GIORGIO ARMANI si passione.jpeg",
    rating: 4.9,
  },
  {
    title: "Marc Jacobs Daisy",
    fragrance: "aquatic",
    volume: "30ml 50ml 100ml",
    tags: ["female"],
    price: 70,
    img: "./image/Marc Jacobs Daisy.jpeg",
    rating: 2.9,
  },
  {
    title: "Hugo Boss Bottled Infinite",
    fragrance: "whoody",
    volume: "50ml 100ml",
    tags: ["male"],
    price: 150,
    img: "./image/Hugo Boss Bottled Infinite.jpeg",
    rating: 4.2,
  },
  {
    title: "Versace Crystal Noir",
    fragrance: "spicy",
    volume: "30ml 50ml 90ml",
    tags: ["female"],
    price: 40,
    img: "./image/Versace Crystal Noir.jpeg",
    rating: 3.7,
  },
  {
    title: "Versace Eros",
    fragrance: "whoody",
    volume: "30ml 50ml 100ml",
    tags: ["male"],
    price: 80,
    img: "./image/VERSACE eros.jpeg",
    rating: 3.9,
  },
  {
    title: "Giorgio Armani Stronger With You Absolutely",
    fragrance: "eastern",
    volume: "50ml 100ml",
    tags: ["male"],
    price: 145,
    img: "./image/GIORGIO ARMANI stronger with you absolutely.jpeg",
    rating: 4.6,
  },
  {
    title: "Paco Rabanne Pure XS For Her",
    fragrance: "floral",
    volume: "50ml 80ml",
    tags: ["female"],
    price: 105,
    img: "./image/PACO RABANNE pure xs for her.jpeg",
    rating: 3.7,
  },
  {
    title: "Gucci Bamboo",
    fragrance: "citrus fruits",
    volume: "30ml 50ml",
    tags: ["female"],
    price: 105,
    img: "./image/Gucci Bamboo.jpeg",
    rating: 2.7,
  },
  {
    title: "Dolce & Gabbana Light Blue Forever Pour Homme",
    fragrance: "citrus fruits",
    volume: "50ml 100ml",
    tags: ["male"],
    price: 115,
    img: "./image/DOLCE&GABBANA light blue forever pour homme.jpeg",
    rating: 4.2,
  },
  {
    title: "Chloe Absolu de Parfum",
    fragrance: "floral",
    volume: "30ml 75ml",
    tags: ["female"],
    price: 140,
    img: "./image/Chloe Absolu de Parfum.jpeg",
    rating: 3.5,
  },
  {
    title: "Gucci Guilty Pour Homme",
    fragrance: "spicy",
    volume: "50ml 90ml 150ml",
    tags: ["male"],
    price: 120,
    img: "./image/Gucci Guilty Pour Homme.jpeg",
    rating: 3.7,
  },
  {
    title: "Moschino Toy 2 Bubble Gum",
    fragrance: "floral",
    volume: "30ml 50ml 100ml",
    tags: ["female"],
    price: 25,
    img: "./image/MOSCHINO toy 2 bubble gum.jpeg",
    rating: 4.1,
  },
  {
    title: "Chopard Garden Of Kings Agar Royal",
    fragrance: "citrus fruits",
    volume: "100ml",
    tags: ["male"],
    price: 300,
    img: "./image/CHOPARD garden of kings agar royal.jpeg",
    rating: 4.5,
  },
  {
    title: "Dolce & Gabbana Pour Femme Intense",
    fragrance: "gourmet",
    volume: "25ml 50ml 100ml",
    tags: ["female"],
    price: 80,
    img: "./image/DOLCE&GABBANA pour femme intense.jpeg",
    rating: 4.8,
  },
];

const cardContainer = document.querySelector("#shop-items");
const cardTemplate = document.querySelector("template");
const nothingFound = document.querySelector("#nothing-found");


function prepareShopItem(shopItem) {
  const item = cardTemplate.content.cloneNode(true);
  const { title, fragrance, price, img, rating, tags, volume } = shopItem;
  item.querySelector("h1").textContent = title;
  item.querySelector(".volume").textContent = volume;
  item.querySelector("p").textContent = fragrance;
  item.querySelector(".price").textContent = `From ${price}$`;
  item.querySelector("img").src = img;

  for (let i = 0; i < rating; i++) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star");
    item.querySelector(".rating").append(star);
  }

  const tagsHolder = item.querySelector(".tags");

  tags.forEach((tag) => {
    const element = document.createElement("span");
    element.textContent = tag;
    element.classList.add("tag");
    tagsHolder.append(element);
  })

  cardContainer.append(item);
  return item;
}

let currentItems = [...items];

function showResultItems(array) {
  nothingFound.textContent = "";
  cardContainer.textContent = "";
  array.forEach((value) => {
    prepareShopItem(value);
  });
  if (!array.length) {
    nothingFound.textContent = "Nothing found";

  }
}

function sortByAlphabet(a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
}

showResultItems(currentItems.sort((a, b) => sortByAlphabet(a, b)));

const sortValue = document.querySelector("#sort");
sortValue.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  switch (selectedOption) {
    case "expensive": {
      currentItems.sort((a, b) => b.price - a.price);
      break;
    }
    case "cheap": {
      currentItems.sort((a, b) => a.price - b.price);
      break;
    }
    case "rating": {
      currentItems.sort((a, b) => b.rating - a.rating);
      break;
    }
    case "alphabet": {
      currentItems.sort((a, b) => sortByAlphabet(a, b));
      break;
    }

  }
  showResultItems(currentItems);
});

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");


function applySearch() {
  const searchValue = searchInput.value.trim().toUpperCase();
  currentItems = items.filter((string) => {
    return string.title.toUpperCase().includes(searchValue)
  });
  currentItems.sort((a, b) => sortByAlphabet(a, b));
  sortValue.selectedIndex = 0;
  showResultItems(currentItems);
}

searchBtn.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);

