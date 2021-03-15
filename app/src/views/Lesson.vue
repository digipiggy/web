<template>
  <v-container 
    class=" snap-container"
    fluid>
    <!-- title --> 
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
            <v-icon :color="lesson.pages.titlePage.textPrimaryColor">mdi-timer</v-icon>{{lesson.pages.titlePage.readTime}} mins
          </p>
          <p class="text-h6 text-center">
            <v-icon :color="lesson.pages.titlePage.textPrimaryColor">mdi-book</v-icon>{{lesson.pages.titlePage.audience}}
          </p>
          <p class="text-h6 text-center">
            <v-icon :color="lesson.pages.titlePage.textPrimaryColor" size="70">mdi-chevron-down</v-icon>
          </p>
        </v-col>
      </template>
    
    </v-row>
    <!-- Page 1 --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        color: newTextPage.textPrimaryColor,
        backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${newTextPage.backgroundImage}`)})`,
        backgroundPosition: 'center'
      }"
      class="snap-child"
    >
      <v-col
        cols="11"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
          <v-icon color="#A0E667" size="40" >mdi-{{newTextPage.instructionIcon}}</v-icon>
          {{newTextPage.instructions}}
        </p>
        <p class="text-h6 text-uppercase">
          {{newTextPage.title}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
          v-for="paragraph in newTextPage.text"
          :key="paragraph"
        >
          {{paragraph}}
        </p>
        <v-container >
          <v-row>
            <v-col cols="4">
              <v-img 
                :src="require(`@/assets/${newTextPage.quoteImg}`)" 
                style="border-radius: 50%; border: 1px solid #9367E6"
                aspect-ratio="1"
                width="100"
              ></v-img>
            </v-col>
            <v-col cols="8" class="text-body-1 font-weight-light">
              <p style="color: black">
                {{newTextPage.quote}}
              </p>
            </v-col>
          </v-row>
        </v-container >
      </v-col>
    </v-row>
    <!-- Page 2 --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        color: newTextPage2.textPrimaryColor,
        backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${newTextPage2.backgroundImage}`)})`,
        backgroundPosition: 'center'
      }"
      class="snap-child"
    >
      <v-col
        cols="11"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
          <v-icon color="#A0E667" size="40" >mdi-{{newTextPage2.instructionIcon}}</v-icon>
          {{newTextPage2.instructions}}
        </p>
        <p class="text-h6 text-uppercase">
          {{newTextPage2.title}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage2.text[0]}}
        </p>
        <p 
          class="text-h6 mb-14 text-uppercase"
        >
          {{newTextPage2.text[1]}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage2.text[2]}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage2.text[3]}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage2.text[4]}}
        </p>
        <v-container >
          <v-row>
            <v-col cols="4">
              <v-img 
                :src="require(`@/assets/${newTextPage2.quoteImg}`)" 
                style="border-radius: 50%; border: 1px solid #9367E6"
                aspect-ratio="1"
                width="100"
              ></v-img>
            </v-col>
            <v-col cols="8" class="text-body-1 font-weight-light">
              <p style="color: black">
                {{newTextPage2.quote}}
              </p>
            </v-col>
          </v-row>
        </v-container >
      </v-col>
    </v-row>
    <!-- Page 3 --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        color: newTextPage3.textPrimaryColor,
        backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${newTextPage3.backgroundImage}`)})`,
        backgroundPosition: 'center'
      }"
      class="snap-child"
    >
      <v-col
        cols="11"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
          <v-icon color="#A0E667" size="40" >mdi-{{newTextPage3.instructionIcon}}</v-icon>
          {{newTextPage3.instructions}}
        </p>
        <p class="text-h6 text-uppercase">
          {{newTextPage3.title}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage3.text[0]}}
        </p>
        <p 
          class="text-h6 mb-14 text-uppercase"
        >
          {{newTextPage3.text[1]}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage3.text[2]}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage3.text[3]}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage3.text[4]}}
        </p>
        <v-container >
          <v-row>
            <v-col cols="4">
              <v-img 
                :src="require(`@/assets/${newTextPage3.quoteImg}`)" 
                style="border-radius: 50%; border: 1px solid #9367E6"
                aspect-ratio="1"
                width="100"
              ></v-img>
            </v-col>
            <v-col cols="8" class="text-body-1 font-weight-light">
              <p style="color: black">
                {{newTextPage3.quote}}
              </p>
            </v-col>
          </v-row>
        </v-container >
      </v-col>
    </v-row>
    <!-- Page 4 --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        color: newTextPage4.textPrimaryColor,
        backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${newTextPage4.backgroundImage}`)})`,
        backgroundPosition: 'center'
      }"
      class="snap-child"
    >
      <v-col
        cols="11"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-3 mb-6" style="color: black">
          <v-icon color="#A0E667" size="40" >mdi-{{newTextPage4.instructionIcon}}</v-icon>
          {{newTextPage4.instructions}}
        </p>
        <p class="text-h6 text-uppercase">
          {{newTextPage4.title}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-6"
        >
          {{newTextPage4.text[0]}}
        </p>
        <v-row class="mb-5 px-14">
          <v-img 
            v-for="coinDot in 3"
            :key="`coinDot-${coinDot}`"
            :src="require('@/assets/PigglesCoin.png')" 
            aspect-ratio="1"
          ></v-img>
          <v-img 
            v-for="blankLED in 5"
            :key="`blankLED-${blankLED}`"
            :src="require('@/assets/BlankLED.png')" 
            aspect-ratio="1"
          ></v-img>
        </v-row>
        <p 
          class="text-h6 font-weight-light mb-12"
        >
          {{newTextPage4.text[1]}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-7"
        >
          {{newTextPage4.text[2]}}
        </p>
        <v-row class="mb-4 d-flex align-center justify-center">
          <v-img 
            :src="require('@/assets/PigglesCoin.png')" 
            aspect-ratio="1"
            max-width="40px"
          ></v-img>
          <p class="mb-0" style="color: black;"> 1x per week
          </p>
        </v-row>
        <p 
          class="text-h6 font-weight-light mb-12"
        >
          {{newTextPage4.text[3]}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-12"
        >
          {{newTextPage4.text[4]}}
        </p>
      </v-col>
    </v-row>
    <!-- Page 5 --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        color: newTextPage5.textPrimaryColor,
      }"
      class="snap-child"
      align="center"
    >
      <v-col
        cols="12"
        md="6"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
          <v-icon color="#A0E667" size="40" >mdi-{{newTextPage5.instructionIcon}}</v-icon>
          {{newTextPage5.instructions}}
        </p>
        <p class="text-h6 text-uppercase">
          {{newTextPage5.title}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage5.text[0]}}
        </p>
        <v-btn
          to="/preferences"
          color="#9367E6"
          class="ma-2 white--text"
        >
          My Family
          <v-icon
            right
            dark
            color="white"
          >
            mdi-right-arrow
          </v-icon>
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light" style="color: black">
          {{newTextPage5.imageTitle}}
        </p>
        <v-img 
          :src="require(`@/assets/${newTextPage5.backgroundImage}`)" 
        ></v-img>
      </v-col>
    </v-row>
    <!-- Page 6 --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        color: newTextPage6.textPrimaryColor,
      }"
      class="snap-child"
      align="center"
    >
      <v-col
        cols="12"
        md="6"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
          <v-icon color="#A0E667" size="40" >mdi-{{newTextPage6.instructionIcon}}</v-icon>
          {{newTextPage6.instructions}}
        </p>
        <p class="text-h6 text-uppercase">
          {{newTextPage6.title}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage6.text[0]}}
        </p>
        <v-btn
          to="/goals"
          color="#9367E6"
          class="ma-2 white--text"
        >
          View Goals
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light" style="color: black">
          {{newTextPage6.imageTitle}}
        </p>
        <v-img 
          :src="require(`@/assets/${newTextPage6.backgroundImage}`)" 
        ></v-img>
      </v-col>
    </v-row>
    <!-- Page 7 --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        color: newTextPage7.textPrimaryColor,
      }"
      class="snap-child"
      align="center"
    >
      <v-col
        cols="12"
        md="6"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
          <v-icon color="#A0E667" size="40" >mdi-{{newTextPage7.instructionIcon}}</v-icon>
          {{newTextPage7.instructions}}
        </p>
        <p class="text-h6 text-uppercase">
          {{newTextPage7.title}}
        </p>
        <p 
          class="text-h6 font-weight-light mb-14"
        >
          {{newTextPage7.text[0]}}
        </p>
        <v-btn
          to="/lessons"
          color="#9367E6"
          class="ma-2 white--text"
        >
          Start Lesson 2
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="pa-5"
      >
        <v-img 
          :src="require(`@/assets/${newTextPage7.backgroundImage}`)" 
        ></v-img>
      </v-col>
    </v-row>
    <!-- dynamic --> 
    <!-- <v-row 
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
      
    </v-row> -->
  </v-container>
</template>

<script>
import lessons from "@/lessons"

const newTextPage = {
  type: "newTextPage",
  title: "What is a goal?",
  text: [
    "A goal is something you’d like to do or have someday. It’s usually something you don’t get right away. You work for and wait to earn a goal. It takes planning and careful choices to reach a goal.",
    "You hear about goals in sports, because a team is working to get points to win a game. The goal of soccer is to get the ball into the net."
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionIcon: "book-open",
  backgroundImage: 'PennyGoal.jpg',
  backgroundColor: "#FFFFFF",
  quote: '"I try to make goals when I play soccer" - Penny Piggle',
  quoteImg: "PennyHeadshotSquare.png",
  textPrimaryColor: "#9367E6"
}

const newTextPage2 = {
  type: "newTextPage",
  title: "Parent Goals",
  text: [
    "Parents, think of a goal you really wanted to reach.",
    "Discuss:",
    "What was your goal?",
    "What got in your way?",
    "How did you work towards it?",
  ],
  audience: "kid",
  instructions: "Read and Share",
  instructionIcon: "book-open",
  backgroundImage: 'RexAndMomma.jpg',
  backgroundColor: "#FFFFFF",
  quote: "“My goal was to start a business, but I wasn’t sure how. I made a list of things to learn. Then I talked to people who helped me with my ideas.” -Momma Piggle",
  quoteImg: "MommaPiggleHeadshot.png",
  textPrimaryColor: "#9367E6"
}

const newTextPage3 = {
  type: "newTextPage",
  title: "Kid Goals",
  text: [
    "Kids, think of a time when you really wanted to do or have something, and you had to wait or work for it.",
    "Tell your family:",
    "What were you waiting for?",
    "What helped you feel patient?",
    "How did you work toward it?"
  ],
  audience: "kid",
  instructions: "Read and Share",
  instructionIcon: "book-open",
  backgroundImage: 'rexPirate.jpg',
  backgroundColor: "#FFFFFF",
  quote: "“I wanted a pirate costume for Halloween. I didn’t have the money yet, so I made a paper eye patch.” -Rex Piggle",
  quoteImg: "RexPiggleHeadshot.png",
  textPrimaryColor: "#9367E6"
}

const newTextPage4 = {
  type: "newTextPage",
  title: "Rex's Goals",
  text: [
    "Rex wants to buy a pirate costume. It costs 8 Piggle coins, but he only has 3.",
    "Rex sets a goal to get 8 coins to buy the costume. He plans to save his 3 coins and will ask his family how he can earn 5 more.",
    "Mama Piggle tells Rex how he could earn one coin a week, if he sets up an earning plan with her.",
    "If Rex earns one coin a week, how many weeks will it take for him to reach his goal?",
    "Why is it important for Rex to set his money goal?"
  ],
  audience: "kid",
  instructions: "Read and Share",
  instructionIcon: "book-open",
  backgroundImage: 'RexAndMomma.jpg',
  backgroundColor: "#FFFFFF",
  quote: "“I wanted a pirate costume for Halloween. I didn’t have the money yet, so I made a paper eye patch.” -Rex Piggle",
  quoteImg: "RexPiggleHeadshot.png",
  textPrimaryColor: "#9367E6"
}

const newTextPage5 = {
  type: "newTextPage",
  title: "Your Time To Shine",
  text: [
    "It’s your turn to choose a goal for your kid(s) and practice saving coins! You and your family should already have selected rewards in the Coin Catalog of the My Family page. If you would like to edit them you can click below.",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionIcon: "book-open",
  imageTitle: "Goals Catalog Example:",
  backgroundImage: 'GoalCatalog.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const newTextPage6 = {
  type: "newTextPage",
  title: "Check out your goals",
  text: [
    "Once your Coin Catalog has been completed visit the Goals page to select the Reward your child will work towards. This page is also where you contribute Piggles Coins to your child’s Goal. When saved you will see the DigiPig light up!"
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionIcon: "book-open",
  imageTitle: "Goals Page Example:",
  backgroundImage: 'GoalPage.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const newTextPage7 = {
  type: "newTextPage",
  title: "Get ready to earn",
  text: [
    "Now that your Goal has been set and your child has a Reward in sight, it’s time to learn together how to earn Piggles Coins. Find out how in Lesson 2 - Earning!",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionIcon: "book-open",
  backgroundImage: 'logoLightGreen.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

export default {
  name: 'Lesson',
  components: {},
  data() {
    return {
      lessons,
      lesson: {},
      newTextPage,
      newTextPage2,
      newTextPage3,
      newTextPage4,
      newTextPage5,
      newTextPage6,
      newTextPage7,
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
    background-image: linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(../assets/PennyGoal.jpg)
  }
</style>
