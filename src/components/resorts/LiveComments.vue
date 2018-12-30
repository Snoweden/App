<template>
  <section>
    <h2 id="live-title">Live Comments:</h2>
    <ul id="live">
      <li class="comment"
          v-for="(feed, index) in feedback"
          :key="index" id="onecomment">
          <h4 class="commentuser">{{feed.user}}:</h4>
          <p>{{feed.comment}}</p>
          <p>
            <button v-if="feed.userComment"
              @click="onCommentDel(feed.commentId)">
              Delete
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
        // Your API already filters based on resort id
        this.feedback = feedback.filter(feed => feed.comment);
      });
  },
  methods: {
    onCommentDel(id) {
      feedbackApi.deleteComment(id);
      feedbackApi.getComments(this.$route.params.id)
        .then(feedback => {
          this.feedback = feedback.filter(feed => feed.resortId === parseInt(this.$route.params.id) && feed.comment);
        });
    }
  }
};
</script>

<style>
#live-title {
  color: white;
}

#live {
  background: darkblue;
  display: inline-block;
  color: white;
  list-style: none;
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px lightblue;
}

#onecomment {
  margin-bottom: 5px;
}
</style>