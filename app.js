let trips=getTrips();

renderTrips();

async function addTrip(){

const destination=document.getElementById("destination").value;
const date=document.getElementById("date").value;
const notes=document.getElementById("notes").value;

if(!destination){
alert("Enter destination");
return;
}

const coords=await getCoordinates(destination);

if(!coords){
alert("Location not found");
return;
}

const weather=await getWeather(coords.lat,coords.lon);

document.getElementById("weather").innerHTML=
`Weather: ${weather.main.temp}°C, ${weather.weather[0].description}`;

const trip={
destination,
date,
notes,
lat:coords.lat,
lon:coords.lon
};

trips.push(trip);

saveTrips(trips);

addMarker(coords.lat,coords.lon,destination);

renderTrips();

}

function renderTrips(){

const list=document.getElementById("tripList");

list.innerHTML="";

trips.forEach((trip,index)=>{

const div=document.createElement("div");

div.className="trip";

div.innerHTML=`

<h3>${trip.destination}</h3>

<p>Date: ${trip.date}</p>

<p>${trip.notes}</p>

<button class="delete" onclick="deleteTrip(${index})">Delete</button>

`;

list.appendChild(div);

});

}

function deleteTrip(index){

trips.splice(index,1);

saveTrips(trips);

renderTrips();

}
