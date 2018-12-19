<template>
  <div v-if="token">
    <section 
    v-if="resort"
    class="details">
      {{resort.resort_name}}<br>
      {{resort.description}}<br>
      {{resort.address}}<br>
      {{resort.url}}<br>
    </section>

    <StarRating />
    <br />
    <br />
    <ResortComments />
    <ResortWeather
    v-if="resort"
    :resort="resort" />
    <ResortWeather />
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

export default {
  data() {
    return {
      token: false,
      resort: null
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

  }
};
</script>

<style>
.detail {
  display: inline-block;
  
}

</style>