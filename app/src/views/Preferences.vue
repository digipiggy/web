<template>
  <v-container >
    <!--Title Text & Kid Entry--> 
    <v-row justify="center" class="mb-8">
      <v-col cols="11">
        <p class="text-h5 font-weight-regular my-10">👋 Hi there! We're excited you're on this journey with us. </p>
        <p class="text-h5 font-weight-regular my-10" >This guide will help you customize the Digi-Pig experience to your familiy's unique situation and values. </p>
        <p class="text-h5 font-weight-regular my-10" style="color: #A0E667;">Let's get started!</p>
        
        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Enter your kid(s) names.</p>
        <p class="text-body-2 font-weight-regular mb-6">Currently, we support up to 4 kids in the system at a time.</p>
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
          color="#A0E667"
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
    <!--Earning Framework--> 
    <v-row justify="center" class="mb-8">
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mt-10 mb-0" style="color: #9367E6">Select your family's earning framework.</p>
        <p class="text-body-2 font-weight-regular mb-8">Parents, let’s think about how you want your kids to receive Piggles coins, which is our in-app currency, represented by lights appearing on the Digipig. Below are three common frameworks to choose from. Pick one and we will help you set it up.</p>
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
        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Create your Goal Catalog. </p>
        <p class="text-body-2 font-weight-regular mb-8">The Goal Catalog is your curated list of goals that your kids can work towards. Select the goals that you would like to include in your catalog from our pre-defined list, or create your own! In lesson 1, your kids will choose their first goal from your customized Goal Catalog. </p>
        <v-container class="mb-10">
          <v-row justify="center" class="mb-5">
            <v-col 
              cols="6"
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
                <p class="text-caption pl-1 ">Reward Goal</p>
                <v-row class="mb-5 px-4">
                  <v-img 
                    v-for="coinDot in goal.coins"
                    :key="`coinDot-${coinDot}`"
                    :src="require('@/assets/PigglesCoin.png')" 
                    aspect-ratio="1"
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
                <p class="text-caption pl-1 ">Reward Goal</p>
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
              cols="6"
              md="3"
            >
              <v-card
                height="100%"
                style="border: 2px solid #9367E6; cursor: pointer;"
                class="pa-2 d-flex align-center justify-center"
                @click.native="createNewGoal()"
              >
                <p class="text-body-2 text-center mb-0">
                  <v-icon class="text-body-2 mx-auto" >mdi-plus</v-icon>
                  Create a Custom Goal
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
          <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Select tasks and/or behaviors you would like your kid(s) to acheive.</p>
          <p class="text-body-2 font-weight-regular mb-8">Your kid(s) will earn Piggles coins every week based on the completion of the tasks and behaviors you select. Choose from our list, or feel free to add your own!</p>
          <div 
            class="mb-10"
            v-for="(kid, kidIndex) in kids"
            :key="`kidTasks&Behaviors-${kidIndex}`"
          >
            <v-row>
              <v-col cols="12" md="6">
                <p>Select tasks for {{kid.name}}</p>
                <taskchips
                  :defaultChips="tasks"
                  :kid="kid"
                  @selectTask="selectTask"
                />
              </v-col>
              <v-col cols="12" md="6">
                <p>Select behaviors for {{kid.name}}</p>
                  <behaviorChips
                    :defaultChips="behaviors"
                    :kid="kid"
                    @selectBehavior="selectBehavior"
                  />
              </v-col>
            </v-row>
          </div>
      </v-col>  
    </v-row>
    <!--Allowance--> 
    <v-row 
      justify="center"
      v-if="showAllowance"
      class="mb-8"
    >
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mt-10 mb-0" style="color: #9367E6">Set your weekly coin allowance</p>
        <p class="text-body-2 font-weight-regular mb-8">By selecting {{earningSystem}}, you are committing to give your kid(s) a set number of piggles coins each week.</p>
        <v-row >
          <v-col cols="8" md="4">
            <v-select
              :items="allowanceOptions"
              v-model="allowanceAmount"
              label="Coins earned per week"
              outlined
              background-color="#FFFFFF"
            ></v-select>
          </v-col>  
        </v-row>
      </v-col>  
    </v-row>
    <!--Payday--> 
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Pick your Piggles Payday.</p>
        <p class="text-body-2 font-weight-regular mb-8">We recommend you sit down with your kids on this day each week to review their progress towards their goals.</p>
        <v-select
          :items="days"
          v-model="rewardDay"
          label="Our Piggles Payday"
          solo
        ></v-select>
      </v-col>
    </v-row>
    <!-- Save --> 
    <v-row justify="center">
      <v-col cols="11">
        <v-row justify="end" v-if="showLessonPointer">
          <v-col cols="12">
            <v-card class="pa-5" >
              <p lass="text-h6 font-weight-regular mb-0">🚀 You're all set!</p>
              <p class="text-body-2 font-weight-regular mb-4">When you're ready, you can begin lesson 1 with your kid(s).</p>
              <v-btn
                color="#A0E667"
                class="ma-2 white--text"
                to="/lessons"
              >
                Start lesson 1
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col >
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="#A0E667"
              class="ma-2 white--text float-right"
              @click="saveData"
            >
              Save My Preferences
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
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TaskChips from '@/components/TaskChips';
import BehaviorChips from '@/components/BehaviorChips';

const earningSystems = [
  {
    title: "Expectation Free",
    text: "The kid(s) will earn things on a regular basis but it will not be tied to specific chores or behaviors. Specific chores and behaviors are just expectations of being part of our family.", 
  },
  {
    title: "Incentive Based",
    text: "I want to show my kids(s) they must work to earn things. I will incentivize certain chores and/or behaviors and keep track of those things",
  },
  {
    title: "Both",
    text: "There are standard chores and/or behaviors that are expected to be part of the family, but I want to also provide incentives for going above and beyond.",
  }
];
const tasks = [
  "Fold Laundry",
  "Feed pets",
  "Pick up toys",
  // "Put laundry in hamper",
  // "Dust",
  // "Help with meal prep",
  // "Making the bed",
  // "Clearing the table",
  // "Doing bedtime routine",
  // "Vacuum or sweep"
];
const behaviors = [
  "Show gratitude",
  "Help siblings",
  "Share with others",
  // "Help parents",
  // "Use kind words",
  // "Wait your turn",
  // "Persevere through challenges",
  // "Follow directions",
  // "Use calming strategies",
  // "Express feelings calmly"
];
const goals = [
  {name: "Video Game", coins: 8, },
  {name: "Stay up Late", coins: 6, },
  {name: "Ice Cream", coins: 4, },
  // {name: "Extra Screen Time", coins: 7, },
  // {name: "Movie Night", coins: 6, },
  // {name: "Daddy Date", coins: 5, },
  // {name: "Mommy Date", coins: 5, },
  // {name: "New Book", coins: 8, },
  // {name: "New Puzzle", coins: 7, },
  // {name: "Donate To Charity", coins: 6, },
  // {name: "Sleepover",  coins: 8, },
];

export default {
  name: "Preferences",
  components: {
    taskchips: TaskChips,
    behaviorChips: BehaviorChips
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
      showLessonPointer: false
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
        return this.earningSystem == 'Expectation Free' || this.earningSystem == 'Both';
      } 
      return false;
    },
    showTasksAndBehaviors: function() {
      if (this.earningSystem != null) {
        return this.earningSystem == 'Incentive Based' || this.earningSystem == 'Both';
      } 
      return false;
    },
  },
  methods: {
    ...mapActions(['updateKids', 'updateDevice', 'displayMessage']),

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
      console.log('index', index)
      const goal = this.goals[index];
      
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
      // TODO: clean this up. Possbily use joi to validate.
      // check that all kids names are filled in
      if (this.kids.some(kid => kid.name == "")){
        this.displayMessage({ text: 'Unable to save settings. Ensure all kid\'s names are filled in.', color: 'error' });
        this.loading = false;
        return;
      }
      // check that there is an earning system set
      if (!this.earningSystem || this.earningSystem == ""){
        this.displayMessage({ text: 'Unable to save settings. Ensure an earning framework is selected.', color: 'error' });
        this.loading = false;
        return;
      }
      // check that an allowance is set
      // TODO: use constants here
      if ((this.earningSystem == "Expectation Free" || this.earningSystem == "Both") && !this.allowanceAmount){
        this.displayMessage({ text: 'Unable to save settings. Ensure your weekly coin allowance is set.', color: 'error' });
        this.loading = false;
        return;
      }
      // check that a task or behavior is selected for each kid
      if (this.earningSystem == "Incentive Based" || this.earningSystem == "Both"){
        if (this.kids.some(kid => kid.tasks.length + kid.behaviors.length <= 0 )) {
          this.displayMessage({ text: 'Unable to save settings. Ensure at least one task or behavior is selected for each kid.', color: 'error' });
          this.loading = false;
          return;
        }
      }
      // check that at least one goal is selected
      if (this.selectedGoals.length <= 0){
        this.displayMessage({ text: 'Unable to save settings. Ensure you\'ve added at least one goal to your Goal Catalog.', color: 'error' });
        this.loading = false;
        return;
      }
      // check that a payday is selected
      if (this.rewardDay == ""){
        this.displayMessage({ text: 'Unable to save settings. Ensure you\'ve selected your Piggles Payday.', color: 'error' });
        this.loading = false;
        return;
      }

      // organize the kids
      const kids = this.kids;

      // organize the preferences
      const goalAllowance = (this.earningSystem == "Expectation Free" || this.earningSystem == "Both") ? this.allowanceAmount : null;
      const preferences = {
        earningSystem: this.earningSystem,
        rewardDay: this.rewardDay,
        goalAllowance
      };

      // organize the rewards
      const rewards = this.selectedGoals;

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
        preferences,
        rewards,
        status
      }
      if (await this.updateDevice(device)) {
        this.loading = false;
        this.showLessonPointer = true;
        this.displayMessage({ text: 'Successfully saved your family\'s values.', color: 'info' });
      } else {
        this.loading = false;
        this.displayMessage({ text: 'Failed to save values. Please refresh and try again.', color: 'error' });
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

      if (this.device.preferences) {
        this.earningSystem = this.device.preferences.earningSystem;
        this.rewardDay = this.device.preferences.rewardDay;
        this.allowanceAmount = this.device.preferences.goalAllowance;
      } else {
        this.earningSystem = ""
        this.rewardDay = "";
        this.allowanceAmount = null;
      }

      if (this.device.rewards) {
        this.selectedGoals = this.device.rewards;
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
