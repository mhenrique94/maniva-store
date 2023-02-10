<template>
  <div>
    <v-carousel
      class="carousel"
      height="400"
      hide-delimiter-background
      :show-arrows="false"
      cycle
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <div class="d-flex justify-center align-center banner-content">
            <div class="text-h2 banner-text">{{ slide.text }}</div>
          </div>
          <v-img cover :src="slide.source" />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "BannerCarousel",
  data() {
    return {
      slides: [
        {
          text: "Calçados com 30% OFF",
          source: require("@/assets/img/pexels1.jpg"),
        },
        {
          text: "Liquida inverno 2022 com 99% OFF",
          source: require("@/assets/img/pexels2.jpg"),
        },
        {
          text: "Parcelamento sem juros",
          source: require("@/assets/img/pexels3.jpg"),
        },
        {
          text: "Tecidos 100% algodão",
          source: require("@/assets/img/pexels4.jpg"),
        },
        {
          text: "Outlet com até 95% OFF",
          source: require("@/assets/img/pexels5.jpg"),
        },
        {
          text: "Conheça nossa coleção verão 2023",
          source: require("@/assets/img/pexels6.jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.banner-content {
  width: 100%;
  height: 100%;
  position: absolute;
}
.banner-text {
  z-index: 1;
  background-color: white;
  padding: 0 16px;
}

@media only screen and (max-width: 400px) {
  .banner-text {
    font-size: 20px !important;
    padding: 0 8px;
  }
  .banner-content {
    align-items: center;
  }
}
</style>
