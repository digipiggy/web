<template>
  <v-container 
    class=" snap-container"
    fluid>
    <v-row 
      :style="{
        minHeight: '95vh',
        backgroundImage: `url(${require(`@/assets/${lesson.pages.titlePage.backgroundImage}`)})`,
        color: lesson.pages.titlePage.textPrimaryColor,
        backgroundPosition: 'center'
      }"
      class="snap-child"
      justify="center"
    >
      <!--TODO componitize the contents of the if/else here-->

      <!--newTitlePage-->
      <template> 
        <v-col
          cols="11"
          md="6"
        >
          <p class="text-h3 text-uppercase text-center">
            {{lesson.pages.titlePage.title}}
          </p>
          <p class="text-h1 text-uppercase text-center font-weight-bold">
            {{lesson.pages.titlePage.subtitle}}
          </p>
          <p class="text-h6 text-center ">
            <v-icon>mdi-timer</v-icon>{{lesson.pages.titlePage.readTime}} mins
          </p>
          <p class="text-h6 text-center">
            <v-icon>mdi-book</v-icon>{{lesson.pages.titlePage.audience}}
          </p>
          <p class="text-h6 text-center">
            <v-icon>mdi-chevron-down</v-icon>
          </p>
        </v-col>
      </template>
    
    </v-row>
    <v-row 
      :style="{
        minHeight: '95vh',
        color: page.textPrimaryColor,
        backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${page.backgroundImage}`)})`,
        backgroundPosition: 'center'
      }"
      class="snap-child"
      v-for="(page, i) in lesson.pages.contentPages" 
      :key="i"
    >
      <template
        v-if="page.type == 'newTextPage'"
      > 
        <v-col
          cols="11"
          md="4"
        >
          <p class="text-h6 text-center">
            <v-icon>mdi-{{page.instructionIcon}}</v-icon>{{page.instructions}}
          </p>
          <p class="text-h6 text-uppercase text-center">
            {{page.title}}
          </p>
          <p 
            class="text-body-1 text-uppercase font-weight-bold"
            v-for="paragraph in page.text"
            :key="paragraph"
          >
            {{paragraph}}
          </p>
          <v-container >
            <v-row>
              <v-col cols="4">
                <v-img 
                  :src="require(`@/assets/${page.quoteImg}`)" 
                  style="border-radius: 50%; border: 1px solid #9367E6"
                  aspect-ratio="1"
                  width="100"
                ></v-img>
              </v-col>
              <v-col cols="8">
                <p>
                  {{page.quote}}
                </p>
              </v-col>
            </v-row>
          </v-container >
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
  async created() {
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
  .backback {
    background-image: linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(../assets/PennyGoal.png)
  }
</style>
