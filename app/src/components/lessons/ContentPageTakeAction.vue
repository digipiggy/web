<template>
  <v-row 
    v-intersect.once="updateLessonStatusCompleted"
    :style="{
      minHeight: '100vh',
      color: lessonPage.textPrimaryColor,
      backgroundImage: isDesktop ? `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${lessonPage.backgroundImage}`)})` : '',
      backgroundPosition: 'right',
      position: 'relative',
    }"
    class="flex-column"
    :id="lessonPage.id"
  >
    <!--Spacers are used to center lesson content-->
    <v-spacer>
    </v-spacer>
    <v-col
      cols="12"
      md="4"
      class="pa-5"
    >
      <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
        <v-icon color="#A0E667" size="30" >{{lessonPage.instructionIcon}}</v-icon>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span
              v-bind="attrs"
              v-on="on"
            > {{lessonPage.instructions}}</span>
          </template>
          <span>{{lessonPage.instructionsTT}}</span>
        </v-tooltip>
      </p>
      <p class="text-h6 text-uppercase">
        {{lessonPage.title}}
      </p>
      <p 
        v-for="(paragraph, i) in lessonPage.text"
        :key="`Para-${i}`"
        class="text-h6 font-weight-light mb-5"
      >
        {{paragraph}}
      </p>
      <v-btn
        :to="lessonPage.ctaLink"
        color="#48A182"
        class="white--text mb-5"
      >
        {{lessonPage.ctaText}}
        <v-icon right dark>{{lessonPage.ctaIcon}}</v-icon>
      </v-btn>
      <v-img 
        v-if="!isDesktop"
        :src="require(`@/assets/${lessonPage.mobileBackgroundImage}`)" 
        :lazy-src="require(`@/assets/${lessonPage.mobileBackgroundImage}`)"  
      ></v-img>
    </v-col>
    <!--Spacers are used to center lesson content and keep arrow at the bottom-->
    <v-spacer>
    </v-spacer>
  </v-row>



  <!-- <v-row 
    :style="{
      minHeight: '100vh',
      color: lessonPage.textPrimaryColor,
    }"
    :id="lessonPage.id"
    align="center"
  >
    <v-col
      cols="12"
      md="6"
      class="pa-5"
    >
      <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
        <v-icon color="#A0E667" size="30" >{{lessonPage.instructionIcon}}</v-icon>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span
              v-bind="attrs"
              v-on="on"
            > {{lessonPage.instructions}}</span>
          </template>
          <span>{{lessonPage.instructionsTT}}</span>
        </v-tooltip>
      </p>
      <p class="text-h6 text-uppercase">
        {{lessonPage.title}}
      </p>
      <p 
        v-for="(paragraph, i) in lessonPage.text"
        :key="`Para-${i}`"
        class="text-h6 font-weight-light mb-5"
      >
        {{paragraph}}
      </p>
      <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
        <v-icon color="#A0E667" size="30" >fas fa-battery-three-quarters</v-icon>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span
              v-bind="attrs"
              v-on="on"
            > Check your kids energy level</span>
          </template>
          <span>Take a break if they need one, we'll be right here when their ready.</span>
        </v-tooltip>
      </p>
      <v-btn
        :to="lessonPage.ctaLink"
        color="#48A182"
        class="white--text"
      >
        {{lessonPage.ctaText}}
        <v-icon right dark>{{lessonPage.ctaIcon}}</v-icon>
      </v-btn>
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="pa-5"
    >
      <v-img 
        :src="require(`@/assets/${lessonPage.backgroundImage}`)"
        :lazy-src="require(`@/assets/${lessonPage.backgroundImage}`)"  
      ></v-img>
    </v-col>
  </v-row> -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ContentPageTakeAction',
  props: {
    isDesktop: Boolean,
    lessonPage: Object
  },
  computed: {
    ...mapState(['device']),
  },
  data() {
    return {};
  },
  methods: {
    updateLessonStatusCompleted(entries) {
      this.$emit('lessonComplete', entries)
    }
  }
};
</script>
