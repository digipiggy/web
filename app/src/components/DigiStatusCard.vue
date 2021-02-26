<template>
  <v-card class="elevation-3 pa-5">
    <p>My Digi Pig - {{device.deviceCode}} </p>
    <v-img 
      :src="require('@/assets/logoLightGreen.png')" 
      aspect-ratio="1.4"
      class="mb-4"
    ></v-img>
     <v-list-item
        v-for="(g) in enabledGoals"
        :key="g.name"
      >
      <v-list-item-avatar>
        <v-progress-circular
          class="align-center"
          :rotate="270"
          :size="50"
          :width="15"
          :value="getCirclePercent(g.current, g.total)"
          :color="$color(g.color)"
        ></v-progress-circular>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="g.name"></v-list-item-title>

        <v-list-item-subtitle >{{g.current}}/{{g.total}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-btn color="#A0E667" dark>
    Update Goals
    </v-btn>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
