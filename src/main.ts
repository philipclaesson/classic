import * as L from "leaflet";

function render() {
  // Create a map container
  const map = L.map("map")

  // Add a tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  bars.forEach((bar) => {
    var marker = L.marker(bar.coordinates, { icon: barIcon(bar) }).addTo(map);
    marker.bindPopup(barHTLM(bar)).openPopup();
  });

  map.setView([59.313964, 18.070678], 6);
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});

function barHTLM(bar: Bar) {
    return `<div class="bar"><b>${bar.name}</b><br>💸 ${bar.price}:- | 🍺 ${bar.type} <br> ✅ Rating: ${bar.rating}/5<br><a href="${bar.link}" target="_blank">Ta mig dit</a></div>`;
}

function barIcon(bar: Bar) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    var bottleIcon = L.icon({
      iconUrl: "img/classic-bottle.png",

      iconSize: [0.07*vh, 0.07*vh], // size of the icon (img is square)
      popupAnchor: [0, -19], // point from which the popup should open relative to the iconAnchor
    });
    var draftIcon = L.icon({
      iconUrl: "img/classic-logo.png",

      iconSize: [31*0.002*vh, 42*0.002*vh], // size of the icon (img is 314 × 425)
      popupAnchor: [0, -21], // point from which the popup should open relative to the iconAnchor
    });
    if (bar.type === "Flaska") {
      return bottleIcon;
    } else {
        return draftIcon;
    }
} 

// Define a struct called Bar
interface Bar {
  name: string;
  price: number;
  type: string;
  rating: number;
  link: string;
  coordinates: L.LatLngTuple;
}

const bars: Bar[] = [
  {
    name: "Folk Pizza och Bar",
    price: 82,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/WoobbsvmoSrCJEm57",
    coordinates: [55.706943296024754, 13.189310597817657],
  },
  {
    name: "Duvan",
    price: 85,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/XFj5vSqcp5fxV81M9",
    coordinates: [59.308711257488916, 18.08309893692201],
  },
  {
    name: "Snotty Sound Bar",
    price: 75,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/XFj5vSqcp5fxV81M9",
    coordinates: [59.312444084393825, 18.081734560558004],
  },
  {
    name: "Bar Europa",
    price: 82,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/8gdc6Zz8AgVquYCc6",
    coordinates: [59.318385480338314, 18.05574216943283],
  },
  {
    name: "Nybroe Smörrebröd (Hötorgshallen)",
    price: 75,
    type: "Flaska",
    rating: 5,
    link: "https://maps.app.goo.gl/d9edgNzEH7Ya6KMR7",
    coordinates: [59.33415462073304, 18.062773969254238],
  },
  {
    name: "Nybroe Smörrebröd (Östermalmshallen)",
    price: 75,
    type: "Flaska",
    rating: 5,
    link: "https://maps.app.goo.gl/Za3kh9Augx9LEYDM8",
    coordinates: [59.33588699597013, 18.07786583180028],
  },
  {
    name: "M.E.A.T",
    price: 82,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/b6GbK4quFpZ5C1Jr7",
    coordinates: [55.70228486833545, 13.190575156258575],
  },
  {
    name: "ROST ÄNGELHOLM",
    price: 103,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/29ma812KwB7uwkKx9",
    coordinates: [56.24669537189208, 12.864305746296123],
  },
  {
    name: "Scalas bakficka",
    price: 89,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/K2YTqXioFWZ5vrL77",
    coordinates: [59.336508867924756, 18.05397056988638],
  },
  {
    name: "Dansken",
    price: 56,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/nsajjzThR4VTw2Bd8",
    coordinates: [57.69939979958528, 11.950095640988183],
  },
  {
    name: "Kitchen 961",
    price: 65,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/vxveKsEeGPptaSiq8",
    coordinates: [55.606993991964416, 13.023420763334213],
  },
  {
    name: "Wollmar",
    price: 82,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/GxZbPytDyQPu3nz37",
    coordinates: [59.31706806662487, 18.062508971738623],
  },
  {
    name: "JP's Bar & Restaurant",
    price: 74,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/u5cP1V69Vc7g9nmy7",
    coordinates: [55.594584738316826, 12.984402631462256],
  },
  {
    name: "The Bishops Arms - Umeå",
    price: 96,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/9cCyyApYAGBMpryZ7",
    coordinates: [63.82613832957854, 20.260176878958543],
  },
  {
    name: "Restaurang Utsikten",
    price: 75,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/LMLUvNw1VJ5tQH3K7",
    coordinates: [56.04952406844887, 12.687655758124254],
  },
  {
    name: "Telegrafen",
    price: 79,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/K2BScQq4Cq2L35Qu7",
    coordinates: [56.04829615313822, 12.694425598599004],
  },
  {
    name: "Star",
    price: 82,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/QKNeBgnxzfKRVsw5A",
    coordinates: [55.593070698866384, 13.006663613926827],
  },
  {
    name: "Honey Honey",
    price: 84,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/o63Aq64XUXnCjz7q8",
    coordinates: [59.31472364977034, 18.076250197714373],
  },
  {
    name: "Matrosen Smörrebröd",
    price: 97,
    type: "Fat",
    rating: 5,
    link: "https://maps.app.goo.gl/pZJ8r2h3Km9xxYC79",
    coordinates: [59.32461686678219, 18.07522673918963],
  },
];
