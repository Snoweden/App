<template>
  <div>
    <StarRating v-model="rating"></StarRating>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  components: {
    StarRating
  }
};
</script>

<style>

</style>