<template>
  <div @mouseleave="showCurrentRating(0)" style="display:inline-block;">
    <StarRating @current-rating="showCurrentRating" @rating-selected="setCurrentSelectedRating"></StarRating>
    <div style="margin-top:10px;font-weight:bold;">{{currentRating}}</div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  data() {
    return {
      rating: 'No Rating Selected',
      currentRating: 'No Rating',
      currentSelectedRating: 'No Current Rating',
      boundRating: 3,
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
    }
  }
};
</script>

<style>

</style>