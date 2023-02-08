<template>
  <v-container class="gallery-body">
    <h3 v-if="products.length">{{ title }}</h3>
    <div v-if="!products.length" class="nothing-to-show">
      <v-icon>mdi-alert</v-icon>
      <h3>Não temos nada para exibir aqui</h3>
      <p class="text-medium-emphasis">
        Tente procurar por outros termos ou categorias
      </p>
    </div>

    <v-container class="gb-products-container">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :item="item"
        :path="path"
        @order="$emit('order', selectedProduct)"
      />
    </v-container>
  </v-container>
</template>
<script>
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
  margin: 48px auto;
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
</style>
