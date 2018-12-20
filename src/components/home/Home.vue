<template>
  <div>
    <h1>Welcome to Snoweden!</h1>

    <h3 v-if="user">Hello {{user}}</h3>
  </div>
</template>

<script>


import serverApi from '../../services/server-api';

export default {
  data() {
    return {
      user: ''
    };
  },
  created() {
    this.user = serverApi.getUser().username;
  }
};
</script>

<style>
  body {
        background: rgb(102, 143, 232);
    }

</style>
