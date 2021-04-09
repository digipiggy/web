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
        <div class="mb-6"></div>
        <articleCard :article="articleToShow"/>
      </v-col>
      <v-col cols="12" md="6" :order="isDesktop ? 2 : 1">
        <digiStatusCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

import LessonCard from '@/components/lessons/LessonCard';
import ArticleCard from '@/components/ArticleCard';
import WelcomeCard from '@/components/WelcomeCard';
import DigiStatusCard from '@/components/DigiStatusCard';

const lesson1 = {
  title: "Lesson 1",
  image: "common/familyKitchen.png",
  imageLazy: "common/familyKitchenSmall.png",
  subtitle: "Let's talk about Goals",
  body: "Set your goals with help from the piggles family.",
  route: "/lessons/lesson/1"
}

const lesson2 = {
  title: "Lesson 2 - Earning",
  image: "lessons/lesson2/lesson2Title.png",
  imageLazy: "lessons/lesson2/lesson2TitleSmall.png",
  subtitle: "Start your earning",
  body: "Learn to earn and track goal progress.",
  route: "/lessons/lesson/2",
}

const lesson3 = {
  title: "Lesson 3 - Needs vs Wants",
  image: "lessons/lesson3/lesson3Title.jpg",
  imageLazy: "lessons/lesson3/lesson3TitleSmall.jpg",
  subtitle: "Lorem ipsum dolor sit amet",
  body: "Learn about the difference between Needs and Wants.",
  route: "/lessons/lesson/3",
}

const lesson4 = {
  title: "Lesson 4 - Making Choices",
  image: "lessons/lesson4/lesson4Title.jpg",
  imageLazy: "lessons/lesson4/lesson4TitleSmall.jpg",
  subtitle: "Lorem ipsum dolor sit amet",
  body: "How do you decide between the things that you want?",
  route: "/lessons/lesson/4",
}

const familyAndMoneyArticles = [
  {
    title: "How to Teach Good Money Habits to Young Kids",
    subtitle: "From Toddlerhood to elementary school, these ideas will engage and delight the family!",
    source: "Northwestern Mutual",
    type: "Article",
    link: "https://www.northwesternmutual.com/life-and-money/how-to-teach-good-money-habits-to-young-kid/",
    image: "articles/howToTeachGood.jpg"
  },
  {
    title: "These Games will Teach the Basics of Finance to Kids",
    subtitle: "Game night and life skills, for the win!",
    source: "Northwestern Mutual",
    type: "Article",
    link: "https://www.northwesternmutual.com/life-and-money/these-games-will-help-teach-the-basics-of-finance-to-children/",
    image: "articles/theseGames.jpg"
  },
  {
    title: "5 Ways to Raise Non-Materialistic Kids",
    subtitle: "Offer non-monetary rewards, model generosity, and foster gratitude in your children.​",
    source: "Northwestern Mutual",
    type: "Article",
    link: "https://www.northwesternmutual.com/life-and-money/how-to-raise-non-materialistic-kids/",
    image: "articles/fiveWays.jpg"
  }
]


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
      lesson1,
      lesson2,
      lesson3,
      lesson4,
      familyAndMoneyArticles
    }
  },
  computed: {
    ...mapState(['device']),
    isDesktop () {
      let { name } = this.$vuetify.breakpoint;
      return name == 'md' || name == 'lg' || name == 'xl';
    },
    lessonToShow() {
      // create an array of all the lesson objects. Ex: [{started: true, completed: true}, {}...]
      const lessons = Object.values(this.device.status.lessons)
      // create an array of all the lesson object keys. Ex: ["lesson1", "lesson2", ...]
      const lessonNames = Object.keys(this.device.status.lessons)
      // find the index of the first lesson in the lessons array that hasn't started that lesson.
      const nextLessonIndex = lessons.findIndex(lesson => lesson.started == false)
      let lesson = {}

      // if it found an index of a lesson that hasn't been started
      if (nextLessonIndex >= 0) {
        // get the name of that lesson
        const lessonName = lessonNames[nextLessonIndex]
        // set the lesson to return to the lesson in the component state.
        lesson = this[lessonName] 
      } else {
        // else always return the latest lesson.
        lesson = this.lesson4
      }
      return lesson
    },
    articleToShow() {
      return familyAndMoneyArticles[Math.floor(Math.random() * familyAndMoneyArticles.length)]
    }
  }
};
</script>
