<template>
  <div class="hello">
    <BannerCarousel />
    <div class="gallery-container" v-if="!loading">
      <ProductsGallery
        :title="title"
        :products="products.productsHighlight"
        @order="$emit('order', selectedProduct)"
      />
    </div>
    <div v-if="products.loading" class="loading-progress">
      <v-progress-linear indeterminate color="grey"></v-progress-linear>
      <h3>Carregando produtos incríveis!</h3>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/productsStore";

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
      products: useProductsStore(),
    };
  },
};
</script>
<style scoped>
.loading-progress {
  margin: 80px auto;
}
</style>
