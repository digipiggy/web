<template>
    <v-row justify="center" class="mb-7">
      <v-col cols="11" md="10">
        <p class="text-h6 font-weight-regular mb-0">{{title}}</p>
        <p class="text-caption mb-0">Audience: {{audience}}</p>
      </v-col>
      <v-col cols="11" md="10">
        <v-row >
          <v-col 
            cols="12" 
            md="4" 
            v-for="article in articles"
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
</template>

<script>
import ArticleCard from '@/components/ArticleCard';

export default {
  name: 'ArticleCard',
  components: {
    articleCard: ArticleCard
  },
  props: {
    title: String,
    audience: String,
    articles: Array
  },
  data() {
    return {};
  }
};
</script>
