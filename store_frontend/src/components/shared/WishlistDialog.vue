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
      <div v-if="!wishlist.wishlist_items.length" class="nothing-to-show">
        <v-icon>mdi-alert</v-icon>
        <h3>Não temos nada para exibir aqui</h3>
        <p class="text-medium-emphasis">
          O que está esperando para adicionar um dos nossos produtos incríveis?
        </p>
      </div>
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
.nothing-to-show {
  background-color: whitesmoke;
  max-width: 400px;
  margin: 32px auto;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
