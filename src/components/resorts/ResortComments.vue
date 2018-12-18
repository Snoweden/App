<template>
  <div>
    <form @submit.prevent="submitComment">
      <label>Comment:</label>
      <textarea rows="4" cols="50" name="comment" placeholder="Enter comment..."></textarea>
      <button>Submit</button>
    </form>

    <div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitComment() {
      console.log('comment submitted');
    }
  }
};
</script>

<style>

</style>
