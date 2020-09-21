// Partial functions - calling a fake weather service

function getWeatherUrl(location, time) {
  return `http://fake-weather.com/${location}/${time}`
}

function getHelsinkiWeatherUrl(time) {
  return getWeatherUrl('Helsinki', time)
}

console.log(getHelsinkiWeatherUrl('today'))
