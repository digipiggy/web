<template>
    <v-row 
      :style="{
        minHeight: '100vh',
        color: lessonPage.textPrimaryColor,
      }"
      class="flex-column"
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
            <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
              {{lessonPage.title}}
            </p>
            <div class="mb-0 ">
              <p 
                class="text-body-1 text-md-h6 font-weight-light mb-6"
                v-for="paragraph in lessonPage.text"
                :key="paragraph"
              >
                {{paragraph}}
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light" style="color: black">
              {{lessonPage.imageTitle}}
            </p>
            <v-img 
              :src="require(`@/assets/${lessonPage.backgroundImage}`)" 
              :lazy-src="require(`@/assets/${lessonPage.backgroundImage}`)"  
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
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
  name: 'ContentPageTextWithSideImage',
  props: {
    isDesktop: Boolean,
    lessonPage: Object
  },
  data() {
    return {};
  }
};
</script>
