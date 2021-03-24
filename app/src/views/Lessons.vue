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
        v-for="lesson in computedLessons"
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
    image: "familyKitchen2.png",
    subtitle: "Let's talk about Goals",
    body: "Set your goals with help from the Piggles family.",
    route: "/lessons/lesson/1"
  },
  {
    title: "Lesson 2 - Earning",
    image: "lessons/lesson2/lesson2Title.png",
    subtitle: "Start your earning",
    body: "Learn to earn and track goal progress.",
    route: "/lessons/lesson/2",
    disabled: true
    },
  {
    title: "Lesson 3 - Saving",
    image: "rexPirate.jpg",
    subtitle: "Save vs Spend",
    body: "Smart saving made easy.",
    route: "/lessons/lesson/3",
    disabled: true,
    comingSoon: true
  },
  {
    title: "Lesson 4 - Spending",
    image: "digiStanding.png",
    subtitle: "Reward time!",
    body: "You've worked for this, now it's time to celebrate!",
    route: "/lessons/lesson/4",
    disabled: true,
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
    computedLessons () {
      const newLessons = this.lessons
      //temporary hopefully
      newLessons[1].disabled = !this.device.status.lessons.lesson1.completed
      return newLessons
    }
  }

};
</script>
