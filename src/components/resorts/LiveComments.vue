<template>
  <section>
    <h2>Live Comments:</h2>
    <ul>
      <li v-for="(feed, index) in feedback"
          :key="index">
          {{feed.user}}: {{feed.comment}}
      </li>
    </ul>
  </section>
</template>

<script>

import feedbackApi from '../../services/feedback-api';

export default {
  data() {
    return {
      feedback: []
    };
  },
  created() {
    test();
    function test() {
      console.log('time testing');
      // test();
    }
      feedbackApi.getComments(this.$route.params.id)
        .then(feedback => {
          this.feedback = feedback;
          test();
        });
  }
};
</script>

<style>

</style>
