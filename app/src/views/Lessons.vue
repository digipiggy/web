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
import LessonStatusIndicator from '@/components/lessons/LessonStatusIndicator';
import LessonCard from '@/components/lessons/LessonCard';
import Halt from '@/components/Halt';

const lessons = [
  {
    title: "Lesson 1 - Goals",
    image: "common/familyKitchen.png",
    imageLazy: "common/familyKitchenSmall.png",
    subtitle: "Let's talk about Goals",
    body: "Set your goals with help from the Piggles family.",
    parentComponent: "Lessons",
    route: "/lessons/lesson/1"
  },
  {
    title: "Lesson 2 - Earning",
    image: "lessons/lesson2/lesson2Title.png",
    imageLazy: "lessons/lesson2/lesson2TitleSmall.png",
    subtitle: "Start your earning",
    body: "Learn to earn and track goal progress.",
    parentComponent: "Lessons",
    route: "/lessons/lesson/2",
    },
  {
    title: "Lesson 3 - Needs vs Wants",
    image: "lessons/lesson3/lesson3Title.jpg",
    imageLazy: "lessons/lesson3/lesson3TitleSmall.jpg",
    subtitle: "The difference between Needs and Wants",
    body: "Learn about the difference between Needs and Wants.",
    parentComponent: "Lessons",
    route: "/lessons/lesson/3",
  },
  {
    title: "Lesson 4 - Goal Priority",
    image: "common/digiStanding.png",
    imageLazy: "common/digiStandingSmall.png",
    subtitle: "Reward time!",
    body: "How do you choose which goal to work towards?",
    parentComponent: "Lessons",
    route: "/lessons/lesson/4",
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
      //TODO: this feels janky
      newLessons[1].disabled = !this.device.status.lessons.lesson1.completed
      newLessons[2].disabled = !this.device.status.lessons.lesson2.completed
      return newLessons
    }
  }

};
</script>
