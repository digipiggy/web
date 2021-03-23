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
          :lesson="lessonToShow"
        />
        <!-- <div class="mb-6"></div>
        <articleCard /> -->
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
// import ArticleCard from '@/components/ArticleCard';
import WelcomeCard from '@/components/WelcomeCard';
import DigiStatusCard from '@/components/DigiStatusCard';

const lesson1 = {
  title: "Lesson 1",
  image: "kitchenEnter.jpg",
  subtitle: "Let's talk about Goals",
  body: "Set your goals with help from the piggles family.",
  route: "/lessons/lesson/1"
}

const lesson2 = {
  title: "Lesson 2 - Earning",
  image: "Lesson2Title.png",
  subtitle: "Start your earning",
  body: "Learn to earn and track goal progress.",
  route: "/lessons/lesson/2",
}


export default {
  name: "Home",
  components: {
    lessonCard: LessonCard,
    welcomeCard: WelcomeCard,
    digiStatusCard: DigiStatusCard,
    // articleCard: ArticleCard
  },
  data() {
    return {
      lesson1,
      lesson2
    }
  },
  computed: {
    ...mapState(['device']),
    isDesktop () {
      let { name } = this.$vuetify.breakpoint;
      return name == 'md' || name == 'lg' || name == 'xl';
    },
    lessonToShow() {
      return this.device.status.lessons.lesson1.completed ? this.lesson2 : this.lesson1
    }
  }
};
</script>
