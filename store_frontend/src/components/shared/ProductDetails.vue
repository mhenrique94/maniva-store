<template>
  <v-dialog
    pa
    transition="dialog-bottom-transition"
    v-model="productStore.details_dialog"
  >
    <v-card>
      <v-card-title
        >Detalhes de {{ productStore.detailed_product.title }}
      </v-card-title>
      <div class="product-wrapper">
        <div class="product-upper-container">
          <div class="plc-image-container">
            <img
              v-for="img in productStore.detailed_product.images"
              :src="img.image"
              :alt="img.name"
              :key="img.name"
            />
          </div>
        </div>
        <div class="product-lower-container">
          <div class="d-flex justify-space-between">
            <div>
              <strong>{{ productStore.detailed_product.brand }}</strong>
            </div>
            <div>
              <strong
                >R${{
                  productStore.detailed_product.price
                    .replace(".", ",")
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                }}</strong
              >
            </div>
          </div>
          <div class="d-flex pa-2">
            <v-btn
              @click="selectSize(size.size)"
              size="x-small"
              variant="text"
              v-for="size in productStore.detailed_product.sizes"
              :key="size.id"
              >{{ size.size }}</v-btn
            >
          </div>
          <p class="d-flex category-area">
            Categorias:
            <span
              v-for="cat in productStore.detailed_product.categories"
              :key="cat.id"
            >
              {{ cat.name }}</span
            >
          </p>
          <div>
            <pre>{{ productStore.detailed_product.description }}</pre>
          </div>
        </div>
      </div>
    </v-card>
    <div class="d-flex btn-area">
      <v-btn @click="updateCart"
        ><v-icon>mdi-cart</v-icon>Adicionar ao carrinho</v-btn
      >
    </div>
  </v-dialog>
</template>
<script>
import { useProductsStore } from "../../stores/productsStore";
import { useCartStore } from "../../stores/cartStore";
export default {
  name: "ProductDetails",
  data() {
    return {
      productStore: useProductsStore(),
      cartStore: useCartStore(),
      size: null,
    };
  },
  methods: {
    selectSize(gotSize) {
      this.size = gotSize;
    },
    updateCart() {
      if (!this.size) {
        this.cartStore.size_modal = true;
        return;
      }
      this.productStore.detailed_product.size = this.size;
      this.productStore.detailed_product.image =
        this.productStore.detailed_product.images[0];
      this.cartStore.updateCart(this.productStore.detailed_product);
    },
  },
};
</script>
<style scoped>
.product-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}
.plc-image-container {
  object-fit: contain;
  overflow-x: scroll;
  display: flex;
}
.plc-image-container > img {
  width: 50%;
}
pre {
  white-space: pre-wrap;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.btn-area {
  width: 100%;
  justify-content: center;
  padding: 16px;
  position: absolute;
  bottom: 0;
  background-color: whitesmoke;
}
.category-area {
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px 0;
}
.category-area > span {
  background-color: whitesmoke;
}
</style>
