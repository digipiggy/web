<template>
  <v-row 
    :style="{
      minHeight: '95vh',
      backgroundImage: isDesktop 
        ? `url(${require(`@/assets/${titlePage.backgroundImage}`)})`
        : `url(${require(`@/assets/${titlePage.backgroundImageMobile}`)})`,
      color: titlePage.textPrimaryColor,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
    class="flex-column"
    justify="center"
  >
    <template> 
      <v-col
        cols="12"
        class="mt-9"
      >
        <p class="text-h4 text-md-h3 text-uppercase text-center font-weight-bold mb-0">
          {{titlePage.title}}
        </p>
        <p 
          class="text-uppercase text-center font-weight-bold my-n5 my-md-n9" 
          :style="{
            fontSize: isDesktop ? '140px' : '90px'
          }">
          {{titlePage.subtitle}}
        </p>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col
        cols="12"
      >
        <v-img 
          max-width="200px"
          class="mx-auto"
          style="cursor: pointer;"
          :src="require(`@/assets/lessons/whiteStartCoin.png`)"
          :lazy-src="require(`@/assets/lessons/whiteStartCoin.png`)" 
          @click="$vuetify.goTo('#page1')"
        ></v-img>
      </v-col>
      <v-spacer></v-spacer>
      <v-col
        cols="12"
      >
        <p class="text-h6 text-center ">
          <v-icon size="40" :color="titlePage.textPrimaryColor">mdi-timer</v-icon> {{titlePage.readTime}} mins
        </p>
        <p class="text-h6 text-center">
          <v-icon size="40" :color="titlePage.textPrimaryColor">fab fa-readme</v-icon> {{titlePage.audience}}
        </p>
        <p class="text-h6 text-center">
          <v-icon 
            class="bouncyArrow"
            size="70"
            @click="$vuetify.goTo('#page1')"
            :color="titlePage.textPrimaryColor" 
          >mdi-chevron-down</v-icon>
        </p>
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  props: {
    isDesktop: Boolean,
    titlePage: Object
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
  .bouncyArrow {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: bounce-7;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }
    @keyframes bounce-7 {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-10px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
  }
</style>
