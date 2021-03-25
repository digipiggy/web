<template>
  <v-card class="elevation-3 pa-5" :min-height="lesson.parentComponent == 'Lessons' ? '100%' : ''">
    <p v-if="lesson.comingSoon" class="text-h6 font-weight-regular" style="color: #9367E6">Coming Soon!</p>
    <p class="text-h6 font-weight-regular">{{lesson.title}}</p>
    <v-img 
      :src="require(`@/assets/${lesson.image}`)" 
      :lazy-src="require(`@/assets/${lesson.imageLazy || lesson.image}`)" 
      :gradient="lesson.comingSoon ? '90deg, rgba(68,68,68,0.48144841269841265) 35%, rgba(68,68,68,0.4973214285714286) 78%' : ''"
      aspect-ratio="1.9"
      transition="none"
      class="mb-4"
    ></v-img>
    <p class="text-caption ">{{lesson.subtitle}}</p>
    <p class="text-body-1 font-weight-light">{{lesson.body}}</p>
    <v-btn 
      color="#48A182" 
      class="white--text"
      :disabled="lesson.disabled" 
      :to="lesson.route"
    >
      Start {{lesson.title}}
      <v-icon right dark>fas fa-book-reader</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'LessonCard',
  props: {
    lesson: Object
  },
  data() {
    return {
      
    };
  }
};
</script>
