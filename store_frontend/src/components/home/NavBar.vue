<template>
  <v-toolbar dense color="transparent" class="navbar">
    <router-link to="/" @click="takeMeHome">
      <h1 class="nav-brand">maniva <strong class="bold">store</strong></h1>
    </router-link>

    <v-spacer></v-spacer>
    <div class="searchBox">
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>

    <v-badge
      dot
      color="grey"
      bordered
      offset-x="10"
      offset-y="10"
      :model-value="wishlist.wishlist_count"
      @click="wishlist.toggleDialog"
    >
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-badge>

    <v-badge
      dot
      color="grey"
      bordered
      offset-x="10"
      offset-y="10"
      :model-value="cart.cart_count"
      @click="cart.toggleDialog"
    >
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-badge>
  </v-toolbar>
</template>
<script>
import { useWishlistStore } from "../../stores/wishlistStore";
import { useProductsStore } from "../../stores/productsStore";
import { useCartStore } from "../../stores/cartStore";
export default {
  name: "NavBar",
  data() {
    return {
      wishlist: useWishlistStore(),
      products: useProductsStore(),
      cart: useCartStore(),
      searchText: null,
      searchBoxClosed: true,
    };
  },
  methods: {
    takeMeHome() {
      this.products.category = null;
    },
  },
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
@media only screen and (max-width: 400px) {
  .nav-brand {
    font-size: 18pt;
    padding: 0;
  }
  .navbar {
    padding-left: 32px;
  }
}
</style>
