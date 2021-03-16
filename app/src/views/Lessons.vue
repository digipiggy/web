<template>
  <v-container fluid >
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
import LessonStatusIndicator from '@/components/LessonStatusIndicator';
import LessonCard from '@/components/LessonCard';

const lessons = [
  {
    title: "Lesson 1",
    image: "kitchenEnter.jpg",
    subtitle: "Let's talk about Goals",
    body: "Set your goals with help from the piggles family.",
    route: "/lessons/lesson/1"
  },
  {
    title: "Lesson 2",
    image: "rex&Penny.jpg",
    subtitle: "Start your earning",
    body: "Learn to earn and track goal progress.",
    route: "/lessons/lesson/2"
  },
  {
    title: "Lesson 3",
    image: "rexPirate.jpg",
    subtitle: "Save vs Spend",
    body: "Making Saving and spending choices.",
    route: "/lessons/lesson/3"
  },
  {
    title: "Lesson 4",
    image: "digiStanding.png",
    subtitle: "Reward time!",
    body: "Work hard, play hard. It's time to celebrate!",
    route: "/lessons/lesson/4"
  }
]

export default {
  components: {
    lessonStatusIndicator: LessonStatusIndicator,
    lessonCard: LessonCard,
  },
  data() {
    return {
      lessons
    }
  }

};
</script>
