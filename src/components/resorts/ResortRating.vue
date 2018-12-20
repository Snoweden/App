<template>
  <form @submit.prevent="submitStarRating">
    <div @mouseleave="showCurrentRating" style="display:inline-block;">
      <StarRating v-model="rated" @click.native="onRated"></StarRating>
      <div style="margin-top:10px;font-weight:bold;">You have selected: {{currentRating}} stars</div>
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
      rated: 0,
      rating: '',
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
      console.log(this.rated);
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

</style>