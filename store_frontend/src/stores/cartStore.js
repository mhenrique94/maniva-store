import { defineStore } from "pinia";
import api from "../api/api";
export const useCartStore = defineStore("cart", {
  state: () => {
    return { cart_items: [], cart_count: 0 };
  },
  actions: {
    async updateCart(produto) {
      let result = this.cart_items.find(function (item) {
        return item.id === produto.id;
      });
      if (result == undefined) {
        this.cart_items.push(produto);
        api.updateCart(this.cart_items);
      }
    },
  },
  getters: {
    getCart: async (state) => {
      const response = await api.getCart();
      for (var each of response.data.data[0].attributes.products.data) {
        state.cart_items.push(each);
      }
      state.cart_count = state.cart_items.length;
    },
  },
});
