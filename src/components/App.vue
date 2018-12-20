<template>
  <div id="app">
    <Header :onLogout="handleLogout"/>
    <RouterView></RouterView>
  </div>
</template>

<script>
import Header from './Header.vue';
import serverApi from '../services/server-api';
export default {
  components: {
    Header
  },
  methods: {
    handleLogout() {
      console.log('logout');
      serverApi.setToken('');
      this.$router.push('/');
    }
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
