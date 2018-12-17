export default {
    getWeather() {
        return fetch('http://api.openweathermap.org/data/2.5/weather?lat=45.3311&lon=-121.7110&appid=9abd4dd837ed2f8c11ab1eb3a10377c6')
            .then(response => response.json());
    }
};