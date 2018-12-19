<template>
  <section>
    <h2>Live Comments:</h2>
    <!-- <ul>
      <li v-for="feedba in comments"></li>
    </ul> -->
  </section>
</template>

<script>

import feedbackApi from '../../services/feedback-api';

export default {
  data() {
    return {
      comments: []
    };
  },
  created() {
    feedbackApi.getComments(this.$route.params.id)
      .then(comments => this.comments = comments);
  }
};
</script>

<style>

</style>
