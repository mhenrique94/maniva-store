import { defineStore } from "pinia";
import api from "../api/api";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      productsHighlight: [],
      loading: true,
    };
  },
  getters: {
    async getProducts() {
      const response = await api.getProducts().then((result) => result);
      for (var each of response) {
        this.productsHighlight.push(each);
      }
      this.loading = false;
    },
  },
});
