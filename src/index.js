import { apiKey } from './config';
import './styles.css';

const locationInput = document.querySelector('#location');
const submit = document.querySelector('#submit');
const content = document.querySelector('.content');

async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey.key}`);
  const data = await response.json();
  return data;
}

function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}

function meterSecToMilesHour(meterSec) {
  return (meterSec * 2.237).toFixed(0);
}

function displayData(data) {
  content.textContent = '';

  const location = document.createElement('h2');
  location.textContent = `${data.name}, ${data.sys.country}`;
  content.appendChild(location);

  const temperature = document.createElement('p');
  temperature.textContent = `${kelvinToFahrenheit(data.main.temp)}°`;
  content.appendChild(temperature);

  const weather = document.createElement('p');
  weather.textContent = `${data.weather[0].main} (${data.weather[0].description})`;
  content.appendChild(weather);

  const highLow = document.createElement('p');
  highLow.textContent = `High: ${kelvinToFahrenheit(data.main.temp_max)}° | Low: ${kelvinToFahrenheit(data.main.temp_min)}°`;
  content.appendChild(highLow);

  const humidity = document.createElement('p');
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  content.appendChild(humidity);

  const wind = document.createElement('p');
  wind.textContent = `Wind: ${meterSecToMilesHour(data.wind.speed)} mph`;
  content.appendChild(wind);
}

getWeather('Detroit').then((data) => {
  console.log(data);
  displayData(data);
});

submit.addEventListener('click', () => {
  getWeather(locationInput.value).then((data) => {
    displayData(data);
  });
  locationInput.value = '';
});
