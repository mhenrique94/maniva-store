import { defineStore } from "pinia";
import api from "../api/api";
export const useWishlistStore = defineStore("wishlist", {
  state: () => {
    return { wishlist_items: [], wishlist_count: 0, dialog: false };
  },
  actions: {
    toggleDialog() {
      this.dialog = this.dialog ? false : true;
    },
    async updateWishlist(produto) {
      let result = this.wishlist_items.find(function (item) {
        return item.id === produto.id;
      });
      if (result == undefined) {
        this.wishlist_items.push(produto);
        api.updateWishlist(this.wishlist_items);
      }
    },
  },
  getters: {
    getWishlist: async (state) => {
      const response = await api.getWishlist();
      for (var each of response.data.data[0].attributes.products.data) {
        state.wishlist_items.push(each);
      }
      state.wishlist_count = state.wishlist_items.length;
    },
  },
});
