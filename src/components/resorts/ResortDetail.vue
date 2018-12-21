<template>
  <div v-if="token">
    <section 
    v-if="resort"
    class="details">
      {{resort.resort_name}}
      <br />
      {{resort.description}}
      <br />
      {{resort.address}}
      <br />
      {{resort.url}}
      <br />
    </section>

    <hr />

    <ResortWeather
    v-if="resort"
    :resort="resort" />

    <StarRating />
    
    <h4 class="rating" v-if="rating">
      Average Rating: {{rating}}
    </h4>

    <ResortComments />
    
    <LiveComments />
  </div>

  <div v-else>
    <p>You're not logged in.  Sign in to view content</p>
    <RouterLink to="/login">
      <button>Sign In</button>
    </RouterLink>

  </div>
</template>

<script>
import ResortComments from './ResortComments';
import StarRating from './ResortRating';
import serverApi from '../../services/server-api.js';
import ResortWeather from './ResortWeather';
import LiveComments from './LiveComments';
import userInputApi from '../../services/userInput-api';

export default {
  data() {
    return {
      token: false,
      resort: null,
      rating: 0
    };
  },
  components: {
    ResortComments,
    StarRating,
    ResortWeather,
    LiveComments
  },
  created() {
    this.token = serverApi.getToken();

    serverApi.getResortByid(this.$route.params.id)
      .then(resort => {
        this.resort = resort;
      });

    this.user = serverApi.getUser().username;

    userInputApi.getStats()
      .then(stats => {
        let stat = stats.find(stat => stat.resort_id === parseInt(this.$route.params.id));
        this.rating = Math.round(stat.avg);
      });
  }
};
</script>

<style>
.details {
  display: inline-block;
  color: white;
  background: darkblue;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px lightblue;
}
.rating {
  color: rgb(230, 200, 36);
}
</style>