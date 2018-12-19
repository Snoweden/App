<template>
  <form @submit.prevent="submitStarRating">
    <div @mouseleave="showCurrentRating(0)" style="display:inline-block;">
      <StarRating @current-rating="showCurrentRating" @rating-selected="setCurrentSelectedRating"></StarRating>
      <div style="margin-top:10px;font-weight:bold;">{{currentRating}}</div>
    </div>
    <br />
    <button>Submit</button>
  </form>
</template>

<script>
import StarRating from 'vue-star-rating';
import serverApi from '../../services/server-api';
import userInputApi from '../../services/userInput-api';

export default {
  data() {
    return {
      rating: 'No Rating Selected',
      currentRating: 'No Rating',
      currentSelectedRating: 'No Current Rating',
      boundRating: 3,
      feedback: {
        StarRating: ''
      }
    };
  },
  components: {
    StarRating
  },
  methods: {
    setRating: function(rating) {
      this.rating = "You have Selected: " + rating + " stars";
    },
    showCurrentRating: function(rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
    },
    setCurrentSelectedRating: function(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },
    submitStarRating() {
      this.feedback.profileId = serverApi.getToken();
      this.feedback.resortId = this.$route.params.id;
      userInputApi.addStarRating(this.feedback);
    }
  }
};
</script>

<style>

</style>