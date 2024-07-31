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
    return `<b>${bar.name}</b><br>💸 Pris: ${bar.price}:- | 🍺 Typ: ${bar.type} | ✅ Rating: ${bar.rating}/5<br><a href="${bar.link}" target="_blank">${bar.link}</a>`;
}

function barIcon(bar: Bar) {
    var bottleIcon = L.icon({
      iconUrl: "img/classic-bottle.png",

      iconSize: [38, 38], // size of the icon (img is square)
    //   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -19], // point from which the popup should open relative to the iconAnchor
    });
    var draftIcon = L.icon({
      iconUrl: "img/classic-logo.png",

      iconSize: [31, 42], // size of the icon (img is 314 × 425)
    //   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
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
    name: "Sofia Common",
    price: 78,
    type: "Fat",
    rating: 5,
    link: "https://sofiacommon.se/",
    coordinates: [59.313787766280846, 18.090643121866947],
  },
  {
    name: "Duvan",
    price: 70,
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
];
