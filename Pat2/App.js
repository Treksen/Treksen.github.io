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

// create marker
const marker = L.marker([-1.2921, 36.8219]).addTo(myMap);

// create popup
const popupContent = '<h3>My Custom Popup</h3><p>This is my custom popup content.</p>';
marker.bindPopup(popupContent).openPopup();
