<template>
  <v-card class="elevation-3 pa-5">
    <p class="text-h6">{{lesson.title}}</p>
    <v-img 
      :src="require(`@/assets/${lesson.image}`)" 
      aspect-ratio="1.9"
      class="mb-4"
    ></v-img>
    <p>{{lesson.subtitle}}</p>
    <p>{{lesson.body}}</p>
    <v-btn color="#A0E667" dark to="/lessons/lesson/1">
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
