<template>
  <section class=" d-flex justify-center main-background" style="color: black;">
    <div class="container">
      <h1 class="section__header mt-7 mb-5">A couple of steps to make your store popular</h1>
      <div class="step__container mb-8">
        <button @click="test($event)" class="nav__link test nav__link--btn mr-md-11 mr-sm-4" href="#">Step 1</button>
        <button class="nav__link nav__link--btn mr-md-11 mr-sm-4" href="#">Step 2</button>
        <button class="nav__link nav__link--btn mr-md-11 mr-sm-4" href="#">Step 3</button>
      </div>
      <div class="step__text mb-7">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      </div>
      <v-form class="form mb-3" ref="form">
        <v-text-field background-color="#E8E9ED" class="text-field text--black font-weight-bold"
                      filled full-width placeholder="Enter First Name" rounded :rules="rules.firstName"></v-text-field>
        <v-text-field background-color="#E8E9ED" class="text-field text--black font-weight-bold"
                      filled full-width placeholder="Enter Last Name" rounded :rules="rules.lastName"></v-text-field>
        <v-text-field background-color="#E8E9ED" class="text-field text--black font-weight-bold"
                      filled full-width placeholder="Enter Email" rounded type="email" :rules="rules.email"></v-text-field>
      </v-form>
      <div class="d-flex justify-center">
        <a @click="next" class="next__btn nav__link nav__link--active px-15">Next</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	mounted() {
		// console.log(this.$route)
  },
	name: "ThirdSection",
	data: () => ({
		firstName: '',
		lastName: '',
		email: '',
		rules: {
			firstName: [
				v => !!v || 'Не может быть пустым',
			],
			lastName: [
				v => !!v || 'Не может быть пустым',
			],
			email: [
				v => !!v || 'Не может быть пустым',
				v => /.+@.+\..+/.test(v) || 'E-mail должен быть валидным'
			],
		},
	}),
	methods: {
		next() {
			if (this.$refs.form.validate()) {
				alert('Заявка оформлена!')
				this.$refs.form.reset()
      }
		},
		test(e) {
			e.preventDefault()
		}
	}
}
</script>

<style lang="scss" scoped>
.main-background {
  background-image: url("../../public/test.png");
  background-size: 100% 100%;
  position: relative;
}

.img__absolute {
  position: absolute;
  right: 0;
}

.step__container {
  display: flex;
  justify-content: center;
}

.step__text {
  font-family: Lato, sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0 120px;
  @media (max-width: 1024px) {
    margin: 0 50px;
    font-size: 22px;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.form {
  width: 670px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
}

.my-text-style > > > .v-text-field__slot input {
  color: red;
  font-weight: bold;
}

.next__btn {
  z-index: 2;
}
</style>
