<template>
  <v-container v-if="!device.status.completedPreferences">
      <halt actionTodo="access your lessons"/>
  </v-container>
  <v-container v-else fluid >
    <v-row  justify="center">
      <v-col cols="12" md="10">
        <lessonStatusIndicator />
      </v-col>
    </v-row>
    <v-row  justify="center">
      <v-col 
        cols="12" 
        md="5" 
        v-for="lesson in lessons"
        :key="lesson.title"
      >
        <lessonCard 
          :lesson="lesson"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import LessonStatusIndicator from '@/components/LessonStatusIndicator';
import LessonCard from '@/components/LessonCard';
import Halt from '@/components/Halt';

const lessons = [
  {
    title: "Lesson 1 - Goals",
    image: "kitchenEnter.jpg",
    subtitle: "Let's talk about Goals",
    body: "Set your goals with help from the Piggles family.",
    route: "/lessons/lesson/1"
  },
  {
    title: "Lesson 2 - Earning",
    image: "rex&Penny.jpg",
    subtitle: "Start your earning",
    body: "Learn to earn and track goal progress.",
    route: "/lessons/lesson/2"
  },
  {
    title: "Lesson 3 - Saving",
    image: "rexPirate.jpg",
    subtitle: "Save vs Spend",
    body: "Smart saving made easy.",
    route: "/lessons/lesson/3",
    comingSoon: true
  },
  {
    title: "Lesson 4 - Spending",
    image: "digiStanding.png",
    subtitle: "Reward time!",
    body: "You've worked for this, now itt's time to celebrate!",
    route: "/lessons/lesson/4",
    comingSoon: true
  }
]

export default {
  name: "Lessons",
  components: {
    lessonStatusIndicator: LessonStatusIndicator,
    lessonCard: LessonCard,
    halt: Halt
  },
  data() {
    return {
      lessons
    }
  },
  computed: {
    ...mapState(['device']),
  }

};
</script>
