<template>
  <v-dialog transition="dialog-bottom-transition" v-model="cart.dialog">
    <v-card>
      <v-card-title>Carrinho de compras</v-card-title>
      <v-list>
        <v-list-item v-for="item in cart.cart_items" :key="item.id">
          <v-list-item-content class="item">
            <div class="item-details">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.brand }}</v-list-item-subtitle>
            </div>
            <div class="item-action">
              <div>R${{ item.price }}</div>
              <v-btn>COMPRAR</v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div v-if="!cart.cart_items.length" class="nothing-to-show">
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
import { useCartStore } from "../../stores/cartStore";
export default {
  name: "CheckoutCart",
  data() {
    return {
      cart: useCartStore(),
    };
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
</style>
