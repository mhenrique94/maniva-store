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
export default {
  name: "CampaignCarousel",
  data() {
    return {
      banners: [
        {
          text: "Calçados com 30% OFF",
          source: require("@/assets/img/23_banner638114659403714406.webp"),
        },
        {
          text: "Liquida inverno 2022 com 99% OFF",
          source: require("@/assets/img/24_banner638114660043609846.webp"),
        },
        {
          text: "Parcelamento sem juros",
          source: require("@/assets/img/25_banner638114657226160786.webp"),
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
