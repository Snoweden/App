<template>
  <div id="home">
    <h3 v-if="user">Hello {{user}}</h3>
    <h1>Welcome to
    <br />
    <br />
    <span>SNOWEDEN</span></h1>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore minus at repellat animi voluptas amet? Ipsa cumque fugiat magnam illo error nihil dolorem, ea minus laborum molestiae accusamus adipisci?
    </p>
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
  background:-webkit-linear-gradient(left, rgb(0, 0, 255), rgb(102, 143, 232));
}

#home {
  color: white;
}

span {
  border: 5px outset gray;
}

p {
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
}

h3 {
  font-size: 2em;
}
</style>
