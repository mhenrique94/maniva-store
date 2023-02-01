<template>
  <div class="hello">
    <v-toolbar density="compact">
      <v-list nav class="category-navigation">
        <v-list-item>Combos</v-list-item>
        <v-list-item>Roupas Masculinas</v-list-item>
        <v-list-item>Roupas Femininas</v-list-item>
        <v-list-item>Calçados</v-list-item>
        <v-list-item>Bolsas</v-list-item>
        <v-list-item>Camisetas</v-list-item>
        <v-list-item>Outlet</v-list-item>
      </v-list>
    </v-toolbar>
    <BannerCarousel />
  </div>
</template>

<script>
import BannerCarousel from "../components/home/BannerCarousel.vue";
export default {
  name: "StoreHome",
  components: {
    BannerCarousel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category-navigation {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 16px;
}
</style>
