<template>
  <v-container 
    class=" snap-container"
    fluid>
    <!-- Title --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        backgroundImage: isDesktop 
          ? `url(${require(`@/assets/${titlePage.backgroundImage}`)})`
          : `url(${require(`@/assets/${titlePage.backgroundImageMobile}`)})`,
        color: titlePage.textPrimaryColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class=" flex-column"
      justify="center"
    >
      <!--TODO componitize the contents of the if/else here-->
      <!--newTitlePage-->
      <template> 
        <v-col
          cols="12"
          class="mt-9"
        >
          <p class="text-h4 text-md-h3 text-uppercase text-center font-weight-bold mb-0">
            {{titlePage.title}}
          </p>
          <p 
            class="text-uppercase text-center font-weight-bold my-n5 my-md-n9" 
            :style="{
              fontSize: isDesktop ? '140px' : '90px'
            }">
            {{titlePage.subtitle}}
          </p>
        </v-col>
        <v-spacer>
        </v-spacer>
        <v-col
          cols="12"
        >
          <v-img 
            max-width="200px"
            class="mx-auto"
            style="cursor: pointer;"
            :src="require(`@/assets/startCoin.png`)" 
            @click="$vuetify.goTo('#page1')"
          ></v-img>
        </v-col>
        <v-spacer class="">
        </v-spacer>
        <v-col
          cols="12"
        >
          <p class="text-h6 text-center ">
            <v-icon size="40" :color="titlePage.textPrimaryColor">mdi-timer</v-icon> {{titlePage.readTime}} mins
          </p>
          <p class="text-h6 text-center">
            <v-icon size="40" :color="titlePage.textPrimaryColor">fab fa-readme</v-icon> {{titlePage.audience}}
          </p>
          <p class="text-h6 text-center">
            <v-icon 
              class="bounceyArrow"
              size="70"
              @click="$vuetify.goTo('#page1')"
              :color="titlePage.textPrimaryColor" 
            >mdi-chevron-down</v-icon>
          </p>
        </v-col>
      </template>
    
    </v-row>

    <!-- Page 1 --> 
    <v-row 
      :style="{
        minHeight: '100vh',
        color: textPage1.textPrimaryColor,
        backgroundImage: isDesktop ? `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${textPage1.backgroundImage}`)})` : '',
        backgroundPosition: 'right',
        position: 'relative',
      }"
      class=" flex-column"
      id="page1"
    >
      <!-- <v-col cols="12" class="d-flex justify-center  pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo(0)"
          color="#9367E6"
        >mdi-chevron-up</v-icon>
      </v-col> -->
      <v-spacer>
      </v-spacer>
      <v-col
        cols="12"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-md-3 mb-md-8" style="color: black">
          <v-icon color="#A0E667" size="30" >{{textPage1.instructionIcon}}</v-icon>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              > {{textPage1.instructions}}</span>
            </template>
            <span>{{textPage1.instructionsTT}}</span>
          </v-tooltip>
        </p>
        <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
          {{textPage1.title}}
        </p>
        <div class="mb-8 mb-md-14">
          <p 
            class="text-body-1 text-md-h6 font-weight-light mb-6"
            v-for="paragraph in textPage1.text"
            :key="paragraph"
          >
            {{paragraph}}
          </p>
        </div>
        <v-container >
          <v-row>
            <v-col cols="4">
              <v-img 
                :src="require(`@/assets/${textPage1.quoteImg}`)" 
                style="border-radius: 50%; border: 1px solid #9367E6"
                aspect-ratio="1"
                width="100"
              ></v-img>
            </v-col>
            <v-col cols="8" class="text-body-1 font-weight-light">
              <p style="color: black">
                {{textPage1.quote}}
              </p>
              <p style="color: black">
                - {{textPage1.quoteAttrib}}
              </p>
            </v-col>
          </v-row>
        </v-container >
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0 ">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page2')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Page Divider for Mobile -->
    <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page 2 --> 
    <v-row 
      :style="{
        minHeight: '100vh',
        color: textPage2.textPrimaryColor,
        backgroundImage: isDesktop ? `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${textPage2.backgroundImage}`)})` : '',
        backgroundPosition: 'right'
      }"
      class=" flex-column"
      id="page2"
    >
      <!-- <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page1')"
          color="#9367E6"
        >mdi-chevron-up</v-icon>
      </v-col> -->
      <v-spacer>
      </v-spacer>
      <v-col
        cols="12"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-md-3 mb-md-8" style="color: black">
          <v-icon color="#A0E667" size="30" >{{textPage2.instructionIcon}}</v-icon>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              > {{textPage2.instructions}}</span>
            </template>
            <span>{{textPage2.instructionsTT}}</span>
          </v-tooltip>
        </p>
        <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
          {{textPage2.title}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light mb-5 mb-md-10"
        >
          {{textPage2.text[0]}}
        </p>
        <p 
          class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1"
        >
          {{textPage2.text[1]}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light font-italic mb-6 mb-md-14"
        >
          {{textPage2.text[2]}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light font-italic mb-6 mb-md-14"
        >
          {{textPage2.text[3]}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light font-italic mb-6 mb-md-14"
        >
          {{textPage2.text[4]}}
        </p>
        <v-container >
          <v-row>
            <v-col cols="4">
              <v-img 
                :src="require(`@/assets/${textPage2.quoteImg}`)" 
                style="border-radius: 50%; border: 1px solid #9367E6"
                aspect-ratio="1"
                width="100"
              ></v-img>
            </v-col>
            <v-col cols="8" class="text-body-1 font-weight-light">
              <p style="color: black">
                {{textPage2.quote}}
              </p>
              <p style="color: black">
                - {{textPage2.quoteAttrib}}
              </p>
            </v-col>
          </v-row>
        </v-container >
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0 ">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page3')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Page Divider for Mobile -->
    <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page 3 --> 
    <v-row 
      :style="{
        minHeight: '100vh',
        color: textPage3.textPrimaryColor,
        backgroundImage: isDesktop ? `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${textPage3.backgroundImage}`)})` : '',
        backgroundPosition: 'right'
      }"
      class=" flex-column"
      id="page3"
    >
      <!-- <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page2')"
          color="#9367E6"
        >mdi-chevron-up</v-icon>
      </v-col> -->
      <v-spacer>
      </v-spacer>
      <v-col
        cols="12"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-md-3 mb-md-8" style="color: black">
          <v-icon color="#A0E667" size="30" >{{textPage3.instructionIcon}}</v-icon>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              > {{textPage3.instructions}}</span>
            </template>
            <span>{{textPage3.instructionsTT}}</span>
          </v-tooltip>
        </p>
        <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
          {{textPage3.title}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light mb-5 mb-md-10"
        >
          {{textPage3.text[0]}}
        </p>
        <p 
          class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1"
        >
          {{textPage3.text[1]}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light font-italic mb-6 mb-md-14"
        >
          {{textPage3.text[2]}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light font-italic mb-6 mb-md-14"
        >
          {{textPage3.text[3]}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light font-italic mb-6 mb-md-14"
        >
          {{textPage3.text[4]}}
        </p>
        <v-container >
          <v-row>
            <v-col cols="4">
              <v-img 
                :src="require(`@/assets/${textPage3.quoteImg}`)" 
                style="border-radius: 50%; border: 1px solid #9367E6"
                aspect-ratio="1"
                width="100"
              ></v-img>
            </v-col>
            <v-col cols="8" class="text-body-1 font-weight-light">
              <p style="color: black">
                {{textPage3.quote}}
              </p>
              <p style="color: black">
                - {{textPage3.quoteAttrib}}
              </p>
            </v-col>
          </v-row>
        </v-container >
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page6')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Page Divider for Mobile -->
    <!-- <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row> -->

    <!-- Page 4 --> 
    <!-- <v-row 
      :style="{
        minHeight: '100vh',
        color: textPage4.textPrimaryColor,
        backgroundImage: isDesktop ? `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${textPage4.backgroundImage}`)})` : '',
        backgroundPosition: 'right'
      }"
      class=" flex-column"
      id="page4"
    >
      <v-spacer>
      </v-spacer>
      <v-col
        cols="12"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-md-3 mb-md-8" style="color: black">
          <v-icon color="#A0E667" size="30" >{{textPage4.instructionIcon}}</v-icon>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              > {{textPage4.instructions}}</span>
            </template>
            <span>{{textPage4.instructionsTT}}</span>
          </v-tooltip>
        </p>
        <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
          {{textPage4.title}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light mb-5 mb-md-5"
        >
          {{textPage4.text[0]}}
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
          class="text-body-1 text-md-h6 font-weight-light mb-5"
        >
          {{textPage4.text[1]}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light mb-5"
        >
          {{textPage4.text[2]}}
        </p>
        <v-row class=" d-flex align-center justify-center mb-5">
          <v-img 
            :src="require('@/assets/PigglesCoin.png')" 
            aspect-ratio="1"
            max-width="30px"
          ></v-img>
          <p class="mb-0" style="color: black;"> 1x per week
          </p>
        </v-row>
        <p 
          class="text-body-1 text-md-h6 font-weight-light font-italic mb-5"
        >
          {{textPage4.text[3]}}
        </p>
        <p 
          class="text-body-1 text-md-h6 font-weight-light font-italic mb-5"
        >
          {{textPage4.text[4]}}
        </p>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page6')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row> -->

    <!-- Page Divider for Mobile -->
    <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page 6 --> 
    <v-row 
      :style="{
        minHeight: '100vh',
        color: textPage6.textPrimaryColor,
      }"
      class=" flex-column"
      id="page6"
      align="center"
    >
      <!-- <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page5')"
          color="#9367E6"
        >mdi-chevron-up</v-icon>
      </v-col> -->
      <v-spacer>
      </v-spacer>
      <v-col cols="12" >
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
              <v-icon color="#A0E667" size="30" >{{textPage6.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{textPage6.instructions}}</span>
                </template>
                <span>{{textPage6.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-h6 text-uppercase">
              {{textPage6.title}}
            </p>
            <p 
              class="text-h6 font-weight-light mb-14"
            >
              {{textPage6.text[0]}}
            </p>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <div
              v-for="(goal, i) in activeGoals"
              :key="`${goal.color}-${i}`"
            >
              <p>Select {{device.kids[i].name}}'s goal:</p>
              <v-select
                :items="device.goalCatalog"
                :label="goal.name"
                item-text="name"
                item-value="name"
                solo
                v-model="goal.name"
              >
                <template slot="selection" slot-scope="data">
                  <template >
                    <v-list-item-avatar >
                      <v-img :src="require(`@/assets/PigglesCoin${data.item.coins}.png`)" ></v-img>
                      <!-- <p style="position: relative; right: 20px">{{device.goalCatalog[i].coins}}</p> -->
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title >{{data.item.name}}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </template>
                <template slot="item" slot-scope="data">
                  <template >
                    <v-list-item-avatar >
                      <v-img :src="require(`@/assets/PigglesCoin${data.item.coins}.png`)" ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title >{{data.item.name}}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </template>
              </v-select>
            </div>
            <v-btn
              color="#9367E6"
              class="ma-2 white--text"
              :loading="loading"
              :disabled="loading"
              @click="saveGoals"
            >
              Save Goals
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page7')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

    <!-- Page Divider for Mobile -->
    <v-row 
      :style="{
        borderBottom: isDesktop ? '' : '3px dashed #AAA'
      }"
    >
    </v-row>

    <!-- Page 7 --> 
    <v-row 
      :style="{
        minHeight: '100vh',
        color: textPage7.textPrimaryColor,
      }"
      id="page7"
      align="center"
    >
      <!-- <v-col cols="12" class="d-flex justify-center pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page6')"
          color="#9367E6"
        >mdi-chevron-up</v-icon>
      </v-col> -->
      <v-col cols="12" >
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="pa-5"
          >
            <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
              <v-icon color="#A0E667" size="30" >{{textPage7.instructionIcon}}</v-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  > {{textPage7.instructions}}</span>
                </template>
                <span>{{textPage7.instructionsTT}}</span>
              </v-tooltip>
            </p>
            <p class="text-h6 text-uppercase">
              {{textPage7.title}}
            </p>
            <p 
              class="text-h6 font-weight-light mb-14"
            >
              {{textPage7.text[0]}}
            </p>
            <v-btn
              to="/lessons/lesson/2"
              color="#48A182"
              dark
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
              :src="require(`@/assets/${textPage7.backgroundImage}`)" 
            ></v-img>
          </v-col>
        </v-row>  
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const titlePage = {
  type: "newTitlePage",
  title: "Lesson 1",
  subtitle: "Goals",
  readTime: "15",
  audience: "Family reads together.",
  backgroundImage: "familyKitchen2.png",
  backgroundImageMobile: "familyKitchenMobile.png",
  textPrimaryColor: "#FFFFFF"
}
const textPage1 = {
  type: "newTextPage",
  title: "What is a goal?",
  text: [
    "A goal is something you’d like to do or have someday. It’s usually something you don’t get right away. You work for and wait to earn a goal. It takes planning and careful choices to reach a goal.",
    "You hear about goals in sports, because a team is working to get points to win a game. The goal of soccer is to get the ball into the net."
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section out loud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'PennyGoal.png',
  backgroundColor: "#FFFFFF",
  quote: '"I try to make goals when I play soccer"',
  quoteAttrib: 'Penny Piggle',
  quoteImg: "PennyHeadshotSquare.png",
  textPrimaryColor: "#9367E6"
}
const textPage2 = {
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
  instructionsTT: "Read and discuss the italicized questions with your kid(s)",
  instructionIcon: "fas fa-book-reader",
  backgroundImage: 'RexAndMomma.jpg',
  backgroundColor: "#FFFFFF",
  quote: '"My goal was to start a business, but I wasn’t sure how. I made a list of things to learn. Then I talked to people who helped me with my ideas."',
  quoteAttrib: 'Momma Piggle',
  quoteImg: "MommaPiggleHeadshot.png",
  textPrimaryColor: "#9367E6"
}
const textPage3 = {
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
  instructionsTT: "Read and discuss the italicized questions with your kid(s)",
  instructionIcon: "fas fa-book-reader",
  backgroundImage: 'rexPirate.jpg',
  backgroundColor: "#FFFFFF",
  quote: 'I wanted a pirate costume for Halloween. I didn’t have the money yet, so I made a paper eye patch."',
  quoteAttrib: 'Rex Piggle',
  quoteImg: "RexPiggleHeadshot.png",
  textPrimaryColor: "#9367E6"
}
// const textPage4 = {
//   type: "newTextPage",
//   title: "Rex's Goals",
//   text: [
//     "Rex wants to buy a pirate costume. It costs 8 Piggle coins, but he only has 3.",
//     "Rex sets a goal to get 8 coins to buy the costume. He plans to save his 3 coins and will ask his family how he can earn 5 more.",
//     "Mama Piggle tells Rex how he could earn one coin a week, if he sets up an earning plan with her.",
//     "If Rex earns one coin a week, how many weeks will it take for him to reach his goal?",
//     "Why is it important for Rex to set his money goal?"
//   ],
//   audience: "kid",
//   instructions: "Read and Share",
//   instructionsTT: "Read and discuss the italicized questions with your kid(s)",
//   instructionIcon: "fas fa-book-reader",
//   backgroundImage: 'MomSearchCorner.png',
//   backgroundColor: "#FFFFFF",
//   quote: "“I wanted a pirate costume for Halloween. I didn’t have the money yet, so I made a paper eye patch.” -Rex Piggle",
//   quoteImg: "RexPiggleHeadshot.png",
//   textPrimaryColor: "#9367E6"
// }
// const textPage5 = {
//   type: "newTextPage",
//   title: "Your Time To Shine",
//   text: [
//     "It’s your turn to choose a goal for your kid(s) and practice saving coins! You and your family should already have selected rewards in the Coin Catalog of the My Family page. If you would like to edit them you can click below.",
//   ],
//   audience: "kid",
//   instructions: "Take Action",
//   instructionsTT: "Something else",
//   instructionIcon: "fas fa-tasks",
//   imageTitle: "Goals Catalog Example:",
//   backgroundImage: 'GoalCatalog.png',
//   backgroundColor: "#FFFFFF",
//   textPrimaryColor: "#9367E6"
// }
const textPage6 = {
  type: "newTextPage",
  title: "It's your turn!",
  text: [
    "Kids, choose a goal from the Goal Catalog that you would like to save up for."
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionsTT: "Pick your goal.",
  instructionIcon: "fas fa-tasks",
  imageTitle: "Goals Page Example:",
  backgroundImage: 'GoalPage.png',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}
const textPage7 = {
  type: "newTextPage",
  title: "Get ready to earn",
  text: [
    "Congratulations on completing Lesson 1 - Goals! Now that your Goal has been set and your child has a Reward in sight, it’s time to learn how to earn Piggles Coins. Find out how in Lesson 2 - Earning!",
  ],
  audience: "kid",
  instructions: "Take Action",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'rex&Penny.jpg',
  backgroundColor: "#FFFFFF",
  textPrimaryColor: "#9367E6"
}

const goalColors = [
  "255",
  "16711680",
  "685312",
  "16718336"
]

export default {
  name: 'Lesson1',
  components: {},
  computed: {
    ...mapState(['device']),
    isDesktop () {
        let { name } = this.$vuetify.breakpoint;
        return name == 'md' || name == 'lg' || name == 'xl';
    },
    goalCatalog: function () {
      const goalCatalog = this.device.goalCatalog.map(goal => goal.name)
      return goalCatalog
    },
    activeGoals: function () {
      return this.goals.filter(goal => goal.enabled)
    }
  },
  data() {
    return {
      goals: [],
      titlePage,
      textPage1,
      textPage2,
      textPage3,
      // textPage4,
      // textPage5,
      textPage6,
      textPage7,
      loading: false,
      goalColors
    }
  },
  methods: {
    ...mapActions(['updateDevice', 'displayMessage']),
    async saveGoals() {
      this.loading = true;
      const device = {
        deviceId: this.device.deviceId,
        deviceCode: this.device.deviceCode,
        kids: this.device.kids,
        settings: this.device.settings,
        goalCatalog: this.device.goalCatalog,
        status: this.device.status,
        goals: this.goals.map((g, i)=> {
          if (this.activeGoals[i]){
            const currentGoal = this.device.goalCatalog.find(goal => goal.name == g.name)
            return {
              name: this.activeGoals[i].name,
              enabled: g.enabled,
              color: +g.color,
              percentage: +g.percentage / 100,
              total: +currentGoal.coins,
              current: 0,
              promise: +g.promise,
              promises: g.promises
            };
          } else {
            return {
              name: g.name,
              enabled: g.enabled,
              color: +g.color,
              percentage: +g.percentage / 100,
              total: +g.total,
              current: 0,
              promise: +g.promise,
              promises: g.promises
            };
          }
        })
      };

      if (await this.updateDevice(device)) {
        this.displayMessage({ text: 'Goals saved', color: 'info' });
      } else {
        this.displayMessage({ text: 'Failed to save goals', color: 'error' });
      }

      this.loading = false;
    },
    initialize() {

      // if there are already goals, keep them, otherwise initialize a goal for each kid.
      this.goals = this.device.kids.map((kid, i) => {
        const goal = this.device.goals[i];

        if (goal){
          return {
            ...this.device.goals[i],
            percentage: this.device.goals[i].percentage * 100,
          };
        } else {
          return {
            name: "Choose a goal",
            color: this.goalColors[i],
            enabled: true,
            percentage: 0,
            total: 0,
            current: 0,
            promise: 0,
          };
        }
      });
    }
  },
  mounted() {
    this.initialize();
  },

};
</script>

<style scoped>
  .backback {
    background-image: linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(../assets/PennyGoal.png)
  }

  .bounceyArrow {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: bounce-7;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }
    @keyframes bounce-7 {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-10px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
  }
</style>