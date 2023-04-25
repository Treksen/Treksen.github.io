// set map options
const options = {
  center: [-1.2921, 36.8219],
  zoom: 13
}

// create map
const myMap = L.map('map', options);

// add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(myMap);

// add markers to map
const markers = <?php echo $markersJson ?>;
for (let i = 0; i < markers.length; i++) {
  const marker = L.marker([markers[i].lat, markers[i].lng]).addTo(myMap);
  const popupContent = '<h3>' + markers[i].name + '</h3>';
  marker.bindPopup(popupContent);
}
