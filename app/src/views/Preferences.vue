<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h5 my-10" style="color: #9367E6">This guide will customize the Digi-Pig experience to your familiy's unique situation and values. Let's get started!</p>
        
        <!-- <p class="text-h6 font-weight-regular mb-0">How many of your kids will you use the Digi-Pig experience with?</p>
        <p class="text-body-2 font-weight-regular mb-8">Currently, we support up to 4 kids in the system at a time.</p>
        <v-row justify="center">
          <v-col
              v-for="n in 4"
              :key="`${n}-kids`"
              cols="6"
              sm="3"
              md="2"
              class="mx-auto"
              style="display: inline"
          >
            <v-btn
              v-if="numberOfKids == n"
              class="mx-2 mb-10"
              fab
              dark
              x-large
              color="#9367E6"
              @click="createKids(n)"
            >
              {{n}}
            </v-btn>
            <v-btn
              v-else
              class="mx-2 mb-10"
              fab
          
              x-large
              color="#F7F8FA"
              @click="createKids(n)"
            >
              {{n}}
            </v-btn>
          </v-col>
        </v-row>

        <p class="text-h6 font-weight-regular">What are your kid's names?</p>
        <v-text-field
            :label="`Kid 1 Name`"
            v-model="kid1Name"
            solo
            dense
            :disabled="isKidInputDisabled(1)"
          ></v-text-field>
        <v-text-field
            :label="`Kid 2 Name`"
            v-model="kid2Name"
            solo
            dense
            :disabled="isKidInputDisabled(2)"
          ></v-text-field>
        <v-text-field
            :label="`Kid 3 Name`"
            v-model="kid3Name"
            solo
            dense
            :disabled="isKidInputDisabled(3)"
          ></v-text-field>
        <v-text-field
            :label="`Kid 4 Name`"
            v-model="kid4Name"
            solo
            dense
            :disabled="isKidInputDisabled(4)"
          ></v-text-field> -->
        
        <p class="text-h6 font-weight-regular mb-0">Enter your kids names.</p>
        <v-text-field
          label="Kid one"
          v-model="kid.name"
          solo
          dense
          v-for="(kid, i) in kids"
          :key="`kid-${i}`"
        ></v-text-field>
        <v-btn
          color="#A0E667"
          class="ma-2 white--text"
          @click="addKiddo"
        >
          Add another kiddo
          <v-icon
            right
            dark
          >
            mdi-plus
          </v-icon>
        </v-btn>
        <v-btn
          color="red"
          class="ma-2 white--text"
          @click="removeKiddo"
        >
          Remove last kiddo
          <v-icon
            right
            dark
          >
            mdi-minus
          </v-icon>
        </v-btn>
        
        <p class="text-h6 font-weight-regular mt-10 mb-0">Lets set up your family's earning framework.</p>
        <p class="text-body-2 font-weight-regular mb-8">Parents, let’s think about how you want your kids to receive Piggles coins, which is our fake currency, represented in the app and by lights appearing on the Digipig. Below are three common frameworks to choose from. Pick one and we will help you set it up.</p>
        <v-container class="mb-10">
          <v-row justify="center">
            <v-col 
              cols="12"
              md="4"
              v-for="(earningSystem, i) in earningSystems"
              :key="earningSystem.title"
            >
              <v-card 
                style="border: 2px solid #48A182"
                :color="isEarningSystemSelected(earningSystem)"
                class="pa-2"
                min-height="100%"
                @click="selectEarningSystem(i)"
              >
                <p class="text-subtitle-1 font-weight-medium text-center">{{earningSystem.title}}</p>
                <p class="text-body-2 text-center">{{earningSystem.text}}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <template v-if="showTasksAndBehaviors">
          <p class="text-h6 font-weight-regular">Select tasks and/or behaviors you would like your kid(s) to acheive.</p>
          <v-container 
            class="mb-10"
            v-for="(kid, kidIndex) in kids"
            :key="`kidTasks&Behaviors-${kidIndex}`"
          >
            <p>{{kid.name}}'s Tasks</p>
            <v-row justify="center" class="mb-5">
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
                  color=#F7F8FA
                  class="pa-2"
                  @click="createTask()"
                >

                  <p class="text-body-2 text-center mb-0">
                    <v-icon>mdi-plus</v-icon>Custom Task
                  </p>
                </v-card>
              </v-col>
            </v-row>

            <p>{{kid.name}}'s Behaviors</p>
            <v-row justify="center" class="mb-5">
              <v-col 
                cols="6"
                md="3"
                v-for="(behavior, behaviorIndex) in behaviors"
                :key="behavior"
              >
                <v-card
                  style="border: 2px solid #9367E6"
                  :color="isBehaviorSelected(kidIndex, behavior)"
                  class="pa-2"
                  @click="selectBehavior(kidIndex, behaviorIndex)"
                >
                  <p class="text-body-2 text-center mb-0">{{behavior}}</p>
                </v-card>
              </v-col>
              <v-col 
                cols="6"
                md="3"
              >
                <v-card
                  style="border: 2px solid #9367E6"
                  color=#F7F8FA
                  class="pa-2"
                  @click="createBehavior()"
                >

                  <p class="text-body-2 text-center mb-0">
                    <v-icon>mdi-plus</v-icon>Custom Behavior
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </template>


        <p class="text-h6 font-weight-regular">Create your Goal Catalog. </p>
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
                style="border: 2px solid #48A182"
                :color="isGoalSelected(goal)"
                class="pa-2"
                @click="selectGoal(i)"
              >
                <p class="text-body-2 text-center mb-0">{{goal.name}}</p>
                <p class="text-caption mb-0">{{goal.description}}</p>
                <p class="text-body-2 text-center mb-0">{{goal.coins}}<v-icon color="#FAC432">mdi-coin</v-icon></p>
              </v-card>
            </v-col>
            <v-col 
              cols="6"
              md="3"
            >
              <v-card
                style="border: 2px solid #48A182"
                class="pa-2"
                @click="createGoal()"
              >
                <v-icon>mdi-plus</v-icon>
                <p class="text-body-2 text-center mb-0">
                  Create a Custom Goal
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <p class="text-h6 font-weight-regular">Pick your payday.</p>
        <p class="text-body-2 font-weight-regular mb-8">We recommond you sit down with your kids on this day each week to review their progress towards their goals.</p>
        <v-select
          :items="days"
          label="Pick your payday"
          solo
        ></v-select>

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
      loading: false
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
    addKiddo() {
      const newKid = {name: "", tasks: [], behaviors: []};
      this.kids.push(newKid);
    },
    removeKiddo() {
      this.kids.pop();
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
      return  this.earningSystem && this.earningSystem == earningSystem.title ? '#48A182' : '#F7F8FA'
    },
    isTaskSelected(kidIndex, task) {
      return  this.kids[kidIndex].tasks.length != 0 && this.kids[kidIndex].tasks.includes(task) ? '#A0E667' : '#F7F8FA'
    },
    isBehaviorSelected(kidIndex, behavior) {
      return  this.kids[kidIndex].behaviors.length != 0 && this.kids[kidIndex].behaviors.includes(behavior) ? '#9367E6' : '#F7F8FA'
    },
    isGoalSelected(goal) {
      return  this.selectedGoals.length != 0 && (this.selectedGoals.filter(g => g.name == goal.name ).length > 0) ? '#48A182' : '#F7F8FA'
    },
    createTask() {
      this.tasks.push("New task is added")
    },
    createBehavior() {
      this.behaviors.push("New behavior is added")
    },
    createGoal() {
      this.goals.push({name: "New Goal", description: "Happy little description", coins: 8})
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
