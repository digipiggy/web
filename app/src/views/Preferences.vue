<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h5 my-10" style="color: #9367E6">This guide will customize the Digi-Pig experience to your familiy's unique situation and values. Let's get started!</p>
        <p class="text-h6 font-weight-regular">How many of your kids will you use the Digi-Pig experience with? (We currently support up to 4 kids in the system)</p>
        <v-btn
          class="mx-2 mb-10"
          fab
          dark
          x-large
          color="#9367E6"
          v-for="n in 4"
          :key="`${n}-kids`"
          :v-model="n"
          @click="createKids(n)"
        >
          {{n}}
        </v-btn>
        <p class="text-h6 font-weight-regular">What are your kid's names?</p>
        <!-- <v-sheet class="mb-14" v-if="!kids.length"></v-sheet> -->
        <v-text-field
            v-if="!kids.length"
            label="Kid Name"
            solo
            dense
            disabled
        ></v-text-field>
        <v-text-field
            v-else
            :label="`Kid ${i+1} Name`"
            solo
            dense
            v-for="(kid, i) in kids"
            :key="i"
          ></v-text-field>
        
        <p class="text-h6 font-weight-regular mt-10">How should your kids be rewarded?</p>
        <v-container class="mb-10">
          <v-row justify="center">
            <v-col 
              cols="3"
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

        <p class="text-h6 font-weight-regular">Select three tasks and behaviors you would like your kids to acheive.</p>
        <v-container class="mb-10">
          <p>Tasks</p>
          <v-row justify="center" class="mb-5">
            <v-col 
              cols="3"
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
              cols="3"
            >
              <v-card
                style="border: 2px solid #A0E667"
                class="pa-2"
                @click="addTask()"
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
              cols="3"
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
              cols="3"
            >
              <v-card
                style="border: 2px solid #9367E6"
                class="pa-2"
                @click="addBehavior()"
              >

                <p class="text-body-2 text-center mb-0">
                  <v-icon>mdi-plus</v-icon>Custom Behavior
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <p class="text-h6 font-weight-regular">Select your payday</p>
        <v-select
          :items="days"
          label="Solo field"
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

const rewardMethods = [
  {
    title: "Behavior",
    text: "I would like to reward my kids based on their behavior. Examples include: Going to be on time, being nice, and not being bad.", 
  },
  {
    title: "Tasks",
    text: "I would like to reward my kids based on the tasks they complete. Examples include: Mowing the lawn, unpacking the dishwasher, etc...",
  },
  {
    title: "Combo",
    text: "I would like to reward my kids based on a combination of their behavior and the tasks they complete.",
  },
  {
    title: "I'm not sure...",
    text: "Select this option and we will help you choose the plan that's best for your family.",
  },
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

export default {
  name: "Preferences",
  components: {},
  data() {
    return {
      kids: [],
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
      ]
    }
  },

  methods: {
    createKids(numberOfKids) {
      this.kids = [];
      for (let i = 0; i < numberOfKids; i++) {
        const newKid = {name: ""}
        this.kids.push(newKid);
      }
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
    isRewardMethodSelected(rm) {
      return  this.rewardMethod && this.rewardMethod.title == rm.title ? '#48A182' : ''
    },
    isTaskSelected(task) {
      return  this.selectedTasks.length != 0 && this.selectedTasks.includes(task) ? '#A0E667' : ''
    },
    isBehaviorSelected(behavior) {
      return  this.selectedBehaviors.length != 0 && this.selectedBehaviors.includes(behavior) ? '#9367E6' : ''
    },
    addTask() {
      this.tasks.push("New task is added")
    },
    addBehavior() {
      this.behaviors.push("New behavior is added")
    }
  }


};
</script>
