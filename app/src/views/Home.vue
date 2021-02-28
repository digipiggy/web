<template>
  <v-container fluid >
    <v-row justify="center">
      <v-col cols="12" md="10">
        <welcomeCard />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <lessonCard />
      </v-col>
      <v-col cols="12" md="6">
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
