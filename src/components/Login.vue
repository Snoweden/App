<template>
    <section id="login">
        <div v-if="method === 'signin'">
            <form @submit.prevent="onSignIn">
                <h3>Log In:</h3>
                <label>Username:
                    <input v-model="signIn.username" required>
                </label>
                <br />
                <label>Password:
                    <input v-model="signIn.password" type="password" required>
                </label>
                <br />
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
                <br />
                <label>Password:
                    <input v-model="signUp.password" type="password" required>
                </label>
                <br />
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
        .then(profile => {
          serverApi.setUser(profile);
          serverApi.setToken(profile.token);
          this.$router.push('/');
        });
    },
    onSignUp() {
      serverApi.signUp(this.signUp)
        .then(profile => {
          serverApi.setUser(profile);
          serverApi.setToken(profile.token);
          this.$router.push('/');
        });
    }
  }
};
</script>

<style>
    #login {
        color: white;
        background: darkblue;
        display: inline-block;
        padding: 20px;
        border-radius: 10px;
        margin-top: 100px;
        /* box-shadow: 5px 5px 6px black; */
        border: 1px solid gray;
    }
</style>