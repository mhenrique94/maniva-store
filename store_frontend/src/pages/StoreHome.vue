<template>
  <div>
    <div class="hello">
      <BannerCarousel v-if="!products.category" />

      <div class="gallery-container">
        <ProductsGallery
          :title="title"
          :products="products.productsHighlight"
          @order="$emit('order', selectedProduct)"
        />
      </div>
    </div>
    <CampaignCarousel class="campaign-carousel" v-if="!products.loading" />
  </div>
</template>

<script>
import { useProductsStore } from "../stores/productsStore";

import BannerCarousel from "../components/home/BannerCarousel.vue";
import CampaignCarousel from "../components/home/CampaignCarousel.vue";
import ProductsGallery from "../components/shared/ProductsGallery.vue";

export default {
  name: "StoreHome",
  components: {
    BannerCarousel,
    ProductsGallery,
    CampaignCarousel,
  },
  created() {
    this.products.category = null;
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
.campaign-carousel {
  max-height: 300px;
}
</style>
