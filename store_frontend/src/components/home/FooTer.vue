<template>
  <div class="footer">
    <div class="ft-store-payments d-flex">
      <div class="ftsp-app-section d-flex">
        <h4>App Maniva</h4>
        <h5>Muitas vantagens, baixe agora!</h5>
        <div class="app-section-container d-flex">
          <img :src="apps_img[0].image" :alt="apps_img[0].alt" />
          <img :src="apps_img[1].image" :alt="apps_img[1].alt" />
        </div>
      </div>
      <div class="ftsp-payments-section d-flex">
        <h4>Formas de pagamento</h4>
        <div class="payments-icons d-flex">
          <img
            v-for="img in payments_methods"
            :src="img.image"
            :alt="img.alt"
            :key="img.alt"
          />
        </div>
      </div>
    </div>
    <div class="ft-institutional">
      <div class="row social-icon-container">
        <a href="#"><v-icon class="social-icons">mdi-facebook</v-icon></a>
        <a href="#"><v-icon class="social-icons">mdi-twitter</v-icon></a>
        <a href="#"><v-icon class="social-icons">mdi-instagram</v-icon></a>
        <a href="#"><v-icon class="social-icons">mdi-youtube</v-icon></a>
      </div>

      <div class="row">
        <ul>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Nossos serviços</a></li>
          <li><a href="#">Políticas de privacidade</a></li>
          <li><a href="#">Termos de uso</a></li>
          <li><a href="#">Institucional</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooTer",
  data() {
    return {
      apps_img: [
        { alt: "google play", image: require("@/assets/img/googlePlay.webp") },
        { alt: "appstore", image: require("@/assets/img/appStore.webp") },
      ],
      payments_methods: [
        { alt: "PNB", image: require("@/assets/img/pnb-card.svg") },
        { alt: "PNB", image: require("@/assets/img/pnb-digital.svg") },
        { alt: "visa", image: require("@/assets/img/visa.svg") },
        { alt: "mastercard", image: require("@/assets/img/mastercard.svg") },
        { alt: "elo", image: require("@/assets/img/elo.svg") },
        {
          alt: "american-express",
          image: require("@/assets/img/american-express.svg"),
        },
        { alt: "pix", image: require("@/assets/img/pix.svg") },
      ],
    };
  },
};
</script>
<style scoped>
.footer {
  width: 100%;
}
.ft-store-payments {
  justify-content: space-around;
  align-items: center;
  padding: 32px 0;
  flex-wrap: wrap;
}
.ftsp-app-section {
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}
.app-section-container {
  gap: 8px;
  flex-wrap: wrap;
}
.ftsp-payments-section {
  flex-direction: column;
  gap: 8px;
}
.payments-icons {
  gap: 8px;
}
.payments-icons > img {
  width: 42px;
  height: 32px;
}
.ft-institutional {
  background: #eeeeee;
  padding: 30px 0px;
  text-align: center;
}
.social-icon-container {
  padding-bottom: 16px;
}

.ft-institutional .row {
  width: 100%;
  margin: 1% 0%;
  color: black;
  font-size: 14pt;
}

.ft-institutional .row a {
  text-decoration: none;
  color: #707070;
  transition: 0.5s;
}

.ft-institutional .row a:hover {
  color: black;
}

.ft-institutional .row ul {
  width: 100%;
}

.ft-institutional .row ul li {
  display: inline-block;
  margin: 0px 30px;
}

.ft-institutional .row a i {
  font-size: 2em;
  margin: 0% 1%;
}
.social-icons {
  color: #707070;
  width: 42px;
}
.social-icons:hover {
  color: black;
}

@media (max-width: 720px) {
  .ft-store-payments {
    gap: 32px;
  }
  .ftsp-app-section > h4 {
    font-size: 16pt;
  }
  .ftsp-app-section > h5 {
    font-size: 14pt;
  }
  .ft-institutional {
    text-align: left;
    padding: 5%;
  }
  .social-icon-container {
    justify-content: space-evenly;
    display: flex;
    padding-bottom: 16px;
  }
  .ft-institutional .row ul li {
    display: block;
    margin: 10px 0px;
    text-align: left;
  }
  .ft-institutional .row a i {
    margin: 0% 3%;
  }
}
</style>
