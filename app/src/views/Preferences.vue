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
    <!--Allowance--> 
    <v-row 
      justify="center"
      v-if="showAllowance"
      class="mb-8"
    >
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mt-10 mb-0" style="color: #9367E6">Set your weekly allowance</p>
        <p class="text-body-2 font-weight-regular mb-8">By selecting {{earningSystem}}, you are committing to give your kid(s) a set number of piggles coins each week.</p>
        <v-row >
          <v-col cols="8" md="4">
            <v-select
              :items="coinsPerWeekOptions"
              v-model="coinsPerWeek"
              label="Coins earned per week"
              outlined
              background-color="#FFFFFF"
            ></v-select>
          </v-col>  
        </v-row>
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

                <!-- <v-chip
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
                </v-chip> -->
                <!-- <v-chip
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
                </v-chip> -->
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
    <!--Goal Catalog--> 
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
    <!--Payday--> 
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">Pick your Piggles Payday.</p>
        <p class="text-body-2 font-weight-regular mb-8">We recommond you sit down with your kids on this day each week to review their progress towards their goals.</p>
        <v-select
          :items="days"
          label="Our Piggles Payday"
          solo
        ></v-select>
        <v-row justify="end" v-if="showLessonPointer">
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
        <v-row justify="end">
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
  "Put laundry in hamper",
  "Dust",
  "Help with meal prep",
  "Making the bed",
  "Clearing the table",
  "Doing bedtime routine",
  "Vacuum or sweep"
];
const behaviors = [
  "Show gratitude",
  "Help siblings",
  "Share with others",
  "Help parents",
  "Use kind words",
  "Wait your turn",
  "Persevere through challenges",
  "Follow directions",
  "Use calming strategies",
  "Express feelings calmly"
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
      coinsPerWeekOptions:[
        2,
        3,
        4
      ],
      coinsPerWeek: null,
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

    // earning system selection functions
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

    cancelNewGoal() {
      this.newGoalName = "",
      this.newGoalDescription = "",
      this.newGoalTotal = "",
      this.showGoalCreateTool = false
    },
    selectGoal(index) {
      const goal = this.goals[index];
      if ((this.selectedGoals.filter(g => g.name == goal.name ).length > 0) ) {
        this.selectedGoals = this.selectedGoals.filter((g) => g.name != goal.name)
      } else {
        this.selectedGoals.push(goal);
      }
    },


    isBehaviorSelected(kidIndex, behavior) {
      return  this.kids[kidIndex].behaviors.length != 0 && this.kids[kidIndex].behaviors.includes(behavior);
    },
    isGoalSelected(goal) {
      return  this.selectedGoals.length != 0 && (this.selectedGoals.filter(g => g.name == goal.name ).length > 0);
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
