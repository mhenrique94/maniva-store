<template>
  <v-dialog transition="dialog-bottom-transition" v-model="cart.dialog">
    <v-card>
      <v-card-title>Carrinho de compras</v-card-title>
      <v-list>
        <v-list-item v-for="item in cart.cart_items" :key="item.id">
          <div class="item">
            <div>
              <img :src="item.image.image" class="product_thumbnail" />
            </div>
            <div class="item-details">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.brand }}</v-list-item-subtitle>
              <p class="text--disabled">Tamanho: {{ item.size }}</p>
            </div>
            <div class="price-container">
              R${{
                item.price
                  .replace(".", ",")
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
              }}
            </div>
            <v-btn variant="plain" @click="updateCart(item)"
              ><v-icon>mdi-close-circle</v-icon></v-btn
            >
          </div>
          <v-divider class="divider" v-if="cart.cart_items.length > 1" />
        </v-list-item>
      </v-list>
      <div v-if="!cart.cart_items.length" class="nothing-to-show">
        <v-icon>mdi-alert</v-icon>
        <h3>Não temos nada para exibir aqui</h3>
        <p class="text-medium-emphasis">
          O que está esperando para adicionar um dos nossos produtos incríveis?
        </p>
      </div>
      <h3 class="cart_total">
        Total do carrinho: R${{
          cart.cart_total
            .toFixed(2)
            .replace(".", ",")
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        }}
      </h3>
    </v-card>
  </v-dialog>
</template>
<script>
import { useCartStore } from "../../stores/cartStore";
export default {
  name: "CheckoutCart",
  data() {
    return {
      cart: useCartStore(),
    };
  },
  methods: {
    updateCart(item) {
      this.cart.updateCart(item);
    },
  },
};
</script>
<style scoped>
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
.item {
  display: flex;
  gap: 32px;
  align-items: center;
}
.product_thumbnail {
  max-width: 100px;
  max-height: 100px;
}
.price-container {
  width: 100%;
  height: 100%;
  text-align: right;
  font-size: larger;
  font-weight: 600;
}
.cart_total {
  padding: 32px;
  text-align: right;
}
.divider {
  margin: 16px 0;
}
</style>
