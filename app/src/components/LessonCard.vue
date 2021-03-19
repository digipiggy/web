<template>
  <v-card class="elevation-3 pa-5">
    <p v-if="lesson.comingSoon" class="text-h6 font-weight-regular" style="color: #9367E6">Coming Soon!</p>
    <p class="text-h6 font-weight-regular">{{lesson.title}}</p>
    <v-img 
      :src="require(`@/assets/${lesson.image}`)" 
      aspect-ratio="1.9"
      class="mb-4"
    ></v-img>
    <p class="text-caption ">{{lesson.subtitle}}</p>
    <p class="text-body-1 font-weight-light">{{lesson.body}}</p>
    <v-btn 
      color="#48A182" 
      class="white--text"
      :disabled="lesson.comingSoon" 
      :to="lesson.route"
    >
      Start {{lesson.title}}
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
