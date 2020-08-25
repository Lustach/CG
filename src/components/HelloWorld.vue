<template>
  <div class="pa-0 main header" :style="{'height':height}">
    <div class="container container__header">
      <v-btn class="mx-2" color="indigo burger" dark fab>
        <v-icon @click="showMenu" dark>mdi-menu</v-icon>
      </v-btn>
<!--      {{display}}-->
      <header class="header__inner" :style="{'display': display}">
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
          <h1 class="mb-lg-4 mb-md-2 content__header ">DISCOUNT FOR SERVICES</h1>
          <h2 class="mb-lg-4 mb-md-0 content__subheader ">Our advertisement services cost $10 per beacon per month, and we offer wholesale discounts:</h2>
          <h3 class="mb-lg-4 mb-md-2 content__about ">Free installation of the beacons is also an option, but then their marketing capabilities will be used by third parties also.
            How to Get
            Connected To get connected to
            our service or find out more information, please call us at (844)-295-0900 or purchase our service through our site at https://fdh.cloud/order/services</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',

	data: () => ({
    display: 'flex',
    height: '580px'
  }),
	methods: {
		showMenu() {
			if(this.display==='flex'){
				this.display='none'
        this.height='500px'
      }
			else{
				this.display='flex'
        this.height='580px'
      }
      // this.display==='inherit' ? this.display = 'none' : this.display = 'inherit'
		}
	}
}
</script>
<style lang="scss">
.burger {
  display: none !important;
  @media (max-width: 768px) {
    display: block !important;
  }
}

.main {
  &__inner {
    justify-content: center;
  }
}

.header {
  background-image: url("../../public/geometry-bg.png");
  background-size: 100% 785px;
  @media (max-width: 768px) {
    background-size: cover;
    /*height: 100vh;*/
  }

  &__inner {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
      justify-content: center !important;
      padding-top: 0;
    }
  }

  /*@media (max-width:1410px){*/
  /*  background-size: 100% 1850px;*/
  /*}*/
}

header {
  padding-top: 56px;
}

.cloud {
  &__action {
    /*position: absolute;*/
    /*width: 100%;*/
    /*display: block;*/
    width: 100%;
    max-width: 570px;
    height: auto;
    @media (max-width: 1290px) {
      width: auto;
    }
    @media (max-width: 1024px) {
      width: 450px;
    }
    @media (max-width: 900px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      display: none;
    }
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
    @media (max-width: 1600px) {
      padding-top: 60px;
    }
    @media (max-width: 768px) {
      padding-top: 0;
      margin: 0;
    }
    /*@media (max-width:1410px){*/
    /*  padding-top: 30px;*/
    /*}*/
  }

  &__header {
    font-family: Lato, b, sans-serif;
    font-weight: 900;
    @media (max-width: 1220px) {
      font-size: 24px;
    }
    @media (max-width: 768px) {
      font-size: 36px;
      text-align: center;
      margin-bottom: 30px;
    }
    @media (max-width: 425px) {
      font-size: 24px;
      text-align: center;
      margin-bottom: 5px;
    }
  }

  &__subheader {
    font-family: Lato, b, sans-serif;
    @media (max-width: 1220px) {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 24px;
      /*text-align: center;*/
      margin-bottom: 30px;
    }
    @media (max-width: 425px) {
      font-size: 20px;
      /*text-align: center;*/
      margin-bottom: 5px;
    }
  }

  &__about {
    font-family: Lato, sans-serif;
    font-weight: 400;
    line-height: 30px;
    font-size: 18px;
    @media (max-width: 1220px) {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>
