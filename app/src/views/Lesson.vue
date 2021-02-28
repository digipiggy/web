<template>
  <v-container 
    class=" snap-container"
    fluid>
    <!--TODO Maybe add a min height to the row? 30%???-->
    <v-row 
      :style="{
        minHeight: '95vh',
        backgroundColor: page.backgroundColor
      }"
      class="snap-child"
      align="center" 
      justify="center"
      v-for="page in lesson.pages" 
      :key="page.number"
    >
      <!--TODO componitize the contents of the if/else here-->
      <!--Title-->
      <template
        v-if="page.type == 'title'"
      >
        <v-col
          cols="11"
          md="10"
          class="pa-7"
          style="border: 2px solid red"
        >
          <p class="text-xs-h2">
            {{page.title}}
          </p>
        </v-col>
      </template>
      <!--text-1-->
      <template
        v-else-if="page.type == 'text-1'"
      >
        <v-col
          cols="11"
          md="5"
          style="border: 2px solid red"
        >
          <p>
            {{page.text}}
          </p>
        </v-col>
        <v-col
          cols="11"
          md="5"
          style="border: 2px solid red"
        >
          <v-img 
            :src="require(`@/assets/rex&Penny.jpg`)" 
            aspect-ratio="1.4"
          ></v-img>        
        </v-col>
      </template>
      <!--text-2-->
      <template
        v-else-if="page.type == 'text-2'"
      >
        <v-col
          cols="11"
          md="5"
          style="border: 2px solid red"
        >
          <v-img 
            :src="require(`@/assets/rex&Penny.jpg`)" 
            aspect-ratio="1.4"
          ></v-img>        
        </v-col>
        <v-col
          cols="11"
          md="5"
          style="border: 2px solid red"
        >
          <p>
            {{page.text}}
          </p>
        </v-col>
      </template>
      <!--question-1-->
      <template
        v-else-if="page.type == 'question-1'"
      >
        <v-col
          cols="11"
          md="5"
          style="border: 2px solid red"
        >
          <p v-for="question in page.questions" :key="question">
            {{question}}
          </p>
        </v-col>
        <v-col
          cols="11"
          md="5"
          style="border: 2px solid red"
        >
          <v-img 
            :src="require(`@/assets/rex&Penny.jpg`)" 
            aspect-ratio="1.4"
          ></v-img>        
        </v-col>
      </template>
      <!--cta-1-->
      <template
        v-else-if="page.type == 'cta-1'"
      >
        <v-col
          cols="11"
          md="5"
          style="border: 2px solid red"
        >
          <v-img 
            :src="require(`@/assets/rex&Penny.jpg`)" 
            aspect-ratio="1.4"
          ></v-img>        
        </v-col>
        <v-col
          cols="11"
          md="5"
          style="border: 2px solid red"
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
    border: 6px solid green;
    height: 95vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
  .snap-child {
    border: 2px solid blue;
    scroll-snap-align: start;
  }
</style>
