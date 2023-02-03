<template>
  <div class="hello">
    <BannerCarousel />
    <div class="gallery-container" v-if="!loading">
      <ProductsGallery
        :title="title"
        :products="productsHighlight"
        @order="$emit('order', selectedProduct)"
      />
    </div>
    <div v-if="loading" class="loading-progress">
      <v-progress-linear indeterminate color="grey"></v-progress-linear>
      <h3>Carregando produtos incríveis!</h3>
    </div>
  </div>
</template>

<script>
import api from "../api/api";

import BannerCarousel from "../components/home/BannerCarousel.vue";
import ProductsGallery from "../components/shared/ProductsGallery.vue";
export default {
  name: "StoreHome",
  components: {
    BannerCarousel,
    ProductsGallery,
  },
  data() {
    return {
      title: "Últimas novidades",
      productsHighlight: [],
      loading: true,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await api.getProducts().then((result) => result.data);
      for (var each of response) {
        this.productsHighlight.push(each);
      }
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
<style scoped>
.loading-progress {
  margin: 80px auto;
}
</style>
