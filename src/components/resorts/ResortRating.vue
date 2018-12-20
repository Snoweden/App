<template>
  <form @submit.prevent="submitStarRating">
    <div id="starrating" @mouseleave="showCurrentRating" style="display:inline-block;">
      <StarRating @current-rating="showCurrentRating" @rating-selected="setCurrentSelectedRating"></StarRating>
      <!-- <div style="margin-top:10px;font-weight:bold;">You have selected: {{currentRating}} stars</div> -->
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
      rating: '',
      currentRating: '',
      currentSelectedRating: '',
      boundRating: 3,
      feedback: {
        StarRating: null,
        profileId: '',
        resortId: ''
      }
    };
  },
  components: {
    StarRating
  },
  methods: {
    showCurrentRating: function() {
      this.currentRating = this.rating;
      this.feedback.StarRating = this.rating;
    },
    setCurrentSelectedRating: function(rating) {
      this.currentSelectedRating = rating;
      this.feedback.StarRating = rating;
    },
    submitStarRating() {
      this.feedback.profileId.id = serverApi.getToken();
      this.feedback.resortId = this.$route.params.id;
      userInputApi.addStarRating(this.feedback);
    }
  }
};
</script>

<style>
#starrating {
  margin: 10px;
}
</style>