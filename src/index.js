import { apiKey } from './config';
import './styles.css';
import 'weather-icons/css/weather-icons.css';
import conditionIcon from './conditionIcon';
import {
  dayOrNight, kelvinToFahrenheit, windDirection, meterSecToMilesHour,
} from './conversions';

const locationInput = document.querySelector('#location');
const submit = document.querySelector('#submit');
const content = document.querySelector('.content');

async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey.key}`);
  const data = await response.json();
  return data;
}

async function getWeatherCoords(coords) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey.key}`);
  const data = await response.json();
  return data;
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
  temperature.className = 'temp';
  temperature.textContent = `${kelvinToFahrenheit(data.main.temp)}°`;
  content.appendChild(temperature);

  const weather = document.createElement('p');
  const weatherArr = [];
  data.weather.forEach((weatherData) => {
    weatherArr.push(`${weatherData.main} (${weatherData.description})`);
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
  wind.textContent = `Wind: ${windDirection(data.wind.deg)} ${meterSecToMilesHour(data.wind.speed)} mph`;
  content.appendChild(wind);

  const tempScaleChooser = document.createElement('div');
  tempScaleChooser.className = 'temp-scale-chooser';
  tempScaleChooser.innerHTML = '°F';
  content.appendChild(tempScaleChooser);

  tempScaleChooser.addEventListener('click', () => {
    if (tempScaleChooser.textContent === '°F') {
      tempScaleChooser.textContent = '°C';
      temperature.textContent = `${Math.round((kelvinToFahrenheit(data.main.temp) - 32) / 1.8)}°`;
      highLow.textContent = `High: ${Math.round((kelvinToFahrenheit(data.main.temp_max) - 32) / 1.8)}° | Low: ${Math.round((kelvinToFahrenheit(data.main.temp_min) - 32) / 1.8)}°`;
    } else {
      tempScaleChooser.textContent = '°F';
      temperature.textContent = `${kelvinToFahrenheit(data.main.temp)}°`;
      highLow.textContent = `High: ${kelvinToFahrenheit(data.main.temp_max)}° | Low: ${kelvinToFahrenheit(data.main.temp_min)}°`;
    }
  });
}

navigator.geolocation.getCurrentPosition(
  (position) => {
    // geolocation allowed
    const coords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    getWeatherCoords(coords).then((data) => {
      displayData(data);
    });
  },
  () => {
    // geolocation denied
    getWeather('Detroit').then((data) => {
      displayData(data);
    });
  },
);

submit.addEventListener('click', () => {
  getWeather(locationInput.value).then((data) => {
    displayData(data);
  })
    .catch(() => {
      const error = document.createElement('h2');
      error.textContent = 'Location not found';
      content.appendChild(error);
    });
  locationInput.value = '';
});
