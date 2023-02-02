<template>
  <v-container class="gallery-body">
    <h3>{{ title }}</h3>

    <v-container class="gb-products-container">
      <v-card
        v-for="item in products"
        :key="item.id"
        class="gbp-container-item"
      >
        <v-btn
          icon="mdi-heart"
          color="white"
          variant="plain"
          class="ci-wishlist-btn"
          size="small"
        ></v-btn>
        <v-carousel
          :show-arrows="false"
          cycle
          class="gbpci-carousel"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(each, i) in item.attributes.images.data"
            :key="i"
            :src="`${path}${each.attributes.url}`"
            cover
            class="gbpci-carousel-item"
          ></v-carousel-item>
        </v-carousel>
        <v-card-title class="gbpc-item-title">{{
          item.attributes.title.toLowerCase()
        }}</v-card-title>
        <v-card-subtitle>{{ item.attributes.brand }}</v-card-subtitle>
        <div class="carousel-item-price-container">
          R$<strong>{{ item.attributes.price }}</strong>
        </div>
        <v-btn variant="plain" class="ci-buy-btn">Comprar</v-btn>
      </v-card>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "ProductsGallery",
  props: ["title", "products"],
  data() {
    return {
      path: null,
    };
  },
  mounted() {
    this.getPath();
  },
  methods: {
    getPath() {
      // todo: bolar um jeito de apontar para um base_url que leva em conta se está ou não em prod
      this.path = "http://localhost:1337";
    },
  },
};
</script>
>
<style scoped>
.gallery-body {
  margin: 48px auto;
  height: 100%;
  border-radius: 8px;
  border: solid 1px #dbdbdb;
  padding: 32px;
}
.gb-products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.gbp-container-item {
  min-width: 220px;
  width: 20%;
  margin: 32px 16px;
  max-width: 300px;
  align-items: center;
  justify-content: center;
}
.gbpc-item-title {
  text-transform: capitalize;
  font-size: 12pt;
}
.gbpci-carousel {
  height: 200px !important;
}
.gbpci-carousel-item > v-img {
  object-fit: cover;
  max-width: 100%;
  max-height: 200px;
}
.carousel-item-price-container {
  display: inline-block;
  background-color: #f2f0f0;
  left: 0;
  top: 0;
  position: absolute;
  padding: 4px 4px 0 4px;
  border-radius: 0 0 6px 0;
  min-width: 100px;
}
.ci-wishlist-btn {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.ci-buy-btn {
  margin: 24px auto;
  /* background-color: #f2f0f0; */
  font-weight: 600;
  border: solid 1px #d1cccc;
}
</style>
