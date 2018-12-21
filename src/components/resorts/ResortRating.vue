<template>
  <form id="starrating" @submit.prevent="submitStarRating">
    <div @mouseleave="showCurrentRating" style="display:inline-block;">
      <StarRating v-model="rating.star" @click.native="onRated"></StarRating>
    </div>
  </form>
</template>

<script>
import StarRating from 'vue-star-rating';
import serverApi from '../../services/server-api';
import userInputApi from '../../services/userInput-api';

export default {
  data() {
    return {
      rating: {},
      currentRating: '',
      currentSelectedRating: 0,
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
    onRated: function() {
      this.rating.resortId = this.$route.params.id;
      this.rating.profileId = serverApi.getUser().id;
      console.log(this.rating);
      userInputApi.addStarRating(this.rating);
    },
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