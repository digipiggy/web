<template>
  <v-container fluid >
    <v-row align-center justify="center">
      <v-col cols="11" md="10">
        <lessonStatusIndicator />
      </v-col>
    </v-row>
    <v-row align-center justify="center">
      <v-col 
        cols="11" 
        md="5" 
        v-for="n in 4"
        :key="n"
      >
        <lessonCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LessonStatusIndicator from '@/components/LessonStatusIndicator';
import LessonCard from '@/components/LessonCard';

export default {
  components: {
    lessonStatusIndicator: LessonStatusIndicator,
    lessonCard: LessonCard,
  },

};
</script>
