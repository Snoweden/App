<template>
  <div id="app">
    <Header/>
    <RouterView></RouterView>
  </div>
</template>

<script>

import Header from './Header.vue';

export default {
  components: {
    Header
  }
};
</script>

<style>
header {
  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
