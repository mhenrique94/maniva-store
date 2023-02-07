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
      const product_response = await api.getProducts().then((result) => result);
      for (let each of product_response) {
        this.productsHighlight.push(each);
      }
      this.loading = false;
    },
  },
});
