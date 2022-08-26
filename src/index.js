import { apiKey } from './config';
import './styles.css';
import 'weather-icons/css/weather-icons.css';

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

function conditionIcon(condition, time) {
  switch (condition) {
    default:
      if (time === 'day') {
        return 'wi-day-sunny';
      }
      return 'wi-night-clear';
  }
}

function dayOrNight(time, sunrise, sunset) {
  const currentTime = time / 1000;
  if (currentTime >= sunrise && currentTime <= sunset) {
    return 'day';
  }
  return 'night';
}

function displayData(data) {
  content.textContent = '';

  const location = document.createElement('h2');
  if (data.sys.country) {
    location.textContent = `${data.name}, ${data.sys.country}`;
  } else {
    location.textContent = data.name;
  }
  content.appendChild(location);

  const weatherIcon = document.createElement('i');
  weatherIcon.classList.add('wi');
  const time = dayOrNight(Date.now(), data.sys.sunrise, data.sys.sunset);
  const condition = data.weather[0].id;
  weatherIcon.classList.add(conditionIcon(condition, time));
  content.appendChild(weatherIcon);

  const temperature = document.createElement('p');
  temperature.textContent = `${kelvinToFahrenheit(data.main.temp)}°`;
  content.appendChild(temperature);

  const weather = document.createElement('p');
  const weatherArr = [];
  data.weather.forEach((weatherData) => {
    weatherArr.push(`${weatherData.main} (${weatherData.description}) `);
  });
  weather.textContent = weatherArr.join('; ');
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
