<template>
<div>
  <v-container v-if="!device.status.completedPreferences" >
      <v-window v-model="e1">
          <!--Title Text 0--> 
          <v-window-item >
              <v-row justify="center" >
                <v-col cols="12" md="10">
                  <p class="text-h5 font-weight-regular text-center my-8">👋 Hi there! We're excited you're on this journey with us. </p>
                  <p class="text-body-1 font-weight-light text-center my-8" >This guide will help you customize the Digi-Pig experience to your family's unique situation and values. The guide takes about 10 minutes to complete, and should be completed by parents before starting lessons or setting goals.</p>
                </v-col>
              </v-row>
            <p class="text-center" >
              <v-btn
                dark
                color="#9367E6"
                @click="e1 = 1"
              >
                Let's get started!
              </v-btn>
            </p>
          </v-window-item>

          <!--Kid Entry 1--> 
          <v-window-item>
            <v-btn
              fab
              dark
              small
              color="#9367E6"
              elevation="0"
              @click="e1 = 0"
            >
              <v-icon dark>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-row justify="center" >
              <v-col cols="12" md="8">
                <p class="text-h6 font-weight-regular text-center my-4" style="color: #9367E6">Enter your kid(s) names.</p>
                <p class="text-body-1 font-weight-light text-center mb-4">We recommend this system for kids ages 5 - 10. This system supports up to 4 kids in the system at a time.</p>
              </v-col>
            </v-row>
            <v-row no-gutters justify="center">
              <v-col cols="9" md="4">
              <div
                v-for="(kid, i) in kids"
                :key="`kid-${i}`"
              >
                <v-text-field
                  v-if="i == 0"
                  label="Enter name"
                  v-model="kid.name"
                  solo
                  dense
                  append-outer-icon="mdi-"
                ></v-text-field>
                <v-text-field
                  v-else
                  label="Enter Name"
                  v-model="kid.name"
                  solo
                  dense
                  append-outer-icon="mdi-close-circle-outline"
                  @click:append-outer="removeKid(i)"
                ></v-text-field>
              </div>
              </v-col >
            </v-row >
            <v-row no-gutters justify="center" class="mb-8">
              <v-col cols="9" md="4">
                <p class="text-center" >
                  <v-btn
                    color="#FFFFFF"
                    class="black--text"
                    @click="addKid"
                    :disabled="kids.length >= 4"
                  >
                    Add another kid
                    <v-icon
                      right
                      dark
                    >
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </p>
              </v-col>
            </v-row>
            <p class="text-center" >
              <v-btn
                dark
                color="#9367E6"
                @click="e1 = 2"
              >
                Next
              </v-btn>
            </p>
          </v-window-item>

          <!--Earning Philosophy 2--> 
          <v-window-item >
            <v-btn
              fab
              dark
              small
              color="#9367E6"
              elevation="0"
              @click="e1 = 1"
            >
              <v-icon dark>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-row justify="center" >
              <v-col cols="12" md="8">
                <p class="text-h6 font-weight-regular text-center mt-10 mb-3" style="color: #9367E6">Earning Philosophies.</p>
                <p class="text-body-1 font-weight-light text-center mb-8">The Piggles Family system uses Piggles Coins as a way to show progress towards a goal. This in-app currency is represented by lights that appear on the DigiPig. On the next screen, you'll chose which of our 3 custom Earning Philosophies you'd like your children to use.</p>
              </v-col>
            </v-row>
            <p class="text-center" >
              <v-btn
                dark
                color="#9367E6"
                @click="e1 = 3"
              >
                Next
              </v-btn>
            </p>
          </v-window-item>

          <!--Earning Philosophy 3--> 
          <v-window-item >
            <v-btn
              fab
              dark
              small
              color="#9367E6"
              elevation="0"
              @click="e1 = 2"
            >
              <v-icon dark>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <p class="text-h6 font-weight-regular text-center mt-10 mb-3" style="color: #9367E6">Select your family's Earning Philosophy.</p>
            <v-container class="mb-6">
              <v-row justify="center">
                <v-col 
                  cols="12"
                  md="4"
                  v-for="(earningSystem, i) in earningSystems"
                  :key="earningSystem.title"
                >
                  <v-card 
                    :style="{
                      border: isEarningSystemSelected(earningSystem) ? '2px solid #9367E6' : '2px solid #FFFFFF'
                    }"
                    
                    class="pa-4"
                    min-height="100%"
                    @click="selectEarningSystem(i)"
                  >
                    <p class="text-subtitle-1 font-weight-medium text-center">{{earningSystem.title}}</p>
                    <p class="text-body-2 text-center">{{earningSystem.text}}</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <p class="text-center" >
              <v-btn
                dark
                color="#9367E6"
                @click="e1 = 4"
              >
                Next
              </v-btn>
            </p>
          </v-window-item>

          <!--Goal Catalog 4--> 
          <v-window-item >
            <v-btn
              fab
              dark
              small
              color="#9367E6"
              elevation="0"
              @click="e1 = 3"
            >
              <v-icon dark>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-row justify="center" >
              <v-col cols="12" md="8">
                <p class="text-h6 font-weight-regular text-center mb-3" style="color: #9367E6">Create your Goal Catalog. </p>
                <p class="text-body-1 font-weight-light text-center mb-8">The Goal Catalog is your curated list of goals that your kid(s) will choose from in lesson 1. In this step, select the goals that you would like to include in your catalog. Goals don't have to cost money. They can be experiences as well. Pick from our pre-defined list, or create your own!</p>
              </v-col>
            </v-row>
            <v-container class="mb-5">
              <v-row class="mb-5">
                <v-col 
                  cols="12"
                  md="3"
                  v-for="(goal, i) in allGoals"
                  :key="goal.name + i"
                >
                  <v-card
                    class="pa-2"
                    height="100%"
                    :style="{border: isGoalSelected(goal) ? '2px solid #9367E6' : '2px solid #FFFFFF'}"
                    @click="selectGoal(i)"
                  >
                    <p class="text-subtitle-1 text-center mb-4">{{goal.name}}</p>
                    <v-row class="mb-5 px-4" justify="center">
                      <v-img 
                        v-for="coinDot in goal.coins"
                        :key="`coinDot-${coinDot}`"
                        :src="require('@/assets/PigglesCoin.png')" 
                        aspect-ratio="1"
                        max-width="12%"
                      ></v-img>
                    </v-row>
                    <p class="text-h2 font-weight-bold text-center mb-0" style="color: #9367E6">{{goal.coins}}</p>
                    <p class="text-caption text-center my-0">Piggles Coins</p>
                  </v-card>
                </v-col>
                <v-col 
                  v-if="showGoalCreateTool"
                  cols="12"
                  md="3"
                >
                  <v-card
                    height="100%"
                    style="border: 2px solid #9367E6"
                    class="pa-5"
                  >
                    <v-text-field
                      label="Goal Name"
                      v-model="newGoalName"
                      dense
                      outlined
                    ></v-text-field>
                    <v-row class="mb-5 px-4">
                      <v-img 
                        v-for="coinDot in newGoalTotal"
                        :key="`coinDot-${coinDot}`"
                        :src="require('@/assets/PigglesCoin.png')" 
                        @click="updateNewGoalAmount('coin', coinDot)"
                        aspect-ratio="1"
                      ></v-img>
                      <v-img 
                        v-for="blankLED in (8 - newGoalTotal)"
                        @click="updateNewGoalAmount('blank', blankLED)"
                        :key="`blankLED-${blankLED}`"
                        :src="require('@/assets/BlankLED.png')" 
                        aspect-ratio="1"
                      ></v-img>
                    </v-row>
                    <p class="text-h2 font-weight-bold text-center mb-0" style="color: #9367E6">{{newGoalTotal}}</p>
                    <p class="text-caption text-center my-0">Piggles Coins</p>
                    <v-btn
                      @click="cancelNewGoal"
                      outlined
                      color="#A0E667"
                      class="ma-2"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      @click="saveNewGoal"
                      color="#A0E667"
                    >
                      Save
                    </v-btn>
                  </v-card>
                </v-col>
                <v-col 
                  v-else
                  cols="12"
                  md="3"
                >
                  <v-card
                    height="100%"
                    min-height="200px"
                    style="cursor: pointer;"
                    class="pa-2 d-flex align-center justify-center"
                    @click.native="createNewGoal()"
                  >
                    <p class="text-subtitle-1 font-weight-regular text-center mb-0">
                      Create a Custom Goal
                      <v-icon size="32" class="mx-auto" style="color: #9367E6" >mdi-plus-circle-outline</v-icon>
                    </p>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <p class="text-center" >
              <v-btn
                dark
                color="#9367E6"
                @click="showTasksAndBehaviors ? e1 = 5 : e1 = 6"
              >
                Next
              </v-btn>
            </p>
          </v-window-item>

          <!--Tasks and Behaviors 5--> 
          <v-window-item >
            <v-btn
              fab
              dark
              small
              color="#9367E6"
              elevation="0"
              @click="e1 = 4"
            >
              <v-icon dark>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-row justify="center" >
              <v-col cols="12" md="8">
                <p class="text-h6 font-weight-regular text-center mb-3" style="color: #9367E6">Select tasks and/or behaviors</p>
                <p class="text-body-1 font-weight-light text-center mb-6">Your kid(s) will earn Piggles Coins every week based on the completion of the tasks and behaviors you select. Choose from our list, or feel free to add your own!</p>
              </v-col>
            </v-row>
            <div 
              class="mb-10"
              v-for="(kid, kidIndex) in kids"
              :key="`kidTasks&Behaviors-${kidIndex}`"
            >
              <v-row justify="center">
                <v-col cols="12" md="8" >
                  <p>Select tasks and/or behaviors for {{kid.name}}</p>
                  <taskchips
                    :defaultChips="tasks"
                    :kid="kid"
                    @selectTask="selectTask"
                  />
                </v-col>
              </v-row>
            </div>
            <p class="text-center" >
              <v-btn
                dark
                color="#9367E6"
                @click="e1 = 6"
              >
                Next
              </v-btn>
            </p>
          </v-window-item>

          <!--Piggles Day 6-->
          <v-window-item>
            <v-btn
              fab
              dark
              small
              color="#9367E6"
              elevation="0"
              @click="e1 = 5"
            >
              <v-icon dark>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-row justify="center" >
              <v-col cols="12" md="8">
                <p class="text-h6 font-weight-regular text-center mb-3" style="color: #9367E6">Pick your Piggles Day.</p>
                <p class="text-body-1 font-weight-light text-center mb-5">Piggles Day is when you and your kid(s) will review goal progress, reward Piggles Coins, and do the next lesson.</p>
              </v-col>
            </v-row>
            <v-row justify="center" >
              <v-col cols="12" md="4">
                <v-select
                  :items="days"
                  v-model="rewardDay"
                  label="Our Piggles Payday"
                  solo
                ></v-select>
              </v-col>
            </v-row>
            <p class="text-center" >
              <v-btn
                dark
                color="#9367E6"
                @click="showFinalSlide"
              >
                Save Settings
              </v-btn>
            </p>
          </v-window-item>

          <!--Success 7-->
          <v-window-item>
            <div v-if="loading">
              <p class="text-h6 font-weight-regular text-center mb-0" style="color: #9367E6">Saving your settings.</p>
              <v-container class="pt-12">
                <v-row align="center" justify="center">
                  <loader color="#9367E6"/>
                </v-row>
              </v-container>
            </div>
          </v-window-item>
      </v-window>
  </v-container>


  <v-container v-else-if="showFirstSetupCompletion">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <p class="text-h6 font-weight-regular text-center mb-4">Fantastic, you're all set!</p>
        <p class="text-body-1 font-weight-light text-center mb-4">When you're ready, take a stroll over to the lesson page and dive into lesson 1 with your kid(s).</p>
        <p class="text-body-1 font-weight-light text-center mb-4">Lesson 1 is an introduction to Goals for your kids. They will learn what a goal is, how the Piggles family sets their goals, and choose their first goal to work towards.</p>
        <p class="text-center">
          <v-btn
            color="#48A182"
            class="ma-2 white--text"
            to="/lessons"
          >
            Lessons
            <v-icon right>
              mdi-arrow-right
            </v-icon>
          </v-btn>
          <v-btn
            color="grey lighten-3"
            class="ma-2"
            @click="showFirstSetupCompletion = false"
          >
            Review Settings
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>


  <v-container v-else>
    <!--Title Text & Kid Entry--> 
    <v-row justify="center" class="mb-8">
      <v-col cols="11">
        <p class="text-h5 font-weight-regular my-10" >Update your settings</p>
        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Kids</p>
        <p class="text-body-1 font-weight-light mb-0">We recommend this system for kids ages 5 - 10.</p>
        <p class="text-body-1 font-weight-light mb-6">This system supports up to 4 kids in the system at a time.</p>
        <v-row no-gutters>
          <v-col cols="9" md="4">
           <div
            v-for="(kid, i) in kids"
            :key="`kid-${i}`"
           >
            <v-text-field
              v-if="i == 0"
              label="Enter name"
              v-model="kid.name"
              solo
              dense
              append-outer-icon="mdi-"
            ></v-text-field>
            <v-text-field
              v-else
              label="Enter Name"
              v-model="kid.name"
              solo
              dense
              append-outer-icon="mdi-close-circle-outline"
              @click:append-outer="removeKid(i)"
            ></v-text-field>
           </div>
          </v-col >
        </v-row >
        <v-btn
          color="#FFFFFF"
          class="black--text"
          @click="addKid"
          :disabled="kids.length >= 4"
        >
          Add another kid
          <v-icon
            right
            dark
          >
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>  
    </v-row>
    
    <!--Earning Philosophy--> 
    <v-row justify="center" class="mb-8">
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mt-10 mb-0" style="color: #9367E6">Our Family's Earning Philosophy</p>
        <p class="text-body-1 font-weight-light mb-8">The Piggles Family system uses Piggles Coins as a way to show progress towards a goal. This in-app currency is represented by lights that appear on the DigiPig. On the next screen, you'll chose which of our 3 custom Earning Philosophies you'd like your children to use.</p>
        <v-container >
          <v-row justify="center">
            <v-col 
              cols="12"
              md="4"
              v-for="(earningSystem, i) in earningSystems"
              :key="earningSystem.title"
            >
              <v-card 
                :style="{
                  border: isEarningSystemSelected(earningSystem) ? '2px solid #9367E6' : '2px solid #FFFFFF'
                }"
                
                class="pa-4"
                min-height="100%"
                @click="selectEarningSystem(i)"
              >
                <p class="text-subtitle-1 font-weight-medium text-center">{{earningSystem.title}}</p>
                <p class="text-body-2 text-center">{{earningSystem.text}}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>  
    </v-row>

    <!--Goal Catalog--> 
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Our Family's Goal Catalog</p>
        <p class="text-body-1 font-weight-light mb-8">The Goal Catalog is your curated list of goals that your kid(s) will choose from in lesson 1. In this step, select the goals that you would like to include in your catalog. Goals don't have to cost money. They can be experiences as well. Choose from our list, or feel free to add your own!</p>
        <v-container class="mb-10">
          <v-row class="mb-5">
            <v-col 
              cols="12"
              md="3"
              v-for="(goal, i) in allGoals"
              :key="goal.name + i"
            >
              <v-card
                class="pa-2"
                height="100%"
                :style="{border: isGoalSelected(goal) ? '2px solid #9367E6' : '2px solid #FFFFFF'}"
                @click="selectGoal(i)"
              >
                <p class="text-subtitle-1 text-center mb-6">{{goal.name}}</p>
                <v-row class="mb-5 px-4" justify="center">
                  <v-img 
                    v-for="coinDot in goal.coins"
                    :key="`coinDot-${coinDot}`"
                    :src="require('@/assets/PigglesCoin.png')" 
                    aspect-ratio="1"
                    max-width="12%"
                  ></v-img>
                </v-row>
                <p class="text-h2 font-weight-bold text-center mb-0" style="color: #9367E6">{{goal.coins}}</p>
                <p class="text-caption text-center my-0">Piggles Coins</p>
              </v-card>
            </v-col>
            <v-col 
              v-if="showGoalCreateTool"
              cols="12"
              md="3"
            >
              <v-card
                height="100%"
                style="border: 2px solid #9367E6"
                class="pa-5"
              >
                <v-text-field
                  label="Goal Name"
                  v-model="newGoalName"
                  dense
                  outlined
                ></v-text-field>
                <v-row class="mb-5 px-4">
                  <v-img 
                    v-for="coinDot in newGoalTotal"
                    :key="`coinDot-${coinDot}`"
                    :src="require('@/assets/PigglesCoin.png')" 
                    @click="updateNewGoalAmount('coin', coinDot)"
                    aspect-ratio="1"
                  ></v-img>
                  <v-img 
                    v-for="blankLED in (8 - newGoalTotal)"
                    @click="updateNewGoalAmount('blank', blankLED)"
                    :key="`blankLED-${blankLED}`"
                    :src="require('@/assets/BlankLED.png')" 
                    aspect-ratio="1"
                  ></v-img>
                </v-row>
                <p class="text-h2 font-weight-bold text-center mb-0" style="color: #9367E6">{{newGoalTotal}}</p>
                <p class="text-caption text-center my-0">Piggles Coins</p>
                <v-btn
                  @click="cancelNewGoal"
                  outlined
                  color="#A0E667"
                  class="ma-2"
                >
                  Cancel
                </v-btn>
                <v-btn
                  @click="saveNewGoal"
                  color="#A0E667"
                >
                  Save
                </v-btn>
              </v-card>
            </v-col>
            <v-col 
              v-else
              cols="12"
              md="3"
            >
              <v-card
                height="100%"
                min-height="200px"
                style="cursor: pointer;"
                class="pa-2 d-flex align-center justify-center"
                @click.native="createNewGoal()"
              >
                <p class="text-subtitle-1 font-weight-regular text-center mb-0">
                  Create a Custom Goal
                  <v-icon size="32" class="mx-auto" style="color: #9367E6" >mdi-plus-circle-outline</v-icon>
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>  
    </v-row>

    <!--Tasks and Behaviors--> 
    <v-row 
      justify="center"
      v-if="showTasksAndBehaviors"
    >
      <v-col cols="11">
          <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Tasks and/or Behaviors</p>
          <p class="text-body-1 font-weight-light mb-8">Your kid(s) will earn Piggles Coins every week based on the completion of the tasks and behaviors you select. Choose from our list, or feel free to add your own!</p>
          <div 
            class="mb-10"
            v-for="(kid, kidIndex) in kids"
            :key="`kidTasks&Behaviors-${kidIndex}`"
          >
            <v-row>
              <v-col cols="12" >
                <p>Select tasks and/or behaviors for {{kid.name}}</p>
                <taskchips
                  :defaultChips="tasks"
                  :kid="kid"
                  @selectTask="selectTask"
                />
              </v-col>
            </v-row>
          </div>
      </v-col>  
    </v-row>

    <!--Piggles Day--> 
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Our Piggles Day</p>
        <p class="text-body-1 font-weight-light mb-8">Piggles Day is when you and your kid(s) will review goal progress, reward Piggles Coins, and do the next lesson.</p>
        <v-row>
          <v-col cols="10" md="4">
            <v-select
              :items="days"
              v-model="rewardDay"
              label="Our Piggles Payday"
              solo
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
    <!-- Save --> 
    <v-row justify="center">
      <v-col cols="11">
        <v-row justify="end">
          <v-col >
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="#9367E6"
              class="ma-2 white--text float-right"
              @click="saveData"
            >
              Save My Settings
              <v-icon
                right
                dark
              >
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>

</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TaskChips from '@/components/TaskChips';
import { HashLoader } from '@saeris/vue-spinners';

const earningSystems = [
  {
    title: "Allowance",
    text: "The kid(s) will earn a set number of Piggles Coins on a weekly basis.", 
  },
  {
    title: "Incentive",
    text: "The kids(s) will earn a varying number of Piggles Coins on a weekly basis, for completing certain tasks and behaviors.",
  },
  {
    title: "Allowance + Incentive",
    text: "The kid(s) will earn both a set number of Piggles Coins on a weekly basis, and can earn more for completing certain tasks and behaviors.",
  }
];
const tasks = [
  "Do morning/bedtime routine",
  "Clean up our spaces",
  "Clear the table",
  "Show gratitude",
  "Persevere through challenges",
  "Share feelings calmly",
];
const behaviors = [
  "Show gratitude",
  "Help siblings",
  "Share with others",
];
const goals = [
  {name: "Video game", coins: 8, },
  {name: "Family movie night", coins: 6, },
  {name: "Ice cream", coins: 4, },
];

export default {
  name: "Settings",
  components: {
    taskchips: TaskChips,
    loader: HashLoader
  },
  data() {
    return {
      kids: [],
      earningSystem: null,
      earningSystems,
      tasks,
      behaviors,
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      allowanceOptions:[
        1,
        2,
        3,
        4
      ],
      allowanceAmount: null,
      rewardDay: "",
      goals,
      selectedGoals: [],
      loading: false,
      showGoalCreateTool: false,
      newGoalName: "",
      newGoalTotal: 1,
      showFirstSetupCompletion: false,
      saveFailed: false,
      e1: 0,
      rules: {
        customGoalTextCounter: value => value.length <= 40 || 'Max 40 characters'
      }
    }
  },
  // watch: {
  //   loader () {
  //       console.log("this.loader", this.loader)
  //       const l = this.loader
  //       console.log("this[l]", this[l])
  //       console.log("!this[l]", !this[l])
  //       this[l] = !this[l]

  //       setTimeout(() => (this[l] = false), 3000)

  //       this.loader = null
  //     },
  // },
  computed: {
    ...mapState(['device']),
    // combines the pre-set goals, and any custom goals that were created and saved by the user.
    allGoals: function() {
      let allGoals = [...this.goals];
      this.selectedGoals.forEach(goal => {
        if (!allGoals.some(g => g.name == goal.name)){
          allGoals.push(goal)
        }
      })
      return allGoals
    },
    showAllowance: function() {
      if (this.earningSystem != null) {
        return this.earningSystem == 'Allowance' || this.earningSystem == 'Allowance + Incentive';
      } 
      return false;
    },
    showTasksAndBehaviors: function() {
      if (this.earningSystem != null) {
        return this.earningSystem == 'Incentive' || this.earningSystem == 'Allowance + Incentive';
      } 
      return false;
    },
  },
  methods: {
    ...mapActions(['updateKids', 'updateDevice', 'displayMessage']),

    async showFinalSlide(){
      this.e1 = 7;
      const result = await this.saveData()
      if (result){
        this.showFirstSetupCompletion = true;
      } else {
        this.e1 = 6;
        this.saveFailed = true;
      }
    },

    // kid array mutation functions
    addKid() {
      const newKid = {
        name: "",
        goalIndex: this.kids.length,
        tasks: [],
        behaviors: []
      };
      this.kids.push(newKid);
    },
    removeKid(index) {
      this.kids = this.kids.filter((_kid, i) => i != index);
    },
    isKidInputDisabled: function(num) {
      return this.numberOfKids < num ? true : false
    },

    // earning system functions
    selectEarningSystem(index) {
      // throw warning if at least 1 kid's name isn't entered first
      if (this.kids.length != 0 && this.kids[0].name != ''){
        this.earningSystem = this.earningSystems[index].title;
      } else {
        this.displayMessage({ text: 'Please enter your kid\'s name before selecting an earning framework', color: 'error' });
      }
    },
    isEarningSystemSelected(earningSystem) {
      return  this.earningSystem && this.earningSystem == earningSystem.title;
    },

    // task functions
    selectTask(data) {
      const {kid, task} = data;
      // get the kid from the array of kids
      const selectedKid = this.kids.find(k => k.name == kid.name);
      // then update their tasks
      if (selectedKid.tasks.includes(task)) {
        selectedKid.tasks = selectedKid.tasks.filter((value) => value != task)
      } else {
        selectedKid.tasks.push(task);
      }
    },

    // behavior functions
    selectBehavior(data) {
      const {kid, behavior} = data;
      // get the kid from the array of kids
      const selectedKid = this.kids.find(k => k.name == kid.name);
      // then update their behaviors
      if (selectedKid.behaviors.includes(behavior)) {
        selectedKid.behaviors = selectedKid.behaviors.filter((value) => value != behavior)
      } else {
        selectedKid.behaviors.push(behavior);
      }
    },

    // goal functions
    selectGoal(index) {
      const goal = this.allGoals[index];

      if ((this.selectedGoals.filter(g => g.name == goal.name ).length > 0) ) {
        this.selectedGoals = this.selectedGoals.filter((g) => g.name != goal.name)
      } else {
        this.selectedGoals.push(goal);
      }
    },
    isGoalSelected(goal) {
      return  this.selectedGoals.length != 0 && (this.selectedGoals.filter(g => g.name == goal.name ).length > 0);
    },
    createNewGoal() {
      this.showGoalCreateTool = true
    },
    updateNewGoalAmount(coinType, newTotal){
      if (coinType == 'coin'){
        this.newGoalTotal = newTotal;
      } else {
        this.newGoalTotal = this.newGoalTotal + newTotal;
      }
    },
    saveNewGoal() {
      if (this.newGoalName == "") {
        this.displayMessage({ text: 'Enter a goal name before saving a custom goal.', color: 'error' });
      } else {
      this.goals.push({
        name: this.newGoalName, 
        coins: this.newGoalTotal
      });
      this.selectGoal(this.goals.length - 1);
      this.showGoalCreateTool = false;
      this.newGoalName = "";
      this.newGoalTotal = 1;
      }
    },
    cancelNewGoal() {
      this.newGoalName = "";
      this.newGoalTotal = 1;
      this.showGoalCreateTool = false;
    },

    // save data
    async saveData() {
      // show the loading spinner
      this.loading = true;
      
      // Check the data integrity.
      // TODO: clean this up. Possibly use joi to validate.
      // check that all kids names are filled in
      if (this.kids.some(kid => kid.name == "")){
        this.displayMessage({ text: 'Unable to save settings. Ensure all kid\'s names are filled in.', color: 'error' });
        this.loading = false;
        return false;
      }
      // check that there is an earning system set
      if (!this.earningSystem || this.earningSystem == ""){
        this.displayMessage({ text: 'Unable to save settings. Ensure an earning framework is selected.', color: 'error' });
        this.loading = false;
        return false;
      }
      // check that at least one goal is selected
      if (this.selectedGoals.length <= 0){
        this.displayMessage({ text: 'Unable to save settings. Ensure you\'ve added at least one goal to your Goal Catalog.', color: 'error' });
        this.loading = false;
        return false;
      }
      // check that a task or behavior is selected for each kid
      if (this.earningSystem == "Incentive" || this.earningSystem == "Allowance + Incentive"){
        if (this.kids.some(kid => kid.tasks.length + kid.behaviors.length <= 0 )) {
          this.displayMessage({ text: 'Unable to save settings. Ensure at least one task or behavior is selected for each kid.', color: 'error' });
          this.loading = false;
          return false;
        }
      }
      // check that a payday is selected
      if (this.rewardDay == ""){
        this.displayMessage({ text: 'Unable to save settings. Ensure you\'ve selected your Piggles Payday.', color: 'error' });
        this.loading = false;
        return false;
      }

      // organize the kids
      const kids = this.kids;

      // organize the settings
      const settings = {
        earningSystem: this.earningSystem,
        rewardDay: this.rewardDay,
      };

      // organize the rewards
      const goalCatalog = this.selectedGoals;

      // organize the status
      const status = {
        firstLogin: this.firstLogin,
        completedPreferences: true
      };

      const device = {
        deviceId: this.device.deviceId,
        deviceCode: this.device.deviceCode,
        piggySleep: this.device.piggySleep,
        goals: this.device.goals,
        kids,
        settings,
        goalCatalog,
        status
      }
      if (await this.updateDevice(device)) {
        this.loading = false;
        this.showLessonPointer = true;
        this.displayMessage({ text: 'Successfully saved your family\'s values.', color: 'info' });
        return true;
      } else {
        this.loading = false;
        this.displayMessage({ text: 'Failed to save values. Please refresh and try again.', color: 'error' });
        return false;
      }
    },

    // initialize data from store
    initialize() {
      if (this.device.kids) {
        this.kids = this.device.kids;
      } else {
        this.kids = [
          {
            name: "",
            goalIndex: 0,
            behaviors: [],
            tasks: []
          }
        ];
      }

      if (this.device.settings) {
        this.earningSystem = this.device.settings.earningSystem;
        this.rewardDay = this.device.settings.rewardDay;
        this.allowanceAmount = this.device.settings.goalAllowance;
      } else {
        this.earningSystem = ""
        this.rewardDay = "";
        this.allowanceAmount = null;
      }

      if (this.device.goalCatalog) {
        this.selectedGoals = this.device.goalCatalog;
      } else {
        this.selectedGoals = []
      }

    }
  },
  mounted() {
    this.initialize();
  }

};
</script>
