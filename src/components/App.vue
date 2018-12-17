<template>
  <div id="app">
    <Header/>
    <RouterView></RouterView>
  </div>
</template>

<script>
import weatherApi from '../services/weather-api.js';
import Header from './Header.vue';
export default {
  created() {
    weatherApi.getWeather().then(weather => console.log(weather));
  },
  components: {
    Header
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
