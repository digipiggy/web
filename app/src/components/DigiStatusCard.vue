<template>
  <v-card class="elevation-3 pa-5">
    <p class="text-h6" >My Digi Pig - {{device.deviceCode}} </p>
    <!-- <v-sheet class="mb-4 px-14">
      <v-img 
        :src="require('@/assets/logoLightGreen.png')" 
        aspect-ratio="1.4"

      ></v-img>
    </v-sheet> -->
     <!-- <v-list-item
        v-for="(g, i) in enabledGoals"
        :key="`${g.name}-${i}`"
      >
      <v-list-item-avatar>
        <v-progress-circular
          class="align-center"
          :rotate="270"
          :width="15"
          :value="getCirclePercent(g.current, g.total)"
          :color="$color(g.color)"
        ></v-progress-circular>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="g.name"></v-list-item-title>

        <v-list-item-subtitle >{{g.current}}/{{g.total}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item> -->

    <v-row 
      v-for="kid in device.kids"
      :key="`goal-${kid}`"
      class="mb-2"
    >
      <v-col v-if="device.goals[kid.goalIndex].name == 'Select A New Goal'">
        <p class="mb-2">{{kid.name}}'s Goal has not been selected from the Goal Catalog.</p>
      </v-col>
      <v-col v-else>
        <p>{{kid.name}}'s Goal</p>
        <v-row class="mb-2">
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
      </v-col>
    </v-row>
    <v-btn color="#9367E6" dark to="/pigSettings">
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
