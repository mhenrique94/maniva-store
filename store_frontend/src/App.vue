<template>
  <div>
    <NavBar />
    <v-toolbar density="compact">
      <v-list nav class="category-navigation">
        <v-list-item v-for="(item, idx) in nav_items" :key="idx">
          <v-btn class="cn-btn" @click="updateCategory(item.title)">
            {{ item.title }}</v-btn
          >
        </v-list-item>
      </v-list>
    </v-toolbar>
    <WishlistDialog class="modal" />
    <CheckoutCart class="modal" />
    <ProductDetails class="modal" v-if="products.details_dialog" />
    <v-dialog transition="dialog-bottom-transition" v-model="cart.size_modal">
      <v-card>
        <div class="size-modal">
          <v-icon>mdi-alert</v-icon>
          <h3>Selecione o tamanho do produto</h3>
        </div>
      </v-card>
    </v-dialog>
    <router-view
      :dialogStatus="dialogStatus"
      @toggle-dialog="toggleDialog"
    ></router-view>
    <v-divider />
    <FooTer />
  </div>
</template>

<script>
import NavBar from "./components/home/NavBar.vue";
import FooTer from "./components/home/FooTer.vue";
import { useWishlistStore } from "./stores/wishlistStore.js";
import { useProductsStore } from "./stores/productsStore";
import { useCartStore } from "./stores/cartStore";
import WishlistDialog from "./components/shared/WishlistDialog.vue";
import CheckoutCart from "./components/shared/CheckoutCart.vue";
import ProductDetails from "./components/shared/ProductDetails.vue";
export default {
  name: "App",
  components: {
    NavBar,
    WishlistDialog,
    CheckoutCart,
    FooTer,
    ProductDetails,
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
      cart: useCartStore(),
      dialogStatus: false,
      actual_path: {
        fullPath: null,
      },
    };
  },
  mounted() {
    this.wishlist.getWishlist;
    this.products.getProducts;
  },

  methods: {
    updateCategory(category) {
      this.products.loading = true;
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
}
.cn-btn {
  padding: 0 !important;
}
.size-modal {
  padding: 32px;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal {
  max-width: 800px;
}
@media only screen and (max-width: 400px) {
  .category-navigation {
    justify-content: flex-start;
    padding: 0;
  }
}
</style>
