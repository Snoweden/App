<template>  
    <header>
        <nav>
            <RouterLink class="link" to="/">Home</RouterLink>
            <RouterLink class="link"  to="/resorts">Resorts</RouterLink>
            <RouterLink class="link" to="/about">About</RouterLink>
            <RouterLink class="link" to="/login">Sign Up/In</RouterLink>
            <a class="link" href="#" @click="onLogout">Logout</a>
        </nav>
    </header>
</template>

<script>

import serverApi from '../services/server-api';

export default {
  methods: {
    onLogout() {
      serverApi.setToken('');
      serverApi.setUser('');
      this.$router.push('/login');
    }
  }
};

</script>

<style>
body {
    color: white;
}

nav {
    display: flex;
    justify-content: center;
    max-width: 100%;
    font-size: 25px;
    background: rgb(224, 225, 226);
    padding: 0px;
}

.link {
    margin: 5px;
    padding: 5px;
    border: 2px solid black;
    border-radius: 5px;
    color: black;
    background: white;
}

.link:visited:hover {
    background: rgb(0, 0, 255);
    color: white;
}

.link:visited {
    color: black;
}
</style>