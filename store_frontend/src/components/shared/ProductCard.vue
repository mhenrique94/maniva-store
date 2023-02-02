<template>
  <v-card class="gbp-container-item">
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
    <v-btn variant="text" block class="ci-buy-btn">Comprar</v-btn>
  </v-card>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["item", "path"],
};
</script>
<style scoped>
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
  border-right-width: 0;
  border-left-width: 0;
  border-radius: 0;
}
</style>
