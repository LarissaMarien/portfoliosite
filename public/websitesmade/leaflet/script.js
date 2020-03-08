var map = L.map('mymap', {
  center: [51.508822, -0.103182],
  zoom: 13
});

var transportmap = L.tileLayer('https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=877b540fcd544115ba8020f9ebbe8aed', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	apikey: '877b540fcd544115ba8020f9ebbe8aed',
	maxZoom: 22
});

transportmap.addTo(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var pancakeIcon = L.icon({
    iconUrl: 'pancakes.png',

    iconSize:     [50, 50],
    iconAnchor:   [22, 35],
    popupAnchor:  [4, -20]
});

var burgerIcon = L.icon({
    iconUrl: 'burger.png',

    iconSize:     [50, 50],
    iconAnchor:   [22, 35],
    popupAnchor:  [4, -25]
});

var fishIcon = L.icon({
    iconUrl: 'fish.png',

    iconSize:     [60, 50],
    iconAnchor:   [22, 34],
    popupAnchor:  [4, -20]
});

var streetfoodIcon = L.icon({
    iconUrl: 'foodtruck.png',

    iconSize:     [77, 50],
    iconAnchor:   [22, 34],
    popupAnchor:  [20, -20]
});

var candyIcon = L.icon({
    iconUrl: 'candy.png',

    iconSize:     [50, 50],
    iconAnchor:   [22, 34],
    popupAnchor:  [4, -20]
});

L.marker([51.518359, -0.07887], {icon: pancakeIcon}).addTo(map).bindPopup("Best breakfast in the world!");
L.marker([51.513276, -0.129851], {icon: burgerIcon}).addTo(map).bindPopup("Best burgers in the world!");
L.marker([51.502765, -0.119259], {icon: fishIcon}).addTo(map).bindPopup("Best fish & chips in the world!");
L.marker([51.505551, -0.090965], {icon: streetfoodIcon}).addTo(map).bindPopup("Best streetfood in the world!");
L.marker([51.51391, -0.102165], {icon: candyIcon}).addTo(map).bindPopup("Best candy in the world!");

map.locate({setView: true, maxZoom: 13});
