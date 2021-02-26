<template>
  <v-card class="elevation-3 pa-5">
    <p class="text-h5">Piggles Family Lessons</p>
    <v-img 
      :src="require('@/assets/rex&Penny.jpg')" 
      aspect-ratio="1.9"
      class="mb-4"
    ></v-img>
    <p>Lesson One - Goals</p>
    <p>Set your goals with help from the piggles family.</p>
    <v-btn color="#A0E667" dark>
      Start Lesson
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'LessonCard',
  data() {
    return {
      
    };
  }
};
</script>
