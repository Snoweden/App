<template>
  <section>
    <link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet">
    <div id="headers">
      <h2>SNOWEDEN</h2>
      <h3 id="fdsa" v-if="user">Welcome, {{user}}</h3>
    </div>
    <div id="app">
      <Header/>
      <RouterView></RouterView>
    </div>
  </section>
</template>

<script>
import serverApi from '../services/server-api';
import Header from './Header.vue';

export default {
  data() {
    return {
      user: ''
    };
  },
  components: {
    Header
  },
  created() {
    this.user = serverApi.getUser().username;
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
}

#headers{
  display: flex;
  justify-content: space-between;
}

h2 {
  font-family: 'Play', sans-serif;
  font-size: 50px;
  margin-top: 0;
  margin-bottom: 15px;
  padding: 0 5px;
  display: inline-block;
  border-bottom: 5px outset white;;
  border-right: 5px outset white;
}

#fdsa {
  background: red;
}


</style>
