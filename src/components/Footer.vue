<template>
  <footer class="main__background">
    <div class="container">
      <div class="absolute__img"><img src="../../public/phone.png" alt=""></div>
      <div class="main__container">
<!--        <v-flex>-->
          <div class="d-flex justify-center flex-column align-center">
            <h2 class="footer__header mt-7">SUPPORT:(844) 295-0900</h2>
            <h2 class="footer__subheader mb-9">support@frontdeskhelpers.com</h2>
<!--            <v-row>-->
<!--              <v-col cols="12">-->
            <svg>
              <use xlink:href="public/icons/svgSprites.svg#github" xmlns="http://www.w3.org/2000/svg"></use>
            </svg>
<!--                <img src="public/icons/Facebook%20Icon.svg"/>-->
<!--              </v-col>-->
<!--            </v-row>-->
          </div>
<!--        </v-flex>-->

      </div>
    </div>
  </footer>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style scoped lang="scss">
.main{
  &__background {
    background-image: url("../../public/geometry-bg.png");
    background-size: 100% 785px;
  }
  &__container{

  }
}
.absolute__img{
  bottom: -7px;
  position: absolute;
  left: 0;
}
.footer{
  &__header{
    font-family: Lato, sans-serif;
  }
  &__subheader{
    font-family: Lato, sans-serif;
  }
}
</style>
