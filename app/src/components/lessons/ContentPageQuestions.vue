<template>
  <v-row 
    :style="{
      minHeight: '100vh',
      color: lessonPage.textPrimaryColor,
      backgroundImage: isDesktop ? `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${lessonPage.backgroundImage}`)})` : '',
      backgroundPosition: 'right'
    }"
    class="flex-column"
    :id="lessonPage.id"
  >

    <v-spacer>
    </v-spacer>
    <v-col
      cols="12"
      md="4"
      class="pa-5"
    >
      <p class="text-body-1 font-weight-light mt-md-3 mb-md-8" style="color: black">
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
      <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
        {{lessonPage.title}}
      </p>
      <p 
        class="text-body-1 text-md-h6 font-weight-light mb-5 mb-md-10"
      >
        {{lessonPage.text[0]}}
      </p>
      <p 
        class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1"
      >
        {{lessonPage.text[1]}}
      </p>
      <p 
        class="text-body-1 text-md-h6 font-weight-light font-italic mb-6 mb-md-14"
      >
        {{lessonPage.text[2]}}
      </p>
      <p 
        class="text-body-1 text-md-h6 font-weight-light font-italic mb-6 mb-md-14"
      >
        {{lessonPage.text[3]}}
      </p>
      <p 
        class="text-body-1 text-md-h6 font-weight-light font-italic mb-6 mb-md-14"
      >
        {{lessonPage.text[4]}}
      </p>
      <v-container >
        <v-row>
          <v-col cols="4">
            <v-img 
              :src="require(`@/assets/${lessonPage.quoteImg}`)"
              :lazy-src="require(`@/assets/${lessonPage.quoteImg}`)"  
              style="border-radius: 50%; border: 1px solid #9367E6"
              aspect-ratio="1"
              width="100"
            ></v-img>
          </v-col>
          <v-col cols="8" class="text-body-1 font-weight-light">
            <p style="color: black">
              {{lessonPage.quote}}
            </p>
            <p style="color: black">
              - {{lessonPage.quoteAttrib}}
            </p>
          </v-col>
        </v-row>
      </v-container >
    </v-col>
    <v-spacer>
    </v-spacer>
    <v-col cols="12" class="d-flex justify-center pa-0 ">
      <v-icon 
        :size="isDesktop ? 70 : 40"
        @click="$vuetify.goTo(`#${lessonPage.nextPage}`)"
        color="#9367E6"
      >mdi-chevron-down</v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ContentPageQuestions',
  props: {
    isDesktop: Boolean,
    lessonPage: Object
  },
  data() {
    return {};
  }
};
</script>
