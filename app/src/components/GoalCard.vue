<template>
  <v-card class="pa-5 rounded-sm" height="100%" :style="{borderTop: `5px solid ${translateColor(goal.color)}`}">
    <v-row justify="space-between">
      <v-col>
        <p class="text-h5 font-weight-medium " style="color: #48A182">{{goal.kidsName}}</p>
      </v-col>
      <v-col>
        <p 
          class="text-body-2 font-weight-light text-right" 
          style="color: #2C2C2C; "
          >
          DigiPig LED Color
          <v-icon :color="translateColor(goal.color)">
            mdi-checkbox-blank-circle-outline
          </v-icon>
        </p>
      </v-col>
      <v-col v-if="!isDesktop">
        <v-btn
        class="float-right"
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-expand-transition >
      <div v-show="isDesktop ? true : show">
        <p class="text-caption font-weight-light mb-0" style="color: #2C2C2C">{{goal.kidsName}}'s Goal</p>
        <v-select
          @change="selectNewGoal($event, goalIndex)"
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
              <v-sheet class="d-flex justify-center align-center">
                <v-btn
                  class="mr-3"
                  fab
                  dark
                  small
                  color="#9367E6"
                  @click="updateGoalCurrentAmount(goalIndex, -1)"
                >
                  <v-icon dark>
                    mdi-minus
                  </v-icon>
                </v-btn>
                <p class="text-h1 font-weight-bold mb-0" style="color: #48A182;">{{goal.current}}</p>
                <v-btn
                  class="ml-3"
                  fab
                  dark
                  small
                  color="#9367E6"
                  @click="updateGoalCurrentAmount(goalIndex, 1)"
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
          <v-row class="mb-4 px-2 justify-center">
            <v-img 
              v-for="coinDot in goal.current"
              :key="`coinDot-${coinDot}`"
              :src="require('@/assets/PigglesCoin.png')" 
              aspect-ratio="1"
              max-width="12%"
            ></v-img>
            <v-img 
              v-for="blankLED in (goal.total - goal.current)"
              :key="`blankLED-${blankLED}`"
              :src="require('@/assets/BlankLED.png')" 
              aspect-ratio="1"
              max-width="12%"
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
          min-width="40%"
          color="#9367E6"
          @click="onSave"
          :loading="busy"
        >
          Save
          <v-icon right dark>fas fa-piggy-bank</v-icon>
        </v-btn>

      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "GoalCard", 
  props: {
    goal: Object,
    goalCatalog: Array,
    goalIndex: Number,
    busy: Boolean
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    isDesktop () {
      let { name } = this.$vuetify.breakpoint;
      return name == 'md' || name == 'lg' || name == 'xl';
    },
  },
  methods: {
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
    selectNewGoal(event, i){
      this.$emit('selectNewGoal', { event, i})
    },
    updateGoalCurrentAmount(i, amount){
      this.$emit('updateGoalCurrentAmount', { i, amount})
    },
    onSave(){
      this.$emit('onSave')
    }
  }
};
</script>
