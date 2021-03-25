<template>
  <v-container fluid >
    <v-row justify="center" class="mt-2">
      <v-col cols="11" md="10">
        <articleStatus />
      </v-col>
    </v-row>
    <!-- <v-row justify="center">
      <v-col cols="11" md="10">
        <latestArticle />
      </v-col>
    </v-row> -->
    <v-row justify="center" class="mb-7">
      <v-col cols="11" md="10">
        <p class="text-h6 font-weight-regular mb-0">Your Family & Money</p>
        <p class="text-caption mb-0">Audience: Parents</p>
      </v-col>
      <v-col cols="11" md="10">
        <v-row >
          <v-col 
            cols="12" 
            md="4" 
            v-for="article in familyAndMoneyArticles"
            :key="article.title"
          >
            <articleCard 
              :article="article"
              minHeight="100%"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-7">
      <v-col cols="11" md="10">
        <p class="text-h6 font-weight-regular mb-0">Goals</p>
        <p class="text-caption mb-0">Audience: Kids</p>
      </v-col>
      <v-col cols="11" md="10">
        <v-row >
          <v-col 
            cols="12" 
            md="4" 
            v-for="article in goalsArticles"
            :key="article.title"
          >
            <articleCard 
              :article="article"
              minHeight="100%"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import LatestArticle from '@/components/LatestArticle';
import ArticleCard from '@/components/ArticleCard';
import ArticleStatus from '@/components/ArticleStatus';

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

const goalsArticles = [
  {
    title: "Goal Setting Read Aloud",
    subtitle: "​This video by PawsAtive Choices for your 5-7 year old kids will reinforce Piggles Family Lesson 1.",
    source: "PAWsitive Choices",
    type: "YouTube Video",
    link: "https://youtu.be/n3R8vMmiCU4",
    image: "articles/goalSettingReadAloud.jpg"
  },
  {
    title: "How to Set Goals (4 Easy Steps)",
    subtitle: "This video by Rocket Kids is great to watch with your 7-10 year old kids as reinforcement to Piggles Family Lesson 1.",
    source: "RocketKids",
    type: "YouTube Video",
    link: "https://youtu.be/a4jnPQD7pO8",
    image: "articles/howToSetGoals.jpg"
  },
]

export default {
  name: "Articles",
  components: {
    // latestArticle: LatestArticle,
    articleCard: ArticleCard,
    articleStatus: ArticleStatus,
  },
  data() {
    return {
      familyAndMoneyArticles,
      goalsArticles
    };
  }

};
</script>
