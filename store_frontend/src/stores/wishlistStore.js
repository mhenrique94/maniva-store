import { defineStore } from "pinia";
import api from "../api/api";
export const useWishlistStore = defineStore("wishlist", {
  state: () => {
    return {
      wishlist_items: [],
      wishlist_count: 0,
      dialog: false,
      has_itens: false,
    };
  },
  actions: {
    toggleDialog() {
      this.dialog = this.dialog ? false : true;
    },
    async updateWishlist(produto) {
      let result = this.wishlist_items.find(function (item) {
        console.log(produto);
        return item.id === produto.id;
      });
      if (result == undefined) {
        this.wishlist_items.push(produto);
      } else {
        this.wishlist_items = this.wishlist_items.filter(
          (each) => each.id != produto.id
        );
      }
      api.updateWishlist(this.wishlist_items);
    },
  },
  getters: {
    getWishlist: async (state) => {
      const response = await api.getWishlist();
      const products = response.data[0]?.products;

      if (products) {
        for (let each of products) {
          state.wishlist_items.push(each);
        }
        state.wishlist_count = state.wishlist_items.length;
      }
    },
  },
});
