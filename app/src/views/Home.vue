<template>
  <v-container fluid >
    <v-row justify="center">
      <v-col cols="10" offset="1">
        <welcomeCard />
      </v-col>
    </v-row>
    <v-row  justify="center">
      <v-col cols="10" offset="1" md="4" offset-md="1" >
        <lessonCard />
      </v-col>
      <v-col cols="10" offset="1" md="6" offset-md="0">
        <digiStatusCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LessonCard from '@/components/LessonCard';
import WelcomeCard from '@/components/WelcomeCard';
import DigiStatusCard from '@/components/DigiStatusCard';

export default {
  components: {
    lessonCard: LessonCard,
    welcomeCard: WelcomeCard,
    digiStatusCard: DigiStatusCard
  },
};
</script>
