import { defineStore } from "pinia";
import api from "../api/api";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      productsHighlight: [],
      loading: null,
      category: null,
      detailed_product: {},
      details_dialog: false,
    };
  },
  getters: {
    async getProducts() {
      const product_response = await api
        .getProducts(this.category)
        .then((result) => result);
      this.productsHighlight = [];
      for (let each of product_response) {
        each.active = false;
        this.productsHighlight.push(each);
      }
      setTimeout((this.loading = false), 5000);
    },
  },
});
