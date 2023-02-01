<template>
  <v-toolbar dense color="transparent">
    <router-link to="/">
      <h1 class="nav-brand">maniva <strong class="bold">store</strong></h1>
    </router-link>

    <v-spacer></v-spacer>
    <div class="searchBox">
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <router-link to="/checkout">
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </router-link>
  </v-toolbar>
</template>
<script>
export default {
  name: "NavBar",
  data: () => ({
    searchText: null,
    searchBoxClosed: true,
  }),
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap");
.nav-brand {
  padding-left: 60px;
  font-family: "Source Sans Pro", sans-serif;
}
.bold {
  font-weight: 400;
}
</style>
