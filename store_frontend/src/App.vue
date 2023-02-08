<template>
  <div>
    <NavBar @wishlist-clicked="toggleDialog" />
    <v-toolbar density="compact">
      <v-list nav class="category-navigation">
        <v-list-item v-for="(item, idx) in nav_items" :key="idx">
          <v-btn @click="updateCategory(item.title)"> {{ item.title }}</v-btn>
        </v-list-item>
      </v-list>
    </v-toolbar>
    <WishlistDialog />
    <router-view
      :dialogStatus="dialogStatus"
      @toggle-dialog="toggleDialog"
    ></router-view>
  </div>
</template>

<script>
import NavBar from "./components/home/NavBar.vue";
import { useWishlistStore } from "./stores/wishlistStore.js";
import { useProductsStore } from "./stores/productsStore";
import WishlistDialog from "./components/shared/WishlistDialog.vue";
export default {
  name: "App",
  components: {
    NavBar,
    WishlistDialog,
  },
  data() {
    return {
      nav_items: [
        { title: "Tudo" },
        { title: "Outlet" },
        { title: "Combos" },
        { title: "Roupas Masculinas" },
        { title: "Roupas Femininas" },
        { title: "Calçados" },
        { title: "Bolsas" },
        { title: "Camisetas" },
      ],
      wishlist: useWishlistStore(),
      products: useProductsStore(),
      dialogStatus: false,
    };
  },
  mounted() {
    this.wishlist.getWishlist;
    this.products.getProducts;
  },

  methods: {
    updateCategory(category) {
      this.products.category = category;
    },
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
.active {
  background: black;
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
