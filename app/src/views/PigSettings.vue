<!--TODO: Rename this view back to pigSettings and delete the original one-->
<template>
  <v-container fluid >
    <v-row justify="center">
      <v-col cols="12" md="5">
        <!--Goals-->
        <!-- <v-card class="elevation-12 mb-4">
          <v-toolbar dark color="#9367E6">
            <v-toolbar-title>My Goals</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container fluid>
              <v-row align="start" justify="center" align-content="center">
                <template v-for="(goal, i) in enabledGoals">
                  <v-col 
                    cols="6"
                    md="3"
                    :key="i" 
                    align="center">
                    <v-progress-circular
                      class="align-center"
                      :rotate="270"
                      :size="60"
                      :width="10"
                      :value="getGoalValue(i)"
                      :color="getGoalColor(i)"
                    ></v-progress-circular>
                    <p class="mt-1">{{ goal.name }}</p>
                  </v-col>
                </template>
                <div v-if="!enabledGoals.length">
                  <p>You don't have any enabled goals.</p>
                  <p>Click the gear in the upper right to configure your goals.</p>
                </div>
              </v-row>
            </v-container>
            <v-text-field
              v-model="deposit"
              prefix="$"
              label="Deposit"
              mask="#######"
              filled
              autofocus
              placeholder="20"
              append-outer-icon="add_circle"
              @click:append-outer="onDeposit"
              @keyup.enter="onDeposit"
              :disabled="busy || !enabledGoals.length"
            ></v-text-field>
          </v-card-text>
        </v-card>
        <promises class="mb-4"/>
        <allowance class="mb-4" />
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="elevation-12 mb-4">
          <v-toolbar dark color="#9367E6">
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <a :href="wifiUrl">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on">signal_wifi_4_bar</v-icon>
                </template>
                <span>WiFi Reset</span>
              </v-tooltip>
            </a>
            <v-dialog v-model="clearDialogDisplayed" max-width="320">
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-tooltip top>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">delete</v-icon>
                    </template>
                    <span>Reset</span>
                  </v-tooltip>
                </v-btn>
              </template>
              <v-card>
                <v-card-text>Are you sure you want to reset your goals?</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red lighten-2" text @click="onReset">Reset</v-btn>
                  <v-btn color="#9367E6" text @click="clearDialogDisplayed = false">Cancel</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
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
                      <span class="ml-2">{{ goal.name }}</span>
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
              dark
              color="#9367E6"
              @click="onSave"
              :disabled="!totalPercentageValid || !allGoalsValid || busy"
            >Save Goals
              <v-icon right>cloud_upload</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card> -->

        <!-- <p lass="text-h6 font-weight-regular" style="color: #9367E6"> Coming Soon </p> -->
        <sleep class="mb-4" />


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Sleep from '@/components/Sleep';

export default {
  components: {
    sleep: Sleep,
  },
  data() {
    return {
      clearDialogDisplayed: false,
      allGoalsValid: true,
      totalPercentageValid: true,
      valid: [true, true, true, true],
      busy: false,
      goals: [],
      deposit: null,
      wifiUrl: `${process.env.VUE_APP_WIFI_REDIRECT_URL}#code=wifireset`
    };
  },
  computed: {
    ...mapState(['device']),
    enabledGoals() {
      return this.device.goals.filter(g => g.enabled);
    }
  },
  methods: {
    ...mapActions(['updateDevice', 'resetDevice', 'displayMessage', 'depositIntoGoals']),
    getGoalName(index) {
      return this.device.goals[index].name;
    },
    getGoalValue(index) {
      const data = this.enabledGoals[index];
      return (data.current / data.total) * 100;
    },
    getGoalColor(index) {
      const goals = this.enabledGoals[index];
      return this.$color(goals.color);
    },
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
    async onDeposit() {
      if (+this.deposit === 0) {
        return this.displayMessage({ text: 'Please enter an amount to deposit', color: 'info' });
      }

      this.busy = true;
      if (await this.depositIntoGoals(+this.deposit)) {
        this.deposit = 0;
        this.displayMessage({ text: 'Deposit successful', color: 'info' });
      } else {
        this.displayMessage({ text: 'Deposit failed', color: 'error' });
      }

      this.busy = false;
    },
    initialize() {
      this.goals = this.device.goals.map(g => {
        return {
          name: g.name,
          color: g.color,
          enabled: g.enabled,
          percentage: g.percentage * 100,
          total: g.total,
          current: g.current,
          promise: g.promise,
          promises: g.promises
        };
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
