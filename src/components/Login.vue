<template>
    <section>
        <form @submit.prevent="onSignIn">
            <h3>Log In:</h3>
            <label>Username:
                <input v-model="profile.username" required>
            </label>
            <label>Password:
                <input v-model="profile.password" required>
            </label>
            <button>Log In</button>
        </form>
    </section>
</template>

<script>

import serverApi from '../services/server-api';

export default {
  data() {
    return {
      profile: {}
    };
  },
  methods: {
    onSignIn() {
      console.log('login profile', this.profile);
      serverApi.signIn(this.profile)
        .then(user => console.log('returned user', user));
    }
  }
};
</script>

<style>

</style>
