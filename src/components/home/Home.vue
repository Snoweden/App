<template>
  <div id="home">
    <h1>Welcome to Snoweden!</h1>

    <h3 v-if="user">Hello {{user}}</h3>
  <div v-if="stats">

    <H4>Your Top 3 Picks!</H4>
    <table>
      <tbody>
        <tr v-for="stat in stats"
          :key="stat.resortId">
          <td>{{stat.resort_name}}</td>
          <td>{{stat.avg}}/5</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>

  </div>
</template>

<script>


import serverApi from '../../services/server-api';
import userInputApi from '../../services/userInput-api';

export default {
  data() {
    return {
      user: '',
      resort: null,
      stats: null
    };
  },
  created() {
    this.user = serverApi.getUser().username;

    this.stats = userInputApi.getStats()
      .then(stats => {
        console.log();
        this.stats = stats;
      });
  }, 
};
</script>

<style>
  body {
    background: rgb(102, 143, 232);
  }

  #home {
    color: white;
  }
</style>
