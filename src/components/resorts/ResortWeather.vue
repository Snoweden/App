<template>
  <div>
    <tr>
      <th>
        Condition
      </th>
      <th>
        Value
      </th>
    </tr>
    <tr>
      <td>
        Temperature
      </td>
      <td>
        {{ weather.main.temp }}
      </td>
    </tr>
    <tr>
      <td>
        Humidity
      </td>
      <td>
        {{ weather.main.humidity }}
      </td>
    </tr>
    <tr>
      <td>
        Wind Speed
      </td>
      <td>
        {{ weather.wind.speed }}
      </td>
    </tr>
      <tr>
      <td>
        Cloud Cover
      </td>
      <td>
        {{ weather.clouds.all }}
      </td>
    </tr>
      <tr>
      <td>
        General Weather
      </td>
      <td>
        {{ weather.weather[0].description }}
      </td>
    </tr>
  </div>
</template>

<script>
import weatherApi from '../../services/weather-api';

export default {
  data() {
    return {
      weather: null //or {}
    }
  },
  created() {
    weatherApi.getWeather()
      .then(w => {
        this.weather = w;
      });
    // console.log(this.weather)
  }



};
</script>

<style>

</style>
