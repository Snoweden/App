<template>
  <div v-if="token">
    <StarRating />
    <ResortComments />
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

export default {
  data() {
    return {
      token: false
    };
  },
  components: {
    ResortComments,
    StarRating
  },
  created() {
    this.token = serverApi.getToken();
  }
};
</script>

<style>

</style>