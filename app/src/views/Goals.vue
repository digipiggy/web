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
    <v-container v-if="device.status.completedPreferences == false">
      <v-row>
        <v-col cols="12">
          <v-card class="pa-5 rounded-sm">
            <p class="text-h6 font-weight-regular mb-0" style="color: #9367E6">✋ Before you can update goals on your Digi Pig, you need to set up the system.</p>
            <p class="text-body-2 font-weight-regular mb-4">Click the button below to configure your family's values</p>
            <v-btn
              color="#A0E667"
              class="ma-2 white--text"
              to="/setupGuide"
            >
              My Values
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-5 rounded-sm">
            <p class="text-h6 font-weight-regular mb-5" style="color: #9367E6">Welcome to your Goal Hub!</p>
            <p class="text-body-1 font-weight-light mb-5">Here you can view, update, and manage your family's goals.</p>
            <p class="text-body-1 font-weight-light mb-1">
              On 
              <span 
                style="color: #9367E6" 
                class="font-weight-medium">
                {{device.preferences.rewardDay}}'s
              </span>
              (your family's Piggles Day), sit down as a family and discuss you kids progress towards their goals. 
            </p>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(goal, i) in activeGoals" 
          :key="`goal-${i}`"
          cols="12"
          md="6"
        >
          <v-card class="pa-5 rounded-sm" height="100%" :style="{borderTop: `5px solid ${$color(goal.color)}`}">
            <!-- <v-avatar rounded="circle" :color="goal.enabled ? $color(goal.color) : 'grey'" size="36"></v-avatar> -->
            <!-- <span> {{goal.kidsName}}'s Goal</span> -->
            <v-row justify="space-between">
              <v-col>
                <p class="text-h5 font-weight-medium " style="color: #48A182">{{goal.kidsName}}</p>
              </v-col>
              <v-col>
                <p 
                  class="text-body-2 font-weight-light text-right" 
                  style="color: #2C2C2C; "
                  >
                  Digi Piggy Bank LED Color
                 <v-icon :color="$color(goal.color)">
                    mdi-checkbox-blank-circle-outline
                  </v-icon>
                </p>
                 
              </v-col>
            </v-row>
            <p class="text-caption font-weight-light mb-0" style="color: #2C2C2C">{{goal.kidsName}}'s Goal</p>
            <v-select
              :items="goalCatalog"
              :label="goal.name"
              solo
              v-model="goal.name"
            ></v-select>
            <!-- <p class="text-h5 font-weight-medium text-center" style="color: #9367E6">{{goal.kidsName}}'s Bank</p> -->
            <v-container>
              <v-row>
                <v-col cols="6">
                  <p class="text-body-1 text-center font-weight-light" style="color: #2C2C2C">Current Amount</p>
                  <v-sheet class="pl-8">
                    <v-btn
                      class="mx-2"
                      style="display: inline;"
                      fab
                      dark
                      small
                      color="#9367E6"
                      @click="goal.current -= 1"
                    >
                      <v-icon dark>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                    <p class="text-h1 font-weight-bold text-center" style="color: #48A182; display: inline;">{{goal.current}}</p>
                    <v-btn
                      class="mx-2"
                      style="display: inline;"
                      fab
                      dark
                      small
                      color="#9367E6"
                      @click="goal.current += 1"
                    >
                      <v-icon dark>
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </v-sheet>
                </v-col>
                <v-col cols="6">
                  <p class="text-body-1 text-center font-weight-light" style="color: #2C2C2C">Goal Target</p>
                  <p class="text-h1 font-weight-bold text-center" style="color: #48A182">{{goal.total}}</p>
                </v-col>
              </v-row>
              <v-row class="mb-7 px-10">
                <v-img 
                  v-for="coinDot in goal.current"
                  :key="`coinDot-${coinDot}`"
                  :src="require('@/assets/PigglesCoin.png')" 
                  aspect-ratio="1"
                ></v-img>
                <v-img 
                  v-for="blankLED in (goal.total - goal.current)"
                  :key="`blankLED-${blankLED}`"
                  :src="require('@/assets/BlankLED.png')" 
                  aspect-ratio="1"
                ></v-img>
              </v-row>
            </v-container>
            <!--Display the list of behaviors and tasks that are associated with this kid-->
            <p class="text-body-1 font-weight-light mb-0">{{goal.kidsName}}'s ways to earn Piggles Coins:</p>
            <v-chip
              outlined
              class="ma-2"
              color="#48A182"
              text-color="#48A182"
              v-for="(task, i) in goal.kidTasks"
              :key="`taskChip-${i}`"
            >
              {{task}}
            </v-chip>
            <v-chip
              outlined
              class="ma-2"
              color="#48A182"
              text-color="#48A182"
              v-for="(behavior, i) in goal.kidBehaviors"
              :key="`behaviorChip-${i}`"
            >
              {{behavior}}
            </v-chip>

            <v-btn
                class="mt-7 mx-auto"
                style="display: block"
                dark
                
                min-width="15%"
                color="#A0E667"
                @click="onSave"
              >
                Save
              </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import converter from 'hex2dec';
// import Goal from '@/components/NewGoal';

export default {
  // components: {
  //   goal: Goal,
  // },
  name: "Goals",
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
    mockGoalSave() {
      // console.log('save clicked')
    },
    editGoal: () => {
      // console.log("I'm editing a goal!")
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
    async saveGoals(){
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
        // console.log('this.device', this.device)
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
