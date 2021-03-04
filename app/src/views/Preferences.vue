<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h5 my-10" style="color: #9367E6">This guide will customize the Digi-Pig experience to your familiy's unique situation and values. Let's get started!</p>
        
        <p class="text-h6 font-weight-regular mb-0">How many of your kids will you use the Digi-Pig experience with?</p>
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
          ></v-text-field>
        
        <p class="text-h6 font-weight-regular mt-10 mb-0">Lets set up your family's earning framework.</p>
        <p class="text-body-2 font-weight-regular mb-8">Parents, let’s think about how you want your kids to receive Piggles coins, which is our fake currency, represented in the app and by lights appearing on the Digipig. Below are three common frameworks to choose from. Pick one and we will help you set it up.</p>
        <v-container class="mb-10">
          <v-row justify="center">
            <v-col 
              cols="12"
              md="4"
              v-for="(rm, i) in rewardMethods"
              :key="rm.title"
            >
              <v-card 
                style="border: 2px solid #48A182"
                :color="isRewardMethodSelected(rm)"
                class="pa-2"
                min-height="100%"
                @click="selectRewardMethod(i)"
              >
                <p class="text-subtitle-1 font-weight-medium text-center">{{rm.title}}</p>
                <p class="text-body-2 text-center">{{rm.text}}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <template v-if="showTasksAndBehaviors">
          <p class="text-h6 font-weight-regular">Select three tasks and/or behaviors you would like your kids to acheive.</p>
          <v-container class="mb-10">
            <p>Tasks</p>
            <v-row justify="center" class="mb-5">
              <v-col 
                cols="10"
                md="3"
                v-for="(task, i) in tasks"
                :key="task"
              >
                <v-card
                  style="border: 2px solid #A0E667"
                  :color="isTaskSelected(task)"
                  class="pa-2"
                  @click="selectTask(i)"
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
                  class="pa-2"
                  @click="createTask()"
                >

                  <p class="text-body-2 text-center mb-0">
                    <v-icon>mdi-plus</v-icon>Custom Task
                  </p>
                </v-card>
              </v-col>
            </v-row>

            <p>Behaviors</p>
            <v-row justify="center" class="mb-5">
              <v-col 
                cols="6"
                md="3"
                v-for="(behavior, i) in behaviors"
                :key="behavior"
              >
                <v-card
                  style="border: 2px solid #9367E6"
                  :color="isBehaviorSelected(behavior)"
                  class="pa-2"
                  @click="selectBehavior(i)"
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


        <p class="text-h6 font-weight-regular">Select up to 10 goals. You kids will chose from the selected goals during lesson 1.</p>
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
                <p class="text-body-2 text-center mb-0">{{goal.targetAmount}}<v-icon color="#FAC432">mdi-coin</v-icon></p>
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

        <p class="text-h6 font-weight-regular">Pick your payday</p>
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

const rewardMethods = [
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
  {name: "Video Game", description: "Pick a video game up to $10 value", targetAmount: 8, },
  {name: "Stay up Late", description: "Kid gets to stay up 1 hour past their bedtime", targetAmount: 8, },
  {name: "Ice Cream", description: "Ice cream party! Scoop there it is! ", targetAmount: 8, },
  {name: "Extra Screen Time", description: "15 minutes of extra screen time", targetAmount: 8, },
  {name: "Movie Night", description: "Family watches a movie of the kid's choice", targetAmount: 8, },
  {name: "Daddy Date", description: "Dad and kid spend 1x1 time together", targetAmount: 8, },
  {name: "Mommy Date", description: "Mom and kid spend 1x1 time together", targetAmount: 8, },
  {name: "New Book", description: "Choose a new book from Barnes & Noble", targetAmount: 8, },
  {name: "New Puzzle", description: "Choose a new puzzle from Target", targetAmount: 8, },
  {name: "Donate To Charity", description: "Donate $10 to a charity of the kids choice", targetAmount: 8, },
  {name: "Sleepover", description: "Invite your friends to a sleepover", targetAmount: 8, },
];

export default {
  name: "Preferences",
  components: {},
  data() {
    return {
      numberOfKids: 0,
      kid1Name: "",
      kid2Name: "",
      kid3Name: "",
      kid4Name: "",
      rewardMethod: null,
      rewardMethods,
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
      if (this.rewardMethod != null) {
        return this.rewardMethod.title == 'Incentive Based' || this.rewardMethod.title == 'Both';
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
    isKidInputDisabled: function(num) {
      return this.numberOfKids < num ? true : false
    },
    createKids(num) {
      this.numberOfKids = num;
    },
    selectRewardMethod(index) {
      this.rewardMethod = this.rewardMethods[index];
    },
    selectTask(index) {
      const task = this.tasks[index];
      if (this.selectedTasks.includes(task)) {
        this.selectedTasks = this.selectedTasks.filter((value) => value != task)
      } else {
        this.selectedTasks.push(task);
      }
    },
    selectBehavior(index) {
      const behavior = this.behaviors[index];
      if (this.selectedBehaviors.includes(behavior)) {
        this.selectedBehaviors = this.selectedBehaviors.filter((value) => value != behavior)
      } else {
        this.selectedBehaviors.push(behavior);
      }
    },
    selectGoal(index) {
      const goal = this.goals[index];
      if (this.selectedGoals.includes(goal)) {
        this.selectedGoals = this.selectedGoals.filter((value) => value != goal)
      } else {
        this.selectedGoals.push(goal);
      }
    },
    isRewardMethodSelected(rm) {
      return  this.rewardMethod && this.rewardMethod.title == rm.title ? '#48A182' : '#F7F8FA'
    },
    isTaskSelected(task) {
      return  this.selectedTasks.length != 0 && this.selectedTasks.includes(task) ? '#A0E667' : '#F7F8FA'
    },
    isBehaviorSelected(behavior) {
      return  this.selectedBehaviors.length != 0 && this.selectedBehaviors.includes(behavior) ? '#9367E6' : '#F7F8FA'
    },
    isGoalSelected(goal) {
      return  this.selectedGoals.length != 0 && this.selectedGoals.includes(goal) ? '#48A182' : '#F7F8FA'
    },
    createTask() {
      this.tasks.push("New task is added")
    },
    createBehavior() {
      this.behaviors.push("New behavior is added")
    },
    createGoal() {
      this.goals.push({name: "New Goal", description: "Happy little description", targetAmount: 8})
    },
    async saveKids() {
      const device = {
        deviceId: this.device.deviceId,
        deviceCode: this.device.deviceCode,
        piggySleep: this.device.piggySleep,
        goals: this.device.goals,
        kids: {
          kidOne: {name: "Jeff"},
          kidTwo: {name: "Geoff"}
        }
      }

      if (await this.updateDevice(device)) {
        this.displayMessage({ text: 'Successfully added kids', color: 'info' });
      } else {
        this.displayMessage({ text: 'Failed to add kids', color: 'error' });
      }
    }
  }

};
</script>
