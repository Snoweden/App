<template>
  <div>
    <h1>Welcome to Snoweden!</h1>

    <h3>Hello {{user}}</h3>
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
    this.user = serverApi.getToken().username;
  }
};
</script>

<style>

</style>
