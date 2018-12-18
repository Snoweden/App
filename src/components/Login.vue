<template>
    <section>
        <form @submit.prevent="onSignIn">
            <h3>Log In:</h3>
            <label>Username:
                <input v-model="signIn.username" required>
            </label>
            <label>Password:
                <input v-model="signIn.password" required>
            </label>
            <button>Log In</button>
        </form>
         <form @submit.prevent="onSignUp">
            <h3>Sign Up:</h3>
            <label>Username:
                <input v-model="signUp.username" required>
            </label>
            <label>Password:
                <input v-model="signUp.password" required>
            </label>
            <button>Sign Up</button>
        </form>
    </section>
</template>

<script>

import serverApi from '../services/server-api';

export default {
  data() {
    return {
      signIn: {},
      signUp: {}
    };
  },
  methods: {
    onSignIn() {
      serverApi.signIn(this.signIn)
        .then(user => console.log('returned user', user));
    },
    onSignUp() {
      serverApi.signUp(this.signUp)
        .then(user => console.log('returned new user', user));
    }
  }
};
</script>

<style>

</style>
