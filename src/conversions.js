export function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}
export function meterSecToMilesHour(meterSec) {
  return (meterSec * 2.237).toFixed(0);
}
export function dayOrNight(time, sunrise, sunset) {
  const currentTime = time / 1000;
  if (currentTime >= sunrise && currentTime <= sunset) {
    document.querySelector('body').style.backgroundColor = '#B0E6E8';
    document.querySelector('body').style.transition = 'background-color 1000ms linear';
    document.querySelector('body').style.color = 'black';
    document.querySelector('.content').style.outline = '2px solid black';
    document.querySelector('#location').style.border = '1px solid black';
    document.querySelector('#location').style.color = 'black';
    document.querySelector('#submit').style.border = '1px solid black';
    document.querySelector('#submit').style.color = 'black';
    return 'day';
  }
  document.querySelector('body').style.backgroundColor = '#101028';
  document.querySelector('body').style.transition = 'background-color 1000ms linear';
  document.querySelector('body').style.color = 'white';
  document.querySelector('.content').style.outline = '2px solid white';
  document.querySelector('#location').style.border = '1px solid white';
  document.querySelector('#location').style.color = 'white';
  document.querySelector('#submit').style.border = '1px solid white';
  document.querySelector('#submit').style.color = 'white';
  return 'night';
}
export function windDirection(degrees) {
  if (degrees >= 337.5 || degrees <= 22.5) {
    return 'N';
  } if (degrees > 22.5 && degrees <= 67.5) {
    return 'NE';
  } if (degrees > 67.5 && degrees <= 112.5) {
    return 'E';
  } if (degrees > 112.5 && degrees <= 157.5) {
    return 'SE';
  } if (degrees > 157.5 && degrees <= 202.5) {
    return 'S';
  } if (degrees > 202.5 && degrees <= 247.5) {
    return 'SW';
  } if (degrees > 247.5 && degrees <= 292.5) {
    return 'W';
  } if (degrees > 292.5 && degrees <= 337.5) {
    return 'NW';
  }
  return '';
}
