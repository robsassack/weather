import { apiKey } from './config';

async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey.key}`);
  const data = await response.json();
  return data;
}

getWeather('Detroit').then((data) => {
  console.log(data);
});
