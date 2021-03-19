<template>
  <v-container fluid >
    <v-row justify="center">
      <v-col cols="12" md="10">
        <welcomeCard />
      </v-col>
    </v-row>
    <v-row v-if="device.status.completedPreferences" justify="center">
      <v-col cols="12" md="4" :order="isDesktop ? 1 : 2">
        <lessonCard 
          :lesson="lesson"
        />
        <div class="mb-6"></div>
        <articleCard />
      </v-col>
      <v-col cols="12" md="6" :order="isDesktop ? 2 : 1">
        <digiStatusCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

import LessonCard from '@/components/LessonCard';
import ArticleCard from '@/components/ArticleCard';
import WelcomeCard from '@/components/WelcomeCard';
import DigiStatusCard from '@/components/DigiStatusCard';

const lesson = {
  title: "Lesson 1",
  image: "kitchenEnter.jpg",
  subtitle: "Let's talk about Goals",
  body: "Set your goals with help from the piggles family.",
  route: "/lessons/lesson/1"
}

export default {
  name: "Home",
  components: {
    lessonCard: LessonCard,
    welcomeCard: WelcomeCard,
    digiStatusCard: DigiStatusCard,
    articleCard: ArticleCard
  },
  data() {
    return {
      lesson
    }
  },
  computed: {
    ...mapState(['device']),
    isDesktop () {
      let { name } = this.$vuetify.breakpoint;
      return name == 'md' || name == 'lg' || name == 'xl';
    },
  }
};
</script>
