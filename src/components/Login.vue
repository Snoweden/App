<template>
    <section>
        <div v-if="method === 'signin'">
            <form @submit.prevent="onSignIn">
                <h3>Log In:</h3>
                <label>Username:
                    <input v-model="signIn.username" required>
                </label>
                <label>Password:
                    <input v-model="signIn.password" required>
                </label>
                <button>Log In</button>
                <p>
                    Need to register?
                    <button @click="method = 'signup'">Sign Up</button>
                </p>
            </form>
        </div>

        <div v-else>
            <form @submit.prevent="onSignUp">
                <h3>Sign Up:</h3>
                <label>Username:
                    <input v-model="signUp.username" required>
                </label>
                <label>Password:
                    <input v-model="signUp.password" required>
                </label>
                <button>Sign Up</button>
                <p>
                    Already have an account?
                    <button @click="method = 'signin'">Sign In</button>
                </p>
            </form>
        </div>
    </section>
</template>

<script>

import serverApi from '../services/server-api';

export default {
  data() {
    return {
      method: 'signin',
      profile: {
        username: '',
        password: ''
      },  
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
