<template>
  <v-card class="gbp-container-item">
    <v-btn
      variant="plain"
      class="ci-wishlist-btn"
      size="small"
      @click="updateWishlist(item)"
    >
      <v-icon plain :color="item.active ? 'red' : 'black'"
        >mdi-heart</v-icon
      ></v-btn
    >
    <v-carousel
      :show-arrows="false"
      cycle
      class="gbpci-carousel"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(each, i) in item.images"
        :key="i"
        :src="`${each.image}`"
        cover
        class="gbpci-carousel-item"
      ></v-carousel-item>
    </v-carousel>
    <v-card-title class="gbpc-item-title">{{
      item.title.toLowerCase()
    }}</v-card-title>
    <v-card-subtitle>{{ item.brand }}</v-card-subtitle>
    <div class="carousel-item-price-container">
      R$<strong>{{ item.price }}</strong>
    </div>
    <div class="carousel-item-sizes-container">
      <div class="cisc-labels">Tamanhos</div>
      <div>
        <v-btn-toggle class="size-btn-group" borderless mandatory>
          <v-btn
            class="cisc-labels size-btn"
            size="x-small"
            flat
            density="compact"
            v-for="(each, i) of item.sizes"
            :key="i"
            @click="selectSize(each.size)"
            >{{ each.size }}</v-btn
          >
        </v-btn-toggle>
      </div>
    </div>
    <v-btn
      variant="text"
      block
      class="ci-buy-btn"
      @click="$emit('order', selectedProduct)"
      >Comprar</v-btn
    >
  </v-card>
</template>
<script>
import { useWishlistStore } from "../../stores/wishlistStore";
export default {
  name: "ProductCard",
  props: ["item", "path"],
  data() {
    return {
      selectedProduct: {
        id: this.item.id,
        size: null,
      },
      wishlist: useWishlistStore(),
    };
  },
  methods: {
    selectSize(gotSize) {
      this.selectedProduct.size = gotSize;
    },
    updateWishlist(item) {
      item.active ? (item.active = false) : (item.active = true);
      this.wishlist.updateWishlist(item);
    },
  },
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
.carousel-item-sizes-container {
  display: flex;
  flex-direction: column;
  font-size: small;
  margin: 16px auto;
  gap: 0;
}
.cisc-labels {
  color: #3c3939;
}
.size-btn-group {
  height: auto;
}
.cisc-size-btn {
  height: 32px;
}
.ci-buy-btn {
  margin: 24px auto;
  /* background-color: #f2f0f0; */
  font-weight: 600;
  border: solid 1px #f0f0f0;
  border-right-width: 0;
  border-left-width: 0;
  border-radius: 0;
}
</style>
