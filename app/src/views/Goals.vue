<template>
  <v-container fluid >

    <v-container v-if="!device.status.completedPreferences">
      <halt actionTodo="access your goals"/>
    </v-container>

    <v-container v-else-if="device.goals.length == 0">
      <v-row>
        <v-col cols="12">
          <v-card class="pa-5 rounded-sm">
            <p class="text-h6 font-weight-regular mb-4" style="color: #9367E6">✋ Before you can modify your goals, you need to set them first!</p>
            <p class="text-body-2 font-weight-regular mb-4">Click the button below to set your goals in lesson 1.</p>
            <v-btn
              color="#48A182"
              class="my-2 white--text"
              to="/lessons/lesson/1"
            >
              Lesson 1
              <v-icon right dark>fas fa-book-reader</v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else>

      <!-- <v-btn 
        class="white--text"
        style="position: fixed;bottom: 10px;right: 10px;z-index: 1;"
        color="#9367E6">
        Save Goals Mocked
      </v-btn> -->

      <v-dialog
        v-model="showCelebration"
        width="90%"
        min-height="90%"
        @click:outside="stopConfetti"
      >
      <v-card >
        <p @click="closeCelebration" >             
          <v-icon >
                mdi-close
          </v-icon>
        </p>
        <p class="text-h4 font-weight-regular text-center pa-9 mb-0" style="color: #9367E6">Congratulations on completing your goal!</p>
        <p class="text-center pb-5 mb-0">
          <v-btn
            color="#9367E6"
            class="ma-2  white--text"
            @click="closeCelebration"
          >
            Select a new goal 
            <v-icon right dark>mdi-cursor-pointer</v-icon>
          </v-btn>
        </p>
        </v-card>
      </v-dialog>

      <v-row>
        <v-col cols="12">
          <v-card class="pa-5 rounded-sm">
            <div class="d-flex justify-space-between">
              <p class="text-h6 font-weight-regular mb-5" style="color: #9367E6">Welcome to your Goal Hub!</p>
              <v-btn
                icon
                @click="showWelcome = !showWelcome"
              >
                <v-icon>{{ showWelcome ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </div>
            <v-expand-transition>
              <div v-show="showWelcome">
                <p class="text-body-1 font-weight-light mb-5">Here you can view, update, and manage your family's goals.</p>
                <p class="text-body-1 font-weight-light mb-5">
                  On 
                  <span 
                    style="color: #9367E6" 
                    class="font-weight-medium">
                    {{device.settings.rewardDay}}'s
                  </span>
                  (your family's Piggles Day), sit down as a family and discuss you kids progress towards their goals. 
                </p>
                <p class="text-body-1 font-weight-light mb-1">
                  As your kid(s) earn Piggles Coins towards goals, add them to their bank using the 
                  <v-icon color="#9367E6">
                    mdi-plus-circle
                  </v-icon>
                  and
                  <v-icon color="#9367E6">
                    mdi-minus-circle
                  </v-icon>
                  buttons below. Watch in awe as the lights on your Digi Pig light up!
                </p>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-5 rounded-sm" v-if="isTodayPiggleDay">
              <p class="text-h6 font-weight-regular mb-5" style="color: #9367E6">OMGsh, it's your family's Piggles Day!</p>
              <div v-if="device.settings.earningSystem == 'Allowance'" >
                <p class="text-body-1 font-weight-light mb-5">
                  Because you've chosen the Allowance Earning Philosophy, and set an allowance of {{device.settings.goalAllowance || 2}} Piggles Coins a week, add {{device.settings.goalAllowance || 2 }} to your kid(s) goals.
                </p>
              </div>
              <div v-else-if="device.settings.earningSystem == 'Incentive'">
                <p class="text-body-1 font-weight-light mb-5">
                  Because you've chosen the Incentive Earning Philosophy, review the weekly progress of your kid(s) on their rewarding Tasks and Behaviors.
                </p>
                <div class="d-flex flex-row">
                    <v-img 
                      v-for="n in 1"
                      :key="`good-${n}`"
                      :src="require('@/assets/PigglesCoin.png')" 
                      max-width="20px"
                      max-height="20px"
                    ></v-img>
                  <p class="text-body-1 font-weight-light mb-0 ml-1">
                    Reward 1 Piggles Coin for a Good job.             
                  </p>
                </div>
                <div class="d-flex flex-row">
                    <v-img 
                      v-for="n in 2"
                      :key="`great-${n}`"
                      :src="require('@/assets/PigglesCoin.png')" 
                      max-width="20px"
                      max-height="20px"
                    ></v-img>
                  <p class="text-body-1 font-weight-light mb-0 ml-1">
                    Reward 2 Piggles Coins for a Great job.            
                  </p>
                </div>
                <div class="d-flex flex-row">
                    <v-img 
                      v-for="n in 3"
                      :key="`amazing-${n}`"
                      :src="require('@/assets/PigglesCoin.png')" 
                      max-width="20px"
                      max-height="20px"
                    ></v-img>
                  <p class="text-body-1 font-weight-light mb-0 ml-1">
                    Reward 3 Piggles Coins for an Amazing job.             
                  </p>
                </div>
              </div>
              <div v-if="device.settings.earningSystem == 'Allowance + Incentive'">
                <p class="text-body-1 font-weight-light mb-5">
                  Because you've chosen the Allowance + Incentive Earning Philosophy, add your set allowance of {{device.settings.goalAllowance || 2}} Piggles Coin(s) to your kid(s) goals. Then, review their weekly progress on rewarding Tasks and Behaviors and award additional Piggles Coins.
                </p>
                <div class="d-flex flex-row">
                    <v-img 
                      v-for="n in 1"
                      :key="`good-${n}`"
                      :src="require('@/assets/PigglesCoin.png')" 
                      max-width="20px"
                      max-height="20px"
                    ></v-img>
                  <p class="text-body-1 font-weight-light mb-0 ml-1">
                    Reward 1 Piggles Coin for a Good job.             
                  </p>
                </div>
                <div class="d-flex flex-row">
                    <v-img 
                      v-for="n in 2"
                      :key="`great-${n}`"
                      :src="require('@/assets/PigglesCoin.png')" 
                      max-width="20px"
                      max-height="20px"
                    ></v-img>
                  <p class="text-body-1 font-weight-light mb-0 ml-1">
                    Reward 2 Piggles Coins for a Great job.            
                  </p>
                </div>
                <div class="d-flex flex-row">
                    <v-img 
                      v-for="n in 3"
                      :key="`amazing-${n}`"
                      :src="require('@/assets/PigglesCoin.png')" 
                      max-width="20px"
                      max-height="20px"
                    ></v-img>
                  <p class="text-body-1 font-weight-light mb-0 ml-1">
                    Reward 3 Piggles Coins for an Amazing job.             
                  </p>
                </div>
              </div>
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
          <goalCard
            :goal="goal"
            :goalIndex="i"
            :goalCatalog="goalCatalog"
            :busy="busy"
            @selectNewGoal="selectNewGoal"
            @updateGoalCurrentAmount="updateGoalCurrentAmount"
            @onSave="onSave"
          />

        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import converter from 'hex2dec';
// import Goal from '@/components/NewGoal';
import Halt from '@/components/Halt';
import GoalCard from '../components/GoalCard.vue';

const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]

export default {
  components: {
    // goal: Goal,
    halt: Halt,
    goalCard: GoalCard
  },
  name: "Goals",
  data() {
    return {
      clearDialogDisplayed: false,
      allGoalsValid: true,
      totalPercentageValid: true,
      valid: [true, true, true, true],
      busy: false,
      goals: [],
      wifiUrl: `${process.env.VUE_APP_WIFI_REDIRECT_URL}#code=wifireset`,
      show: false,
      showCelebration: false,
      showWelcome: true
    };
  },
  computed: {
    ...mapState(['device']),
    goalCatalog: function () {
      const goalCatalog = this.device.goalCatalog.map(reward => reward.name)
      return goalCatalog
    },
    activeGoals: function () {
      return this.goals.filter(goal => !!goal.kidsName)
    },
    isTodayPiggleDay: function(){
      const todaysDate = new Date();
      const todaysDay = todaysDate.getDay();
      const piggleDayIndex = days.indexOf(this.device.settings.rewardDay);
      return todaysDay == piggleDayIndex;
    },
  },
  methods: {
    ...mapActions(['updateDevice', 'resetDevice', 'displayMessage']),
    onValid(index, isValid) {
      this.valid[index] = isValid;
      this.allGoalsValid = this.valid.every(x => x);
    },
    stopConfetti() {
      this.$confetti.stop();
    },
    startCelebration() {
      this.showCelebration = true;
      this.$confetti.start();
    },
    closeCelebration() {
      this.showCelebration = false;
      this.$confetti.stop();
    },
    selectNewGoal(data){
      const {event, i} = data

      const goalToUpdate = this.goals[i]
      goalToUpdate.total = this.device.goalCatalog.find(goal => goal.name == event).coins;
      goalToUpdate.current = 0;
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
    updateGoalCurrentAmount(data) {
      const {i: goalIndex, amount} = data
      const goal = this.goals[goalIndex];
      const newCurrentAmount = goal.current + amount;
      if (newCurrentAmount >= 0 && newCurrentAmount <= goal.total) {
        goal.current += amount
      }
      return
    },
    convertColor(color){
      let hex = converter.decToHex(color.toString());
      return hex.slice(2, hex.length);
    },
    translateColor(color){
      switch(color){
        case 255:
          return "blue";
        case 16711680:
          return "red"
        case 685312:
          return "green"
        case 16718336:
          return "yellow"
        default:
          return ""
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

      // On a save, check to see if any goals were hit. 

      const device = {
        ...this.device,
        goals: this.activeGoals.map(g => {

          if (g.current == g.total){
            this.startCelebration();
          }
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
