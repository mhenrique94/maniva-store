import { defineStore } from "pinia";
export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart_items: [],
      cart_count: 0,
      dialog: false,
      size_modal: false,
      cart_total: 0,
      has_items: false,
    };
  },
  actions: {
    toggleDialog() {
      this.dialog = this.dialog ? false : true;
    },
    async updateCart(produto) {
      this.cart_total = 0;
      let result = this.cart_items.find(function (item) {
        return item.id === produto.id && item.size === produto.size;
      });
      if (result == undefined) {
        this.cart_items.push(produto);
      } else {
        this.cart_items = this.cart_items.filter(
          (each) => each.id != produto.id
        );
      }
      this.cart_count = this.cart_items.length;
      for (let item of this.cart_items) {
        this.cart_total += parseFloat(item.price);
      }
    },
  },
});
