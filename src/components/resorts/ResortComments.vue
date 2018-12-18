<template>
  <div>
    <form @submit.prevent="submitComment">
      <label>Comment:</label>
        <textarea v-model="feedback.comment" rows="4" cols="50" name="comment" placeholder="Enter comment..."></textarea>
      <button>Submit</button>
    </form>

    <div>

    </div>
  </div>
</template>

<!-- ////////////////////
API receives text from box
//////////////////// -->

<script>
import userInputApi from '../../services/userInput-api';

export default {
  data() {
    return {
      feedback: {}
    };
  },
  methods: {
    submitComment() {
      console.log('comment submitted');
      this.feedback.profile_id = 1;
      this.feedback.resort_id = 1;
      userInputApi.addComment(this.feedback)
        .then(() => {
          console.log('packaged info', this.feedback);
        });
    }
  }
};
</script>

<style>

</style>
