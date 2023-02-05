<template>
  <v-dialog transition="dialog-bottom-transition" v-model="dialog">
    <v-card>
      <v-card-title>Lista de desejos</v-card-title>
      <v-list>
        <v-list-item v-for="item in wishlist.wishlist_items" :key="item.id">
          <v-list-item-content class="item">
            <div class="item-details">
              <v-list-item-title>{{ item.attributes.title }}</v-list-item-title>
              <v-list-item-subtitle>{{
                item.attributes.brand
              }}</v-list-item-subtitle>
            </div>
            <div class="item-action">
              <div>R${{ item.attributes.price }}</div>
              <v-btn>COMPRAR</v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>
<script>
import { useWishlistStore } from "../../stores/wishlistStore";
export default {
  name: "WishlistDialog",
  data() {
    return {
      wishlist: useWishlistStore(),
      dialog: false,
    };
  },
  watch: {
    dialogStatus() {
      this.dialog = this.dialogStatus;
    },
    dialog() {
      this.$emit("toggle-dialog");
    },
  },
};
</script>
<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}
.item-details {
  width: 70%;
}
.item-action {
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
}
</style>
