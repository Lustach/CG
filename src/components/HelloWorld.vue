<template>
  <div class="pa-0 main header">
    <div class="container container__header">
      <header class="d-flex justify-end">
        <nav class="nav">
          <div class="nav__link--block">
            <a class="nav__link test nav__link--btn" href="#home">Home</a>
            <a class="nav__link nav__link--btn" href="#order_services">order_services</a>
            <a class="nav__link nav__link--btn" href="#beacon_marketing">beacon_marketing</a>
          </div>
        </nav>
      </header>
      <div class="d-flex main__inner">
        <div class="cloud__container">
          <!--        <span>100 Beacons - 50% off</span>-->
          <!--        <span>1 Beacon   10 $</span>-->
          <!--        <span>50 Beacons - 25% off</span>-->
          <img alt="" class="cloud__action" src="../../public/header-cloud.png">
          <!--        <img src="../../public/Beakon-blue.png" alt="" style="    top: 205px;position: absolute;width: 100%; max-width: 849px;">-->
        </div>
        <div class="content__text mb-4 " style="">
          <h1 class="content__header mb-4">DISCOUNT FOR SERVICES</h1>
          <h2 class="content__subheader mb-4">Our advertisement services cost $10 per beacon per month, and we offer wholesale discounts:</h2>
          <h3 class="content__about mb-4">Free installation of the beacons is also an option, but then their marketing capabilities will be used by third parties also. How to Get Connected To get connected to
            our service or find out more information, please call us at (844)-295-0900 or purchase our service through our site at https://fdh.cloud/order/services</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',

	data: () => ({}),
}
</script>
<style lang="scss">
.main {
  /*&__inner{*/
  /*  position:relative;*/
  /*}*/
}

.header {
  background-image: url("../../public/geometry-bg.png");
  background-size: 100% 785px;
}

header {
  padding-top: 56px;
}

.cloud {
  &__action {
    /*position: absolute;*/
    /*width: 100%;*/
    display: block;
    width: 100%;
    max-width: 570px;
    height: auto;
    /*max-width:60%; max-height: 446px;*/
  }

  &__container {
    /*width: 580px;*/
    /*display: flex;*/
  }
}

.content {
  &__text {
    padding-top: 105px;
    width: 570px;
    height: 479px;
    margin-left: 50px;
  }

  &__header {
    font-family: Lato, b, sans-serif;
    font-weight: 900;
  }

  &__subheader {
    font-family: Lato, b, sans-serif;
  }
  &__about{
    font-family: Lato, sans-serif;
    font-weight: 400;
    line-height: 30px;
    font-size: 18px;
  }
}
</style>
