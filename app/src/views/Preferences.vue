<template>
  <v-container >
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h5 font-weight-regular my-10">👋 Hi there! We're excited you're on this journey with us. </p>
        <p class="text-h5 font-weight-regular my-10" >This guide will help you customize the Digi-Pig experience to your familiy's unique situation and values. </p>
        <p class="text-h5 font-weight-regular my-10" style="color: #A0E667;">Let's get started!</p>
        
        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Enter your kid(s) names.</p>
        <p class="text-body-2 font-weight-regular mb-8">Currently, we support up to 4 kids in the system at a time.</p>
        <v-row no-gutters>
          <v-col cols="9" md="4">
            <v-text-field
              label="Kid one"
              v-model="kid.name"
              solo
              dense
              append-outer-icon="mdi-close-circle-outline"
              @click:append-outer="removeKiddo(i)"
              v-for="(kid, i) in kids"
              :key="`kid-${i}`"
            ></v-text-field>
          </v-col >
        </v-row >
        <v-btn
          color="#A0E667"
          class="white--text"
          @click="addKiddo"
          :disabled="kids.length >= 4"
        >
          Add kid
          <v-icon
            right
            dark
          >
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>  
    </v-row>
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mt-10 mb-0" style="color: #9367E6">Select your family's earning framework.</p>
        <p class="text-body-2 font-weight-regular mb-8">Parents, let’s think about how you want your kids to receive Piggles coins, which is our in-app currency, represented by lights appearing on the Digipig. Below are three common frameworks to choose from. Pick one and we will help you set it up.</p>
        <v-container class="mb-10">
          <v-row justify="center">
            <v-col 
              cols="12"
              md="4"
              v-for="(earningSystem, i) in earningSystems"
              :key="earningSystem.title"
            >
              <v-card 
                style="border: 2px solid #9367E6"
                :color="isEarningSystemSelected(earningSystem) ? '#9367E6' : '#FFFFFF'"
                
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
    <v-row 
      justify="center"
      v-if="showTasksAndBehaviors"
    >
      <v-col cols="11">
          <p class="text-h6 font-weight-regular" style="color: #9367E6">Select tasks and/or behaviors you would like your kid(s) to acheive.</p>
          <div 
            class="mb-10"
            v-for="(kid, kidIndex) in kids"
            :key="`kidTasks&Behaviors-${kidIndex}`"
          >
            <v-row>
              <v-col cols="12" md="6">
                <p>Select tasks for {{kid.name}}</p>
                <v-chip
                  class="ma-2"
                  color="#48A182"
                  v-for="(task, taskIndex) in tasks"
                  :key="`${kid.name}-${task}`"
                  :outlined="!isTaskSelected(kidIndex, task)"
                  :text-color="isTaskSelected(kidIndex, task) ? '#FFFFFF': '#48A182'"
                  @click="selectTask(kidIndex, taskIndex)"
                >
                  <v-icon v-if="isTaskSelected(kidIndex, task)">mdi-check</v-icon>
                  {{task}}
                </v-chip>
                <v-chip
                  v-if="showNewTaskChip"
                  class="ma-2"
                  color="#48A182"
                  outlined
                >
                  <v-text-field
                    label="New Task"
                    v-model="newTaskChip"
                    single-line
                    
                    dense
                    style="position: relative; top: 9px;"
                    
                  ></v-text-field>
                  <v-icon @click="createTask" >mdi-plus</v-icon>
                </v-chip>
                <v-chip
                  v-else
                  class="ma-2"
                  color="#48A182"
                  outlined
                  @click="showNewTaskChip = true"
                >
                  <v-icon >mdi-plus</v-icon>
                  Custom Task
                </v-chip>
              </v-col>
              <v-col cols="12" md="6">
                <p>Select behaviors for {{kid.name}}</p>
                <v-chip
                  class="ma-2"
                  color="#48A182"
                  v-for="(behavior, behaviorIndex) in behaviors"
                  :key="`${kid.name}-${behavior}`"
                  :outlined="!isBehaviorSelected(kidIndex, behavior)"
                  :text-color="isBehaviorSelected(kidIndex, behavior) ? '#FFFFFF' : '#48A182' "
                  @click="selectBehavior(kidIndex, behaviorIndex)"
                >
                  <v-icon v-if="isBehaviorSelected(kidIndex, behavior)">mdi-check</v-icon>
                  {{behavior}}
                </v-chip>
                <v-chip
                  class="ma-2"
                  color="#48A182"
                  outlined
                  @click="createBehavior()"
                >
                  <v-icon >mdi-plus</v-icon>
                  Custom Behavior
                </v-chip>
              </v-col>
            </v-row>


            <!-- <v-row justify="center" class="mb-5">
              <v-col 
                cols="10"
                md="3"
                v-for="(task, taskIndex) in tasks"
                :key="task"
              >
                <v-card
                  style="border: 2px solid #A0E667"
                  :color="isTaskSelected(kidIndex, task)"
                  class="pa-2"
                  @click="selectTask(kidIndex, taskIndex)"
                >
                  <p class="text-body-2 text-center mb-0">{{task}}</p>
                </v-card>
              </v-col>
              <v-col 
                cols="8"
                md="3"
              >
                <v-card
                  style="border: 2px solid #A0E667"
                  color=#FFFFFF
                  class="pa-2"
                  @click="createTask()"
                >

                  <p class="text-body-2 text-center mb-0">
                    <v-icon>mdi-plus</v-icon>Custom Task
                  </p>
                </v-card>
              </v-col>
            </v-row> -->


          </div>
      </v-col>  
    </v-row>
    <v-row justify="center">
      <v-col cols="11">

        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Create your Goal Catalog. </p>
        <p class="text-body-2 font-weight-regular mb-8">The Goal Catalog is a list of goals that you would like your kids to work towards. In lesson 1, your kids will choose their own goal from your customized Goal. </p>
        <v-container class="mb-10">
          <v-row justify="center" class="mb-5">
            <v-col 
              cols="6"
              md="3"
              v-for="(goal, i) in goals"
              :key="goal.name + i"
            >
              <v-card
                class="pa-2"
                height="100%"
                :style="{border: '2px solid #9367E6', fontColor: isGoalSelected(goal) ? '#9367E6' : '#FFFFFF' }"
                :color="isGoalSelected(goal) ? '#9367E6' : '#FFFFFF'"
                @click="selectGoal(i)"
              >
                <p class="text-subtitle-1 text-center mb-0">{{goal.name}}</p>
                <p class="text-caption mb-0 text-center px-2">{{goal.description}}</p>
                <!--TODO: oof this is centered weird --> 
                <v-card-title class="pl-16 mb-0">
                  <p class="text-h2 font-weight-bold text-center mb-0">{{goal.coins}}
                    <!-- <v-img 
                      :src="require('@/assets/PigglesCoin.png')" 
                      aspect-ratio="1"
                      width="50px"
                    ></v-img> -->
                  </p>
                  <v-avatar size="50px">
                    <img
                      alt="coin"
                      :src="require('@/assets/PigglesCoin.png')" 
                    >
                  </v-avatar>
                </v-card-title>
                <p class="text-caption text-center my-0">Piggles Coins</p>
              </v-card>
            </v-col>
            <v-col 
              cols="6"
              md="3"
            >
              <v-card
                v-if="showGoalCreateTool"
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
                <v-text-field
                  label="Description"
                  v-model="newGoalDescription"
                  dense
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Piggles Coins"
                  v-model="newGoalTotal"
                  dense
                  outlined
                ></v-text-field>
                <v-btn
                  @click="cancelNewGoal"
                  outlined
                  color="#9367E6"
                  class="ma-2"
                >
                  Cancel
                </v-btn>
                <v-btn
                  @click="saveNewGoal"
                  color="#9367E6"
                >
                  Save
                </v-btn>
              </v-card>
              <v-card
                v-else
                height="100%"
                style="border: 2px solid #9367E6"
                class="pa-2 d-flex align-center justify-center"
                @click="createGoal()"
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
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Pick your Piggles Payday.</p>
        <p class="text-body-2 font-weight-regular mb-8">We recommond you sit down with your kids on this day each week to review their progress towards their goals.</p>
        <v-select
          :items="days"
          label="Our Piggles Payday"
          solo
        ></v-select>
        <v-row justify="right" v-if="showLessonPointer">
          <v-col >
            <v-btn
              color="#A0E667"
              class="ma-2 white--text float-right"
              to="/lessons"
            >
              Start lesson 1
              <v-icon
                right
                dark
              >
                mdi-arrow-right-bold
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="right">
          <v-col >
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="#A0E667"
              class="ma-2 white--text float-right"
              @click="saveKids"
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

const earningSystems = [
  {
    title: "Expectation Free",
    text: "The child(ren) will earn things on a regular basis but it will not be tied to specific chores or behaviors. Specific chores and behaviors are just expectations of being part of our family.", 
  },
  {
    title: "Incentive Based",
    text: "I want to show my child(ren) they must work to earn things. I will incentivize certain chores and/or behaviors and keep track of those things",
  },
  {
    title: "Both",
    text: "There are standard chores and/or behaviors that are expected to be part of the family, but I want to also provide incentives for going above and beyond.",
  }
];
const tasks = [
  "Making the bed",
  "Clearing the table",
  "Doing bedtime routine",
  "Unload the dishwasher",
  "Mow the lawn",
  "Vacuum the house",
  "Wash the windows",
];
const behaviors = [
  "Help your siblings",
  "Sharing with others",
  "Helping without being asked",
  "Using kind words",
  "Not biting your nails",
  "Waiting your turn",
  "Do the right thing",
];
const goals = [
  {name: "Video Game", description: "Pick a video game up to $10 value", coins: 8, },
  {name: "Stay up Late", description: "Kid gets to stay up 1 hour past their bedtime", coins: 8, },
  {name: "Ice Cream", description: "Ice cream party! Scoop there it is! ", coins: 8, },
  {name: "Extra Screen Time", description: "15 minutes of extra screen time", coins: 8, },
  {name: "Movie Night", description: "Family watches a movie of the kid's choice", coins: 8, },
  {name: "Daddy Date", description: "Dad and kid spend 1x1 time together", coins: 8, },
  {name: "Mommy Date", description: "Mom and kid spend 1x1 time together", coins: 8, },
  {name: "New Book", description: "Choose a new book from Barnes & Noble", coins: 8, },
  {name: "New Puzzle", description: "Choose a new puzzle from Target", coins: 8, },
  {name: "Donate To Charity", description: "Donate $10 to a charity of the kids choice", coins: 8, },
  {name: "Sleepover", description: "Invite your friends to a sleepover", coins: 8, },
];

export default {
  name: "Preferences",
  components: {},
  data() {
    return {
      kids: [],
      earningSystem: null,
      earningSystems,
      tasks,
      selectedTasks: [],
      behaviors,
      selectedBehaviors: [],
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      rewardDay: "",
      goals,
      selectedGoals: [],
      // loader: null,
      loading: false,
      showGoalCreateTool: false,
      newGoalName: "",
      newGoalDescription: "",
      newGoalTotal: "",
      newTaskChip: "",
      showNewTaskChip: false,
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
    showTasksAndBehaviors: function() {
      if (this.earningSystem != null) {
        return this.earningSystem == 'Incentive Based' || this.earningSystem == 'Both';
      } 
      return false;
    }
  },
  methods: {
    ...mapActions(['updateKids', 'updateDevice', 'displayMessage']),
    // createKids(numberOfKids) {
    //   this.kids = [];
    //   for (let i = 0; i < numberOfKids; i++) {
    //     const newKid = {name: ""}
    //     this.kids.push(newKid);
    //   }
    // },
    cancelNewGoal() {
      this.newGoalName = "",
      this.newGoalDescription = "",
      this.newGoalTotal = "",
      this.showGoalCreateTool = false
    },
    addKiddo() {
      const newKid = {name: "", tasks: [], behaviors: []};
      this.kids.push(newKid);
    },
    removeKiddo(index) {
      this.kids = this.kids.filter((_kid, i) => i != index);
    },
    isKidInputDisabled: function(num) {
      return this.numberOfKids < num ? true : false
    },
    createKids(num) {
      this.numberOfKids = num;
    },
    selectEarningSystem(index) {
      this.earningSystem = this.earningSystems[index].title;
    },
    selectTask(kidIndex, taskIndex) {
      const task = this.tasks[taskIndex];
      const kid = this.kids[kidIndex];
      if (kid.tasks.includes(task)) {
        kid.tasks = kid.tasks.filter((value) => value != task)
      } else {
        kid.tasks.push(task);
      }
    },
    selectBehavior(kidIndex, behaviorIndex) {
      const behavior = this.behaviors[behaviorIndex];
      const kid = this.kids[kidIndex];
      if (kid.behaviors.includes(behavior)) {
        kid.behaviors = kid.behaviors.filter((value) => value != behavior)
      } else {
        kid.behaviors.push(behavior);
      }
    },
    selectGoal(index) {
      const goal = this.goals[index];
      if ((this.selectedGoals.filter(g => g.name == goal.name ).length > 0) ) {
        this.selectedGoals = this.selectedGoals.filter((g) => g.name != goal.name)
      } else {
        this.selectedGoals.push(goal);
      }
    },
    isEarningSystemSelected(earningSystem) {
      return  this.earningSystem && this.earningSystem == earningSystem.title;
    },
    isTaskSelected(kidIndex, task) {
      return  this.kids[kidIndex].tasks.length != 0 && this.kids[kidIndex].tasks.includes(task);
    },
    isBehaviorSelected(kidIndex, behavior) {
      return  this.kids[kidIndex].behaviors.length != 0 && this.kids[kidIndex].behaviors.includes(behavior);
    },
    isGoalSelected(goal) {
      return  this.selectedGoals.length != 0 && (this.selectedGoals.filter(g => g.name == goal.name ).length > 0);
    },
    createTask() {
      this.tasks.push(this.newTaskChip)
      this.showNewTaskChip = false
    },
    createBehavior() {
      this.behaviors.push("New behavior is added")
    },
    createGoal() {
      this.showGoalCreateTool = true
    },
    saveNewGoal() {
      this.goals.push({
        name: this.newGoalName, 
        description: this.newGoalDescription, 
        coins: this.newGoalTotal
      })
      console.log("this.showGoalCreateTool", this.showGoalCreateTool)
      this.showGoalCreateTool = false,
      console.log("this.showGoalCreateTool", this.showGoalCreateTool)
      this.newGoalName = "",
      this.newGoalDescription = "",
      this.newGoalTotal = ""
    },
    async saveKids() {
      this.loading = true;
      let kids = this.kids.map((kid, i) => {
        return {
          name: kid.name,
          goalIndex: i,
          behaviors: kid.behaviors,
          tasks: kid.tasks
        }
      })
      kids = kids.filter(kid => kid.name != "")     

      let preferences = {
        earningSystem: this.earningSystem,
        rewardDay: "Sunday", 
      }

      let rewards = this.selectedGoals;

      const device = {
        deviceId: this.device.deviceId,
        deviceCode: this.device.deviceCode,
        piggySleep: this.device.piggySleep,
        goals: this.device.goals,
        kids,
        preferences,
        rewards
      }

      if (await this.updateDevice(device)) {
        this.loading = false;
        this.showLessonPointer = true;
        this.displayMessage({ text: 'Successfully added kids', color: 'info' });
      } else {
        this.loading = false;
        this.displayMessage({ text: 'Failed to add kids', color: 'error' });
      }
    },
    initialize() {
      if (this.device.kids) {
        this.kids = this.device.kids;
      } else {
        this.kids = [];
      }

      if (this.device.preferences) {
        this.earningSystem = this.device.preferences.earningSystem;
        this.rewardDay = this.device.preferences.rewardDay;
      } else {
        this.earningSystem = ""
        this.rewardDay = "";
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
