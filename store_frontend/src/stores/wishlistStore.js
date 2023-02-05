import { defineStore } from "pinia";
import api from "../api/api";
export const useWishlistStore = defineStore("wishlist", {
  state: () => {
    return { wishlist_items: [], wishlist_count: 0 };
  },
  actions: {
    increment(value = 1) {
      this.count += value;
    },
  },
  getters: {
    getWishlist: async (state) => {
      const response = await api.getWishlist();
      for (var each of response.data.data[0].attributes.products.data) {
        state.wishlist_items.push(each);
      }
      state.wishlist_count = state.wishlist_items.length;
      return state;
    },
  },
});
