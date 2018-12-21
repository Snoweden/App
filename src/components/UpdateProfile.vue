<template>
        <div>
            <form @submit.prevent="handleSubmit">
            <h3>Update Profile:</h3>
            <label>Username:
                <input v-model="profileToUpdate.username" required>
            </label>
            <br />
            <label>Password:
                <input v-model="profileToUpdate.password" type="password" required>
            </label>
            <br />
            <button>Update Profile</button>
        </form>
    </div>
</template>

<script>
import UserInputApi from '../services/userInput-api';
import ServerApi from '../services/server-api';
export default {
  data() {
    return {
      profileToUpdate: {}
    };
  }, 

  methods: {
    handleSubmit() {
      console.log('method from update fires', this.profileToUpdate);
      this.profileToUpdate.id = ServerApi.getUser().id;
      UserInputApi.updateUser(this.profileToUpdate)
        .then(user => {
          ServerApi.setUser(user);
          ServerApi.setToken(user.token);
        });

    }
  }

};
</script>

<style>

</style>
