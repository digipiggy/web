<template>
  <v-card class="elevation-3 pa-5 d-flex flex-column" :min-height="minHeight">
    <a :href="article.link" target="_blank" style="text-decoration: none;">
      <v-img 
        :src="require(`@/assets/${article.image}`)" 
        :lazy-src="require(`@/assets/${article.image}`)" 
        aspect-ratio="1.9"
        class="mb-4 d-flex align-center justify-center"
      >
      <v-icon 
        v-if="article.type == 'YouTube Video'"
        style="color: #F5F5F5; opacity: 0.5; display: block;"
        size='80px'
        class='text-center'
      >
        mdi-play
      </v-icon>
      </v-img>
    </a>
    <p class="text-subtitle-1 font-weight-regular mb-0">{{article.title}}</p>
    <p class="text-caption">{{article.type}} from {{article.source}}</p>
    <p class="text-body-1 font-weight-light">{{article.subtitle}}</p>
    <v-spacer></v-spacer>
    <a :href="article.link" target="_blank" style="text-decoration: none;">
      <v-btn 
        color="#48A182" 
        class="white--text"
      >
        {{article.type == "Article" ? 'Read Now' : 'Watch Now'}}
        <v-icon right dark>arrow_forward</v-icon>
      </v-btn>
    </a>
  </v-card>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: Object,
    minHeight: String
  },
  data() {
    return {
      
    };
  }
};
</script>
