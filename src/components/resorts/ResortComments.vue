<template>
  <div>
    <form @submit.prevent="submitComment">
      <label>Comment:
        <textarea v-model="feedback.comment" rows="4" cols="50" name="comment" placeholder="Enter comment..."></textarea>
      </label>
      <button>Submit</button>
    </form>

    <form @submit.prevent="submitComment">
      <label>Adult All-Day Ticket Price:
        <input type="number" v-model="feedback.ticketPrice">
      </label>

      <label>Who Are You?
        <select v-model="feedback.who">
          <option disabled value="">Please select one</option>
          <option value="skier">Skier</option>
          <option value="snowboarder">Snowboarder</option>
          <option value="cocoa">Cocoa Drinker</option>
          <option value="sledder">Sledder</option>
          <option value="md">Mischievous Deliquent</option>
        </select>
      </label>

      <label>How crowded is the resort?
        <input type="number" v-model="feedback.crowded">
      </label>

      <button>Submit</button>
    </form>
  </div>
</template>

<!-- ////////////////////
API receives text from box
//////////////////// -->

<script>
import userInputApi from '../../services/userInput-api';
import serverApi from '../../services/server-api';

export default {
  data() {
    return {
      feedback: {}
    };
  },
  methods: {
    submitComment() {
      this.feedback.profileId = serverApi.getToken();
      this.feedback.resortId = this.$route.params.id;
      userInputApi.addComment(this.feedback);
    }
  }
};
</script>

<style>

</style>