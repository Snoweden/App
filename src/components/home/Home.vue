<template>
  <div id="home">
    <!-- why h3? -->
    <h3 v-if="user">Hello {{user}}</h3>
    <!-- why h1? -->
    <h1>Welcome to
      <!-- use css margins and padding, not <br> -->
      <!-- <br />
      <br /> -->
      <span id="snoweden">SNOWEDEN</span>
    </h1>
    <hr />
    <p id="description">
      Displays a Google Map of all the ski resorts in Oregon.  Click on a marker to show more details about said resort.  Give it a rating, add a comment about the weather conditions, or if you don't have an account, you can just look at all the pretty resorts in Oregon.
    </p>
    <img class="homeimg" src="../../assets/willamette_pass_lodge.jpg">
    <div v-if="user">
      <!-- no, use css to underline -->
      <h4><u>Resort Ratings!</u></h4>
      <table align="center">
        <tbody>
          <tr v-for="stat in stats"
            :key="stat.resortId">
            <td>{{stat.resort_name}}</td>
            <td>{{stat.avg}}/5</td>
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
      stats: null,
    };
  },
  created() {
    this.user = serverApi.getUser().username;

    userInputApi.getStats()
      .then(stats => {
        this.stats = stats;
      });
  }, 
};
</script>

<style>
body {
  background:-webkit-linear-gradient(left, rgb(0, 0, 255), rgb(102, 143, 232));
}

#home {
  color: white;
}

#snoweden {
  border: 5px outset gray;
}

#description {
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
  border: 2px solid black;
}

h3 {
  font-size: 2em;
}


</style>