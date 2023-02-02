<template>
  <div class="hello">
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
<style scoped></style>
