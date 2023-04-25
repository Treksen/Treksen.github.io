$(document).ready(function() {
  // initialize the Leaflet map
  const map = L.map('map').setView([37.8, -96], 4);
  // add a TileLayer to the map
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
  }).addTo(map);
  // define a variable for the GeoJSON layer
  let geojsonLayer;
  // load the GeoJSON data and add it to the map as a layer

