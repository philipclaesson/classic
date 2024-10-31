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

  map.setView([59.313964, 18.070678], 13);
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});

function barHTLM(bar: Bar) {
    return `<b>${bar.name}</b><br>💸 Pris: ${bar.price}:- | 🍺 Typ: ${bar.type} | ✅ Rating: ${bar.rating}/5<br><a href="${bar.link}" target="_blank">Visa mer</a>`;
}

function barIcon(bar: Bar) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    var bottleIcon = L.icon({
      iconUrl: "img/classic-bottle.png",

      iconSize: [0.05*vw, 0.05*vw], // size of the icon (img is square)
      popupAnchor: [0, -19], // point from which the popup should open relative to the iconAnchor
    });
    var draftIcon = L.icon({
      iconUrl: "img/classic-logo.png",

      iconSize: [31*0.001*vw, 42*0.001*vw], // size of the icon (img is 314 × 425)
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
];
