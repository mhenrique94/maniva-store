<template>
  <div class="hello">
    <BannerCarousel />
    <div class="gallery-container" v-if="!loading">
      <ProductsGallery :title="title" :products="productsHighlight" />
    </div>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="cyan"
    ></v-progress-linear>
  </div>
</template>

<script>
import api from "../api/api";

import BannerCarousel from "../components/home/BannerCarousel.vue";
import ProductsGallery from "../components/home/ProductsGallery.vue";
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
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      api
        .get(
          "/products?pagination[start]=0&pagination[limit]=9&populate=images"
        )
        .then((res) => {
          for (var each of res.data.data) {
            this.productsHighlight.push(each);
          }
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.gallery-container {
  /* height: 40vh; */
}
</style>
