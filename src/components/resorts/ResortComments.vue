<template>
  <div>
    <form @submit.prevent="submitComment">
      <label>Comment:</label>
        <textarea v-model="comment" rows="4" cols="50" name="comment" placeholder="Enter comment..."></textarea>
      <button>Submit</button>
    </form>

    <div>

    </div>
  </div>
</template>

<!-- ////////////////////
Fix the object Object in the input text area.
API receives text from box
//////////////////// -->

<script>
import userInputApi from '../../services/userInput-api';

export default {
  data() {
    return {
      comment: ''
    };
  },
  methods: {
    submitComment() {
      console.log('comment submitted');
      userInputApi.addComment(this.comment)
        .then(() => {
          console.log('packaged info', this.comment);
        });
    }
  }
};
</script>

<style>

</style>
