<template>
  <v-container fluid >
    <!-- <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <div>
          <v-card class="elevation-12 mb-4">
            <v-card-text class="grey lighten-5">
              <v-alert
                class="mb-3"
                :value="!totalPercentageValid"
                type="warning"
              >Total percentage does not add up to 100.</v-alert>
              <v-expansion-panels popout>
                  <v-expansion-panel v-for="(goal, i) in goals" :key="i">
                    <v-expansion-panel-header >
                      <v-chip color="white" :class="(goal.enabled ? 'goal-enabled' : '')">
                        <v-avatar :color="goal.enabled ? $color(goal.color) : 'grey'"></v-avatar>
                        <span class="ml-2">{{goal.kidsName}}' Goal</span>
                      </v-chip>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <goal v-model="goals[i]" :busy="busy" @valid="onValid(i, $event)"/>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="onSave"
                :disabled="!totalPercentageValid || !allGoalsValid || busy"
              >Save Goals
                <v-icon right dark>cloud_upload</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </v-layout> -->
    <v-container>
      <v-row>
        <v-col
          v-for="(goal, i) in activeGoals" 
          :key="`goal-${i}`"
          cols="12"
          md="6"
        >
          <v-card class="pa-5" color="#F7F8FA" height="100%">
            <!-- <v-avatar rounded="circle" :color="goal.enabled ? $color(goal.color) : 'grey'" size="36"></v-avatar> -->
            <!-- <span> {{goal.kidsName}}'s Goal</span> -->
            <p class="text-h6 text-center">{{goal.kidsName}}'s Goal</p>
            <!-- <v-select
              :items="goalCatalog"
              :label="goal.name"
              solo
              v-model="goal.name"
            ></v-select> -->
            <p class="text-h3 font-weight-bold text-center" :style="{color: $color(goal.color)}">
              {{goal.name}}
              <v-icon @click="editGoal">
                mdi-pencil
              </v-icon>
            </p>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <p class="text-h6 font-weight-bold text-center">Current Amount</p>
                  <p class="text-h2 font-weight-bold text-center">{{goal.current}}</p>
                </v-col>
                <v-col cols="6">
                  <p class="text-h6 font-weight-bold text-center">Goal Target</p>
                  <p class="text-h2 font-weight-bold text-center">{{goal.total}}</p>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-space-between mb-5">
                <v-avatar 
                  v-for="coloredDot in goal.current"
                  :key="`coloredDot-${coloredDot}`"
                  rounded="circle" 
                  :color="$color(goal.color)" 
                  size="30"
                  ></v-avatar>
                <v-avatar 
                  v-for="grayDot in (goal.total - goal.current)"
                  :key="`greyDot-${grayDot}`"
                  rounded="circle" 
                  color="grey" 
                  size="30"
                  ></v-avatar>
              </v-row>
            </v-container>
            <!-- <p>Current Amount Saved: {{goal.current}} <v-icon color="#FAC432">mdi-coin</v-icon></p> -->
            <!--Display the list of behaviors and tasks that are associated with this kid-->
            <p class="text-h6 font-weight-bold text-center">How this goal is earned</p>
            <v-chip
              class="ma-2"
              color="#A0E667"
              v-for="(task, i) in goal.kidTasks"
              :key="`taskChip-${i}`"
            >
              {{task}}
            </v-chip>
            <v-chip
              class="ma-2"
              color="#9367E6"
              v-for="(behavior, i) in goal.kidBehaviors"
              :key="`behaviorChip-${i}`"
            >
              {{behavior}}
            </v-chip>
            <!--Display a plus and minus button to add and remove from the goal.current. -->
            <p class="text-h6 font-weight-bold text-center">Make a contribution</p>
            <v-row justify="center" align="center">
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="primary"
                @click="goal.current -= 1"
              >
                <v-icon dark>
                  mdi-minus
                </v-icon>
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                large
                color="primary"
                @click="goal.current += 1"
              >
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import converter from 'hex2dec';
import Goal from '@/components/NewGoal';

export default {
  components: {
    goal: Goal,
  },
  data() {
    return {
      clearDialogDisplayed: false,
      allGoalsValid: true,
      totalPercentageValid: true,
      valid: [true, true, true, true],
      busy: false,
      goals: [],
      wifiUrl: `${process.env.VUE_APP_WIFI_REDIRECT_URL}#code=wifireset`
    };
  },
  computed: {
    ...mapState(['device']),
    goalCatalog: function () {
      const goalCatalog = this.device.rewards.map(reward => reward.name)
      return goalCatalog
    },
    activeGoals: function () {
      console.log("activeGoals: ", this.goals.filter(goal => !!goal.kidsName))
      return this.goals.filter(goal => !!goal.kidsName)
    }
  },
  methods: {
    ...mapActions(['updateDevice', 'resetDevice', 'displayMessage']),
    onValid(index, isValid) {
      this.valid[index] = isValid;
      this.allGoalsValid = this.valid.every(x => x);
    },
    onPercentage() {
      console.log("onPercentage has been called")
      const enabledGoals = this.goals.filter(g => g.enabled);
      if (!enabledGoals.length) {
        this.totalPercentageValid = true;
      } else {
        const total = enabledGoals.reduce((sum, goal) => +goal.percentage + sum, 0);
        this.totalPercentageValid = total === 100;
      }
    },
    convertColor(color){
      let hex = converter.decToHex(color.toString());
      return hex.slice(2, hex.length);
    },
    editGoal: () => {
      console.log("I'm editing a goal!")
    },
    async onReset() {
      this.clearDialogDisplayed = false;
      this.busy = true;
      if (await this.resetDevice()) {
        this.displayMessage({ text: 'Goals reset', color: 'info' });
        this.initialize();
      } else {
        this.displayMessage({ text: 'Failed to reset goals', color: 'error' });
      }

      this.busy = false;
    },
    async onSave() {
      this.busy = true;
      const device = {
        deviceId: this.device.deviceId,
        deviceCode: this.device.deviceCode,
        piggySleep: this.device.piggySleep,
        goals: this.goals.map(g => {
          return {
            name: g.name,
            enabled: g.enabled,
            color: +g.color,
            percentage: +g.percentage / 100,
            total: +g.total,
            current: +g.current,
            promise: +g.promise,
            promises: g.promises
          };
        })
      };

      if (await this.updateDevice(device)) {
        this.displayMessage({ text: 'Goals updated', color: 'info' });
      } else {
        this.displayMessage({ text: 'Failed to update goals', color: 'error' });
      }

      this.busy = false;
    },
    initialize() {
      this.goals = this.device.goals.map((g, i) => {
        console.log('this.device', this.device)
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

<style scoped>
.goal-enabled {
  background: #e0e0e0;
  color: rgba(0, 0, 0, 0.87);
}
</style>
