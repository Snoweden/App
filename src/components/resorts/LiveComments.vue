<template>
  <section>
    <h2>Live Comments:</h2>
    <ul>
      <li class="comment"
          v-for="(feed, index) in feedback"
          :key="index">
          <h4 class="commentuser">{{feed.user}}:</h4>
          <p>{{feed.comment}}</p>
          <p>
            <button v-if="feed.userComment"
                  @click="onCommentDel(feed.commentId)">Delete
            </button>
          </p>
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
        this.feedback = feedback.filter(feed => feed.resortId === parseInt(this.$route.params.id) && feed.comment);
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
.comment {
  list-style: none;
  border: 1px solid black;
  padding: 0.5px;
  margin: 0.5vh;
}
.commentuser {
  color: rgb(240, 225, 88);
}
</style>
