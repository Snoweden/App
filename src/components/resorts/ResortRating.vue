<template>
    <div @mouseleave="showCurrentRating" style="display:inline-block;">
      <StarRating v-model="rating.star" @click.native="onRated"></StarRating>
    </div>
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
    };
  },
  components: {
    StarRating
  },
  methods: {
    onRated: function() {
      this.rating.resortId = this.$route.params.id;
      this.rating.profileId = serverApi.getUser().id;
      userInputApi.addStarRating(this.rating);
    },
    showCurrentRating: function() {
      this.currentRating = this.rating;
    }
  }
};
</script>

<style>
#starrating {
  margin: 10px;
}
</style>