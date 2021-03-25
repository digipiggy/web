<template>
  <v-container fluid >
    <v-row justify="center" class="mt-2">
      <v-col cols="11" md="10">
        <articleStatus />
      </v-col>
    </v-row>
    <articleRow 
      v-for="articleRow in allArticleRows"
      :key="articleRow.title"
      :title="articleRow.title"
      :audience="articleRow.audience"
      :articles="articleRow.articles"
    />
  </v-container>
</template>

<script>
import ArticleStatus from '@/components/ArticleStatus';
import ArticleRow from '@/components/ArticleRow';

const familyAndMoneyArticles = {
  title: "Your Family & Money",
  audience: "Parents",
  articles: [
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
}
const goalsArticles = {
  title: "Goals",
  audience: "Kids",
  articles: [
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
}
const earningPhilosophy = {
  title: "Earning Philosophy",
  audience: "Parents",
  articles: [
    {
      title: "Should I Give My Child an Allowance?",
      subtitle: "​As a supplement to Lesson 2 , this video by Dr. Paul Jenkins helps parents consider various reasons and approaches for offering an “allowance”.​",
      source: "Live On Purpose TV",
      type: "YouTube Video",
      link: "https://youtu.be/g6E1BpHM8jE",
      image: "articles/shouldIGiveMyChild.jpg"
    },
    {
      title: "Should You Give Your Kids an Allowance?",
      subtitle: "This article from Psychology Today steps through research and reasoning behind various allowance approaches for parents.​",
      source: "Psychology Today",
      type: "Article",
      link: "https://www.psychologytoday.com/us/blog/good-thinking/201309/should-you-give-your-kids-allowance",
      image: "articles/shouldYouGiveYourKids.png"
    },
  ]
}
const needsAndWants = {
  title: "Needs and Wants",
  audience: "Kids",
  articles: [
    {
      title: "Economics for Kids: Needs and Wants",
      subtitle: "This video by Teaching Without Frills shores up the concept of needs and wants for 5-7 year old kids.​",
      source: "Teaching Without Frills",
      type: "YouTube Video",
      link: "https://youtu.be/FpNyTKgi1Io",
      image: "articles/economicsForKids.png"
    }
  ]
}
const saveSpendShare = {
  title: "Save, Spend, Share",
  audience: "Kids",
  articles: [
    {
      title: "Save, Spend, Share",
      subtitle: "This video by PBS Kids is an excellent reinforcement for your 5-7 year old kids of saving and spending choices from Lesson 4.​",
      source: "PBS Kids",
      type: "YouTube Video",
      link: "https://youtu.be/-XMkJTi8n9I",
      image: "articles/forMeForYouForLater.png"
    }
  ]
}

export default {
  name: "Articles",
  components: {
    articleStatus: ArticleStatus,
    articleRow: ArticleRow
  },
  data() {
    return {
      familyAndMoneyArticles,
      goalsArticles,
      earningPhilosophy,
      needsAndWants,
      saveSpendShare
    };
  },
  computed: {
    allArticleRows: function(){
      return [
        familyAndMoneyArticles,
        goalsArticles,
        earningPhilosophy,
        needsAndWants,
        saveSpendShare
      ]
    }
  }
};
</script>
