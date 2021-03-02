<template>
  <v-container 
    class=" snap-container"
    fluid>
    <!--TODO Maybe add a min height to the row? 30%???-->
    <v-row 
      :style="{
        minHeight: '95vh',
        background: page.backgroundColor,
        color: page.textPrimaryColor
      }"
      class="snap-child"
      align="center" 
      justify="center"
      v-for="(page, i) in lesson.pages" 
      :key="i"
    >
      <!--TODO componitize the contents of the if/else here-->
      <!--title-->
      <template
        v-if="page.type == 'title'"
      >
        <v-col
          cols="11"
          md="10"
          class="pa-7"
        >
          <p class="text-h2 font-weight-bold">
            {{page.title}}
          </p>
          <p class="text-h4 font-weight-medium">
            {{page.subtitle}}
          </p>
          <p class="text-body-1 font-weight-medium">
            {{page.completionTime}} minutes
          </p>
        </v-col>
      </template>
      <!--textWithPictureRight-->
      <template
        v-else-if="page.type == 'textWithPictureRight'"
      >
        <v-col
          cols="11"
          md="5"
        >
          <p>
            {{page.text}}
          </p>
        </v-col>
        <v-col
          cols="11"
          md="5"
        >
          <v-img 
            :src="require(`@/assets/rex&Penny.jpg`)" 
            aspect-ratio="1.4"
          ></v-img>        
        </v-col>
      </template>
      <!--textWithPictureLeft-->
      <template
        v-else-if="page.type == 'textWithPictureLeft'"
      >
        <v-col
          cols="11"
          md="5"
        >
          <v-img 
            :src="require(`@/assets/rex&Penny.jpg`)" 
            aspect-ratio="1.4"
          ></v-img>        
        </v-col>
        <v-col
          cols="11"
          md="5"
        >
          <p>
            {{page.text}}
          </p>
        </v-col>
      </template>
      <!--text-->
      <template
        v-else-if="page.type == 'text'"
      >
        <v-col
          cols="11"
          md="6"
        >
          <p class="text-h5">
            {{page.text}}
          </p>
        </v-col>
      </template>
      <!--textWithTitle-->
      <template
        v-else-if="page.type == 'textWithTitle'"
      >
        <v-col
          cols="11"
          md="6"
        >
          <p class="text-h3">
            {{page.title}}
          </p>
          <p class="text-h5">
            {{page.text}}
          </p>
        </v-col>
      </template>
      <!--title-->
      <template
        v-else-if="page.type == 'heading'"
      >
        <v-col
          cols="11"
          md="6"
        >
          <p class="text-h3">
            {{page.title}}
          </p>
        </v-col>
      </template>
      <!--question--->
      <template
        v-else-if="page.type == 'question'"
      >
        <v-col
          cols="11"
          md="5"
        >
          <p v-for="question in page.questions" :key="question">
            {{question}}
          </p>
        </v-col>
        <v-col
          cols="11"
          md="5"
        >
          <v-img 
            :src="require(`@/assets/rex&Penny.jpg`)" 
            aspect-ratio="1.4"
          ></v-img>        
        </v-col>
      </template>
      <!--cta-->
      <template
        v-else-if="page.type == 'cta'"
      >
        <v-col
          cols="11"
          md="5"
        >
          <v-img 
            :src="require(`@/assets/rex&Penny.jpg`)" 
            aspect-ratio="1.4"
          ></v-img>        
        </v-col>
        <v-col
          cols="11"
          md="5"
        >
          <p>
            {{page.text}}
          </p>
          <v-btn 
            color="#A0E667" 
            dark 
            to="/pigSettings">
            Set your goals
          </v-btn>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import lessons from "@/lessons"

export default {
  name: 'Lesson',
  components: {},
  data() {
    return {
      lessons,
      lesson: {}
    }
  },
  async mounted() {
    try {
      const title = this.$route.params.title
      this.lesson = this.lessons.find( lesson => lesson.title == title)
      // this.lesson = this.$store.state.lessons.find( lesson => lesson.title == title)
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style scoped>
  .snap-container {
    height: 95vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
  .snap-child {
    scroll-snap-align: start;
  }
</style>
