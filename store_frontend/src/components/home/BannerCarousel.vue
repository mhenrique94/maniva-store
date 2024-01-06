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
import pexels1 from "@/assets/img/pexels1.jpg";
import pexels2 from "@/assets/img/pexels2.jpg";
import pexels3 from "@/assets/img/pexels3.jpg";
import pexels4 from "@/assets/img/pexels4.jpg";
import pexels5 from "@/assets/img/pexels5.jpg";
import pexels6 from "@/assets/img/pexels6.jpg";
export default {
  name: "BannerCarousel",
  data() {
    return {
      slides: [
        {
          text: "Calçados com 30% OFF",
          source: pexels1,
        },
        {
          text: "Liquida inverno 2022 com 99% OFF",
          source: pexels2,
        },
        {
          text: "Parcelamento sem juros",
          source: pexels3,
        },
        {
          text: "Tecidos 100% algodão",
          source: pexels4,
        },
        {
          text: "Outlet com até 95% OFF",
          source: pexels5,
        },
        {
          text: "Conheça nossa coleção verão 2023",
          source: pexels6,
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
