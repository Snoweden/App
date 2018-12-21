<template>
  <section>
    <h2>Live Comments:</h2>
    <ul>
      <li v-for="(feed, index) in feedback"
          :key="index">
          {{feed.user}}: {{feed.comment}}
          <button v-if="feed.userComment"
                  @click="onCommentDel(feed.commentId)">Delete</button>
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
    feedbackApi.getComments(this.$route.params.id)
      .then(feedback => {
        this.feedback = feedback;
      });
  },
  methods: {
    onCommentDel(id) {
      feedbackApi.deleteComment(id);
      feedbackApi.getComments(this.$route.params.id)
        .then(feedback => {
          this.feedback = feedback;
        });
    }
  }
};
</script>

<style>

</style>
