<template>
  <v-card class="elevation-3 pa-5">
    <p class="text-h6 font-weight-regular mb-0" >My DigiPig</p>
    <p class="text-caption font-weight-regular" >Device Code: {{device.deviceCode}} </p>

    <v-row v-if="activeGoals.length == 0" class="mt-2">
      <p class="ml-2 mb-2">Goals have not been set yet. Set your goals in Lesson One. Get started now!</p>
      <p class="ml-2">
        <v-btn color="#48A182" dark to="/lessons/lesson/1">
          Lesson 1
        </v-btn>
      </p>
    </v-row>

    <v-row
      v-else
      v-for="(goal, i) in activeGoals"
      :key="`StatusGoal-${i}`"
      class="mb-2 mt-2"
    >
      
      <v-col v-if="!goal.enabled">
        <p class="mb-2">{{device.kids[i].name}}'s Goal has not been selected yet, please update this in lesson 1.</p>
      </v-col>

      <v-container v-else>

        <v-divider></v-divider>

        <v-row class="mt-5">
          <v-col cols="6" >
            <p class="text-body-1 mb-0">{{device.kids[i].name}}'s Goal</p>
            <p class="text-h5 font-weight-regular mb-0" style="color: #9367E6">{{goal.name}}</p>
          </v-col>
          <v-col cols="6" >
            <p class="text-body-1 text-center">{{device.kids[i].name}}'s Progress</p>
            <v-row class="mb-2" justify="center">
              <v-img 
                v-for="coinDot in goal.current"
                :key="`coinDot-${coinDot}`"
                :src="require('@/assets/PigglesCoin.png')" 
                aspect-ratio="1"
                max-width="12%"
              ></v-img>
              <v-img 
                v-for="blankLED in goal.total - goal.current"
                :key="`blankLED-${blankLED}`"
                :src="require('@/assets/BlankLED.png')" 
                aspect-ratio="1"
                max-width="12%"
              ></v-img>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

    </v-row>

    <v-btn v-if="!activeGoals.length == 0" color="#48A182" dark to="/goals">
      Update My Goals
    </v-btn>

  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import converter from 'hex2dec';

export default {
  data() {
    return {
      goals: []
    };
  },
  computed: {
    ...mapState(['device']),
    enabledGoals() {
      return this.device.goals.filter(g => g.enabled);
    },
    activeGoals: function () {
      return this.goals.filter(goal => !!goal.kidsName)
    },

  },
  methods: {
    getGoalColorStyle(color) {
      let hex = converter.decToHex(color.toString());
      hex = hex.slice(2, hex.length);
      return `color: #${hex};`
    },
    getCirclePercent(current, total) {
      return Math.floor((current/total) * 100)
    },
    initialize() {
      this.goals = this.device.goals.map((g, i) => {
        const kid = this.device.kids[i];

        if (kid){
          return {
            name: g.name,
            color: g.color,
            enabled: g.enabled,
            percentage: g.percentage * 100,
            total: g.total,
            current: g.current,
            promise: g.promise,
            promises: g.promises,
            kidsName: kid.name,
            kidTasks: kid.tasks,
            kidBehaviors: kid.behaviors,
          };
        } else {
          return {
            name: g.name,
            color: g.color,
            enabled: g.enabled,
            percentage: g.percentage * 100,
            total: g.total,
            current: g.current,
            promise: g.promise,
            promises: g.promises,
            kidsName: "",
            kidTasks: [],
            kidBehaviors: [],
          };
        }
      });

      for (let index in this.goals) {
        this.$watch(['goals', index, 'percentage'].join('.'), this.onPercentage);
        this.$watch(['goals', index, 'enabled'].join('.'), this.onPercentage);
      }
    }
  },
  mounted() {
    this.initialize();
  }
};
</script>
