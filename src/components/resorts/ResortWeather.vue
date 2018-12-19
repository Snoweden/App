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
import serverApi from '../../services/server-api';
export default {
  data() {
    return {
      weather: null,
      coord: null
    }
  },

  created() {
    weatherApi.getWeather(lat, lon)
      .then(w => {
        this.weather = w;
      });


        serverApi.getMarkers()
        .then(c => {
          this.coord = c;  //console.log('serverApi log'))};
        });      
  }
}
</script>

<style>

</style>
