<template>
  <div class="banner-container">
    <img
      v-for="(each, idx) of banners"
      :key="idx"
      :src="each.source"
      class="banner-image"
    />
  </div>
</template>
<script>
import banner23 from "@/assets/img/23_banner638114659403714406.webp";
import banner24 from "@/assets/img/24_banner638114660043609846.webp";
import banner25 from "@/assets/img/25_banner638114657226160786.webp";
export default {
  name: "CampaignCarousel",
  data() {
    return {
      banners: [
        {
          text: "Calçados com 30% OFF",
          source: banner23,
        },
        {
          text: "Liquida inverno 2022 com 99% OFF",
          source: banner24,
        },
        {
          text: "Parcelamento sem juros",
          source: banner25,
        },
      ],
    };
  },
};
</script>
<style scoped>
.banner-container {
  height: 100%;
  display: flex;
  margin: 60px auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}
.banner-image {
  width: 30%;
  object-fit: contain;
  height: auto;
  filter: grayscale(1);
}
.banner-image:hover {
  filter: grayscale(0);
  cursor: pointer;
  transition: 500ms;
}
@media only screen and (max-width: 400px) {
  .banner-container {
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
    gap: 16px;
    padding: 0 16px;
  }
  .banner-image {
    width: 200px;
  }
}
</style>
