<template>
  <section class="container d-flex justify-center" style="color: black;">
    <div class="container__inner">
      <h1 class="section__header mt-7 mb-7">Choose beacons and fill in the order form?</h1>
      <v-row>
        <div :key="i" class="pa-4" cols="3" v-for="(e,i) in items">
          <v-card
            class="px-5 card d-flex align-center flex-column"
            height="580"
            outlined
            tile
            width="253"
          >
            <h3 class="card__title mt-4 mb-4"> {{e.title}}</h3>
            <!--            {{e.img}}-->
            <div style="height: 140px;">
              <img :src="getImgUrl(e.img)" width="152"/>
            </div>
            <h3 class="card__price mt-7">${{e.price}}</h3>
            <div class="card__about mt-5">{{e.about}}</div>
            <div class="d-flex align-center">
            <div class="d-flex align-center btn my-5">
              <v-btn @click="changeSize('-',i)" small text>
                <v-icon class="mx-2" small>mdi-minus</v-icon>
              </v-btn>
              <span>{{e.size}}</span>
              <v-btn @click="changeSize('+',i)" small text>
                <v-icon class="mx-2" small>mdi-plus</v-icon>
              </v-btn>
            </div>
              <span class="ml-2">шт</span>
            </div>
            <div>
<!--              <a class="nav__link test nav__link&#45;&#45;btn" href="#home">Home</a>-->
              <v-btn rounded class=" btn__success px-15" color="white">Buy now</v-btn>
            </div>
          </v-card>
        </div>
      </v-row>
      <!--      <div class="card">ASENSOR</div>-->
      <!--      <h1 class="section__header mt-7 mb-7">Choose beacons and fill in the order form?</h1>-->
    </div>
  </section>
</template>

<script>
export default {
	name: "SecondSection",
	data: () => ({
		items: [
			{
				title: 'ASENSOR',
				img: 'item-1',
				about: 'ASensor is a BLE beacon with multiple advertising data formats. The BLE is a very low power 2.4G radio that can transmit the beacon information efficiently. The typical beacon battery life is 1.5 year in default settings 3-Axis, 12-bit accelerometer magna aliqua.',
				size: 1,
				price: 15
			},
			{
				title: 'ARM CORTEX - M0',
				img: 'item-2',
				about: 'ARM Cortex - M0 32-bit processor Dialog solution, long battery life Support Bluetooth Smart 4.0 Builtin 1 x CR2450 battery holder Temperature sensor for environment monitoring Configurable by App AprilBeacon',
				size: 1,
				price: 13
			},
			{
				title: 'ESTIMOTE PROXIMITY BEACONS',
				img: 'item-3',
				about: 'Estimote Proximity Beacons lifetime: 2 years range: up to 70 m packets: iBeacon™ or Eddystone™ features: motion & temperature sensor, NFC',
				size: 1,
				price: 25
			},
			{
				title: 'APRILBEACON 227L (150M RANGE)',
				img: 'item-4',
				about: 'Aprilbeacon 227L (150M Range) iBeacon size: 66mm*36mm*22mm Default frequency: 900ms Setting frequency: 100ms or more System: IOS 7.0, Android 4.3 Color: green iBeacon + white case',
				size: 1,
				price: 30
			},
		]
	}),
	methods: {
		getImgUrl(pet) {
			var images = require.context('../assets/', false, /\.png$/)
			return images('./' + pet + ".png")
		},
		changeSize(symbol, e) {
			symbol === '-' && this.items[e].size > 0 ? this.items[e].size-- : e
			symbol === '+' ? this.items[e].size++ : e
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
  &:hover{
    /*background-color: #43cb83 !important;*/
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
    transition: all 0.6s ease;
  }
  &__title {
    height: 50px;
    font-weight: 500;
    font-family: Lato, sans-serif;
    text-align: center;
  }

  &__price {
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-weight: 900;
    color: #515461;
    font-size: 29px;
    margin-bottom: 0;
  }

  &__about {
    text-align: center;
    height: 150px;
    font-family: Lato, sans-serif;
    font-size: 14px;
  }

  .btn {
    border: 1px solid #e6e6e6;
    border-radius: 10px !important;
    &__success{
      box-shadow: none;
      color: black !important;
      border: 2px solid #43cb83 !important;
      &:hover{
        background-color: #43cb83 !important;
        transition: background-color 0.5s ease;
        font-weight: 900;
      }
    }
  }
}
</style>
