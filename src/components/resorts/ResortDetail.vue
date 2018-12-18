<template>
  <div>
    <StarRating />
    <ResortComments
      v-if="token" />
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