import { apiKey } from './config';

const locationInput = document.querySelector('#location');
const submit = document.querySelector('#submit');

async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey.key}`);
  const data = await response.json();
  return data;
}

getWeather('Detroit').then((data) => {
  console.log(data);
});

submit.addEventListener('click', () => {
  getWeather(locationInput.value).then((data) => {
    console.log(data);
  });
  locationInput.value = '';
});
