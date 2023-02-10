<template>
  <div>
    <div v-if="!product_states.category" class="blank-container"></div>
    <v-container class="gallery-body">
      <div v-if="product_states.loading" class="loading-progress">
        <v-progress-linear indeterminate color="grey"></v-progress-linear>
        <h3>Carregando produtos incríveis!</h3>
      </div>
      <div>
        <h3 v-if="products.length && !product_states.loading">{{ title }}</h3>
        <div
          v-if="!products.length && !product_states.loading"
          class="nothing-to-show"
        >
          <v-icon>mdi-alert</v-icon>
          <h3>Não temos nada para exibir aqui</h3>
          <p class="text-medium-emphasis">
            Tente procurar por outros termos ou categorias
          </p>
        </div>
      </div>

      <v-container class="gb-products-container" v-if="!product_states.loading">
        <ProductCard
          v-for="item in products"
          :key="item.id"
          :item="item"
          :path="path"
          @order="$emit('order', selectedProduct)"
        />
      </v-container>
    </v-container>
  </div>
</template>
<script>
import { useProductsStore } from "../../stores/productsStore";
import ProductCard from "./ProductCard.vue";
export default {
  name: "ProductsGallery",
  props: ["title", "products"],
  components: {
    ProductCard,
  },
  data() {
    return {
      path: null,
      product_states: useProductsStore(),
    };
  },
  mounted() {
    this.getPath();
  },
  methods: {
    getPath() {
      // todo: bolar um jeito de apontar para um base_url que leva em conta se está ou não em prod
      this.path = "./";
    },
  },
};
</script>
>
<style scoped>
.gallery-body {
  margin: auto;
  height: 100%;
  border-radius: 8px;
  border: solid 1px #dbdbdb;
  padding: 32px;
  max-width: 1280px;
}
.gb-products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.nothing-to-show {
  background-color: whitesmoke;
  max-width: 400px;
  margin: 32px auto;
  border-radius: 8px;
  padding: 32px;
}
.loading-progress {
  margin: 80px auto;
}
.blank-container {
  background-color: aqua;
  margin: 48px auto;
}
@media only screen and (max-width: 400px) {
  .gb-products-container {
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
  }
  .gallery-body {
    border: none;
    padding: 0;
  }
}
</style>
