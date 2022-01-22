const geoWeather = document.getElementById("weather-geo");
const API_KEY = "c0c16cf408de7bf353530fe0a1a4dffc";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city = data.name;
      weather = data.weather[0].main;

      geoWeather.innerHTML = `${city} is now ${weather}`;
      geoWeather.classList.remove("hide");
    });
}

function onGeoError() {
  alert("Where are you man! Can't get you're location.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
