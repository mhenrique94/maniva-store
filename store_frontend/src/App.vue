<template>
  <div>
    <NavBar @wishlist-clicked="toggleDialog" />
    <v-toolbar density="compact">
      <v-list nav class="category-navigation">
        <v-list-item>Combos</v-list-item>
        <v-list-item>Roupas Masculinas</v-list-item>
        <v-list-item>Roupas Femininas</v-list-item>
        <v-list-item>Calçados</v-list-item>
        <v-list-item>Bolsas</v-list-item>
        <v-list-item>Camisetas</v-list-item>
        <v-list-item>Outlet</v-list-item>
      </v-list>
    </v-toolbar>
    <router-view
      :dialogStatus="dialogStatus"
      @toggle-dialog="toggleDialog"
    ></router-view>
  </div>
</template>

<script>
import NavBar from "./components/home/NavBar.vue";
import { useWishlistStore } from "./stores/wishlistStore.js";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      wishlist: useWishlistStore(),
      dialogStatus: false,
    };
  },

  methods: {
    toggleDialog() {
      this.dialogStatus = this.dialogStatus ? false : true;
    },
  },
};
</script>

<style>
* {
  text-decoration: none;
  color: black;
}

a:visited {
  color: black;
}
a:active {
  color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.category-navigation {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 16px;
}
</style>
