<template>
  <v-card class="elevation-3 pa-5">
    <p class="text-h6" >My Digi Pig - {{device.deviceCode}} </p>
    <v-row 
      v-for="(goal, i) in device.goals"
      :key="`StatusGoal-${i}`"
      class="mb-2"
    >
      <v-col v-if="!goal.enabled">
        <p class="mb-2">{{device.kids[i].name}}'s Goal has not been selected yet, please update this in lesson 1.</p>
      </v-col>
      <v-col v-else>
        <p>{{device.kids[i].name}}'s Goal</p>
        <v-row class="mb-2">
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
    <v-btn color="#9367E6" dark to="/goals">
      Update My Goals
    </v-btn>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import converter from 'hex2dec';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['device']),
    enabledGoals() {
      return this.device.goals.filter(g => g.enabled);
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
    }
  }
};
</script>
