<template>
  <section class=" d-flex justify-center main-background" style="color: black;">
    <div class="container">
      <h1 class="section__header mt-7 mb-5">A couple of steps to make your store popular</h1>
      <div class="step__container mb-8">
        <a class="nav__link test nav__link--btn mr-11" href="#home">Step 1</a>
        <a class="nav__link nav__link--btn mr-11" href="#order_services">Step 2</a>
        <a class="nav__link nav__link--btn mr-11" href="#beacon_marketing">Step 3</a>
      </div>
      <div class="step__text mb-7">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      </div>
      <v-form class="form mb-3">
        <v-text-field background-color="#E8E9ED" class="text-field text--black font-weight-bold" filled rounded placeholder="Enter First Name"></v-text-field>
        <v-text-field background-color="#E8E9ED" class="text-field text--black font-weight-bold" filled rounded placeholder="Enter Last Name"></v-text-field>
        <v-text-field background-color="#E8E9ED" class="text-field text--black font-weight-bold" filled rounded placeholder="Enter Email" type="email"></v-text-field>
      </v-form>
      <div class="d-flex justify-center">
        <a @click="next" class=" nav__link test nav__link--active px-15">Next</a>
      </div>
    </div>
    <!--    <div>-->
    <!--      <img src="../../public/wall-beacon.png" alt="" class="img__absolute">-->
    <!--    </div>-->
  </section>
</template>

<script>
export default {
	name: "ThirdSection",
  methods:{
		next(){
			console.log('lol')
    }
  }
}
</script>

<style scoped lang="scss">
.main-background {
  background-image: url("../../public/test.png");
  width: 100%;
  background-size: 100%;
  height: 700px;
  position: relative;
}

.img__absolute {
  position: absolute;
  right: 0;
  /*top: -28px;*/
  /*width: 490px;*/
  /*object-fit: cover;*/
}

.step__container {
  display: flex;
  justify-content: center;
}
.step__text{
  font-size: 24px;
  font-weight: 700;
  margin: 0 120px;
  /*max-width: 950px;*/
  /*display: flex;*/
}
.form{
  width: 670px;
  margin: 0 auto;
}
.my-text-style >>> .v-text-field__slot input {
  color: red;
  font-weight: bold;
}
/*.theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover {*/
/*  border-width: 1px !important;*/
/*  border-style: solid !important;*/
/*  border-color: red !important;*/
/*}*/
</style>
