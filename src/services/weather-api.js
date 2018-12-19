export default {
  getWeather(lat = '', lon = '') {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&appid=9abd4dd837ed2f8c11ab1eb3a10377c6`)
      .then(response => response.json());
  }
};