<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import weatherApi from '../services/weather-api.js';
export default {
  created() {
    weatherApi.getWeather().then(weather => console.log(weather));
  }

  
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
