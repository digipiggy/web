<template>
  <v-container fluid >
    <v-row  justify="center">
      <v-col cols="11" md="10">
        <articleStatus />
      </v-col>
    </v-row>
    <v-row  justify="center">
      <v-col cols="11" md="10">
        <latestArticle />
      </v-col>
    </v-row>
    <v-row  justify="center">
      <v-col 
        cols="11" 
        md="5" 
        v-for="n in 6"
        :key="n"
      >
        <articleCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LatestArticle from '@/components/LatestArticle';
import ArticleCard from '@/components/ArticleCard';
import ArticleStatus from '@/components/ArticleStatus';

export default {
  components: {
    latestArticle: LatestArticle,
    articleCard: ArticleCard,
    articleStatus: ArticleStatus,
  },

};
</script>
