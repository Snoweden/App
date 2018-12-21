<template>
  <div v-if="user">
    <section 
    v-if="resort"
    class="details">
      <p>{{resort.resort_name}}</p>
      <p>{{resort.description}}</p>
      <p>{{resort.address}}</p>
      <p>{{resort.url}}</p>
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
      user: {},
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
    this.user = serverApi.getUser().username;

    serverApi.getResortById(this.$route.params.id)
      .then(resort => {
        this.resort = resort;
      });
      
    userInputApi.getStats()
      .then(stats => {
        this.rating = Math.round(stats.find(stat => stat.resort_id === parseInt(this.$route.params.id)).avg);
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