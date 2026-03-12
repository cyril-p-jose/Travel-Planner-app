async function getCoordinates(place){

const url=`https://nominatim.openstreetmap.org/search?format=json&q=${place}`;

const res=await fetch(url);

const data=await res.json();

if(data.length===0) return null;

return {
lat:data[0].lat,
lon:data[0].lon
};

}

async function getWeather(lat,lon){

const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

const res=await fetch(url);

return await res.json();

}
