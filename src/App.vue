<template>
  <v-app class="main-container">
    <v-main>
      <HelloWorld/>
      <SecondSection/>
      <ThirdSection/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import SecondSection from "./components/SecondSection"
export default {
  name: 'App',

  components: {
    HelloWorld,
    SecondSection,
    ThirdSection: () => import ('./components/ThirdSection.vue'),
    Footer: ()=>import('./components/Footer.vue')
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
/*.main-container{*/
/*  max-width: 1600px !important;*/
/*}*/
</style>
