<template>
  <div>
    <form @submit.prevent="submitComment" id="user-questions">
      <label>Adult All-Day Ticket Price:
        <input type="number" v-model="feedback.ticketPrice">
      </label>

      <br />
      <br />

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

      <br />
      <br />

      <label>How crowded is the resort?
        <input type="text" v-model="feedback.crowded">
      </label>
      <br />
      <button>Submit</button>
      <br />

    </form>
    <br />
    <form @submit.prevent="submitComment" id="comment">
      <label>Comment:
        <textarea v-model="feedback.comment" rows="4" cols="50" name="comment" placeholder="Enter comment..."></textarea>
      </label>
      <button>Submit</button>
    </form>
  </div>
</template>

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
      this.feedback.profileId = serverApi.getUser().id;
      this.feedback.resortId = this.$route.params.id;
      userInputApi.addComment(this.feedback);
    }
  }
};
</script>

<style>
#comment {
  display: inline-block;
  padding: 10px;
  margin: 10px;
  background: darkblue;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 3px 3px 5px lightblue
}

#user-questions {
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  color: white;
  background: darkblue;
  margin: 20px;
  box-shadow: 3px 3px 5px lightblue;
  border-radius: 5px;
}
</style>