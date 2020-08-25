<template>
  <footer class="main__background">
    <div class="container">
      <div class="absolute__img"><img alt="" src="../../public/phone.png"></div>
      <div class="main__container">
        <!--        <v-flex>-->
        <div class="d-flex justify-center flex-column align-center">
          <h2 class="footer__header mt-7">SUPPORT:(844) 295-0900</h2>
          <h2 class="footer__subheader mb-9">support@frontdeskhelpers.com</h2>
          <v-row class="d-flex justify-center icon__container">
            <v-icon class="ml-15 icon__item" color="white" size="57">mdi-facebook</v-icon>

            <v-icon class="ml-15 icon__item" color="white" size="57">mdi-google-plus</v-icon>
            <v-icon class="ml-15 icon__item" color="white" size="57">mdi-youtube</v-icon>
            <v-icon class="ml-15 icon__item" color="white" size="57">mdi-linkedin</v-icon>


          </v-row>
          <div class="footer__contact d-flex mt-7">
            <a class="ml-md-10">Privacy Policy</a>
            <a class="ml-md-10">Terms of Service</a>
            <a class="ml-md-10">Terms of Sales</a>
          </div>
          <div class="footer__copyrights mt-3">© 2017 FDH CLOUD</div>
        </div>
        <!--        </v-flex>-->
      </div>
    </div>
  </footer>
</template>

<script>

export default {
	name: "Footer",
	components: {},
}
</script>

<style lang="scss" scoped>
.icon__item{
  @media (max-width: 768px) {
    margin-left: 5px !important;
  }
}
.main {
  &__background {
    background-image: url("../../public/geometry-bg.png");
    background-size: 100% 785px;
  }

  &__container {

  }
}

.absolute__img {
  bottom: -7px;
  position: absolute;
  left: 0;
  & img {
    @media (max-width: 1544px) {
      width: 80%;
    }
    /*@media (max-width: 1263px) {*/
    /*  width: 70%;*/
    /*}*/
  }
  @media (max-width: 768px) {
    display: none;
  }
}

.footer {
  &__header {
    font-family: Lato, sans-serif;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  &__subheader {
    font-family: Lato, sans-serif;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  &__contact {
    font-family: Lato, sans-serif;
    a {
      color: white;
      text-decoration: none;
    }
    @media (max-width: 768px){
      /*flex-direction: column;*/
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      a{
        margin-right: 10px;
      }
    }
  }
}
</style>
