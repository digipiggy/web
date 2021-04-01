<template>
  <v-row 
    :style="{
      minHeight: '100vh',
      color: lessonPage.textPrimaryColor,
    }"
    :id="lessonPage.id"
    align="center"
  >
    <v-col cols="12" >
      <v-row align="center">
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
            class="text-h6 font-weight-light mb-14"
          >
            {{lessonPage.text[0]}}
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
          <p 
            v-if="!device.status.lessons.lesson1.completed"
            class="text-h6 font-weight-light mb-14"
          >
            Make sure you pick and save a goal with your kid(s) from the Goal Catalog above before moving on to lesson 2.
          </p>
          <v-btn
            to="/lessons/lesson/2"
            color="#48A182"
            class=" white--text"
            :disabled="!device.status.lessons.lesson1.completed"
          >
            Start Lesson 2 - Earning
            <v-icon right dark>arrow_forward</v-icon>
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
      </v-row>  
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ContentPageNextLesson',
  props: {
    isDesktop: Boolean,
    lessonPage: Object
  },
  computed: {
    ...mapState(['device']),
  },
  data() {
    return {};
  }
};
</script>
