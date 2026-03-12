const map=L.map("map").setView([20,0],2);

L.tileLayer(
"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
{maxZoom:19}
).addTo(map);

function addMarker(lat,lon,text){

const marker=L.marker([lat,lon]).addTo(map);

marker.bindPopup(text);

map.setView([lat,lon],6);

}
