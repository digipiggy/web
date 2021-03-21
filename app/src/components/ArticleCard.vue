<template>
  <v-card class="elevation-3 pa-5">
    <p class="text-h6 font-weight-regular">Manage the meltdown - 5 Easy Tips</p>
    <v-img 
      :src="require('@/assets/fatherDaughter.png')" 
      aspect-ratio="1.9"
      class="mb-4"
    ></v-img>
    <p class="text-caption">Published 1/19/21 </p>
    <p class="text-body-1 font-weight-light">We've all been there: you're in the toy isle at target, and the latest Paw Patrol plushy catches your daughters eye. Unfortunatley for her, she's... </p>
    <v-btn color="#48A182" dark to="/articles">
      Continue Reading
      <v-icon right dark>arrow_forward</v-icon>
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
