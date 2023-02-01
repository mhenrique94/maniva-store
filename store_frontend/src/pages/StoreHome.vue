<template>
  <div class="hello">
    <h1>STORE HOME!!!</h1>
    <router-link to="/checkout">Checkout</router-link> ::
    <router-link to="/about">About</router-link>
    <router-link to="/">Home</router-link> ::
    <router-link to="/api/places">Place API</router-link> ::
  </div>
</template>

<script>
export default {
  name: "StoreHome",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
