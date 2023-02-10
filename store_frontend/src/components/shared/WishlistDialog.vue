<template>
  <v-dialog transition="dialog-bottom-transition" v-model="wishlist.dialog">
    <v-card>
      <v-card-title>Lista de desejos</v-card-title>
      <v-list>
        <v-list-item v-for="item in wishlist.wishlist_items" :key="item.id">
          <div class="item">
            <div class="item-details">
              <v-list-item-title
                ><strong>{{ item.title }}</strong></v-list-item-title
              >
              <v-list-item-subtitle>{{ item.brand }}</v-list-item-subtitle>
            </div>
            <div class="item-action">
              <div>
                R${{
                  item.price
                    .replace(".", ",")
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                }}
              </div>
              <v-btn @click="updateCart(item)">COMPRAR</v-btn>
            </div>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>
<script>
import { useWishlistStore } from "../../stores/wishlistStore";
import { useCartStore } from "../../stores/cartStore";

export default {
  name: "WishlistDialog",
  data() {
    return {
      wishlist: useWishlistStore(),
      cartStore: useCartStore(),
    };
  },
  methods: {
    updateCart(selectedProduct) {
      if (!this.selectedProduct.size) {
        return;
      }
      this.cartStore.updateCart(selectedProduct);
    },
  },
};
</script>
<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}
.item-details {
  width: 70%;
}
.item-action {
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
}
</style>
