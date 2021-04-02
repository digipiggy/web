<template>
  <v-row 
    :style="{
      minHeight: '100vh',
      color: lessonPage.textPrimaryColor,
    }"
    class="flex-column"
    :id="lessonPage.id"
    align="center"
  >
    <v-spacer>
    </v-spacer>
    <v-col cols="12" >
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="pa-5"
        >
          <p class="text-body-1 font-weight-light mt-3 mb-8" style="color: black">
            <v-icon color="#A0E667" size="30" >{{lessonPage.instructionIcon}}</v-icon>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span
                  v-bind="attrs"
                  v-on="on"
                > {{lessonPage.instructions}}</span>
              </template>
              <span>{{lessonPage.instructionsTT}}</span>
            </v-tooltip>
          </p>
          <p class="text-h6 text-uppercase">
            {{lessonPage.title}}
          </p>
          <p 
            class="text-h6 font-weight-light mb-14"
          >
            {{lessonPage.text[0]}}
          </p>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="pa-5"
        >
          <div
            v-for="(goal, i) in activeGoals"
            :key="`${goal.color}-${i}`"
          >
            <p>Select {{device.kids[i].name}}'s goal:</p>
            <v-select
              :items="device.goalCatalog"
              :label="goal.name"
              item-text="name"
              item-value="name"
              solo
              v-model="goal.name"
            >
              <template slot="selection" slot-scope="data">
                <template >
                  <v-list-item-avatar >
                    <v-img :src="require(`@/assets/common/pigglesCoin${data.item.coins}.png`)" ></v-img>
                    <!-- <p style="position: relative; right: 20px">{{device.goalCatalog[i].coins}}</p> -->
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title >{{data.item.name}}</v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
              <template slot="item" slot-scope="data">
                <template >
                  <v-list-item-avatar >
                    <v-img :src="require(`@/assets/common/pigglesCoin${data.item.coins}.png`)" ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title >{{data.item.name}}</v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-select>
          </div>
          <v-btn
            color="#9367E6"
            class=" white--text"
            :loading="loading"
            :disabled="loading"
            @click="saveGoals"
          >Save Goals
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-spacer>
    </v-spacer>
    <v-col cols="12" class="d-flex justify-center pa-0">
      <v-icon 
        :size="isDesktop ? 70 : 40"
        @click="$vuetify.goTo(`#${lessonPage.nextPage}`)"
        color="#9367E6"
      >mdi-chevron-down</v-icon>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const goalColors = [
  "255",
  "16711680",
  "685312",
  "16718336"
]

export default {
  name: 'ContentPageGoalSelector',
  props: {
    isDesktop: Boolean,
    lessonPage: Object
  },
  data() {
    return {
      loading: false,
      goals: [],
      goalColors
    };
  },
  computed: {
    ...mapState(['device']),
    goalCatalog: function () {
      const goalCatalog = this.device.goalCatalog.map(goal => goal.name)
      return goalCatalog
    },
    activeGoals: function () {
      return this.goals.filter(goal => goal.enabled)
    }
  },
  methods: {
    ...mapActions(['updateDevice', 'displayMessage']),
    async saveGoals() {
      this.loading = true;
      const device = {
        deviceId: this.device.deviceId,
        deviceCode: this.device.deviceCode,
        kids: this.device.kids,
        settings: this.device.settings,
        goalCatalog: this.device.goalCatalog,
        // update the status to complete when the user saves their goals
        status: {
          ...this.device.status,
          lessons: {
            ...this.device.status.lessons,
            lesson1: {
              ... this.device.status.lessons.lesson1,
              completed: true
            }
          }
        },
        goals: this.goals.map((g, i)=> {
          if (this.activeGoals[i]){
            const currentGoal = this.device.goalCatalog.find(goal => goal.name == g.name)
            return {
              name: this.activeGoals[i].name,
              enabled: g.enabled,
              color: +g.color,
              percentage: +g.percentage / 100,
              total: +currentGoal.coins,
              current: 0,
              promise: +g.promise,
              promises: g.promises
            };
          } else {
            return {
              name: g.name,
              enabled: g.enabled,
              color: +g.color,
              percentage: +g.percentage / 100,
              total: +g.total,
              current: 0,
              promise: +g.promise,
              promises: g.promises
            };
          }
        })
      };

      if (await this.updateDevice(device)) {
        this.displayMessage({ text: 'Goals saved', color: 'info' });
      } else {
        this.displayMessage({ text: 'Failed to save goals', color: 'error' });
      }

      this.loading = false;
    },
    initialize() {
      // if there are already goals, keep them, otherwise initialize a goal for each kid.
      this.goals = this.device.kids.map((kid, i) => {
        const goal = this.device.goals[i];

        if (goal){
          return {
            ...this.device.goals[i],
            percentage: this.device.goals[i].percentage * 100,
          };
        } else {
          return {
            name: "Choose a goal",
            color: this.goalColors[i],
            enabled: true,
            percentage: 0,
            total: 0,
            current: 0,
            promise: 0,
          };
        }
      });
    }
  },
  mounted() {
    this.initialize();
  },
};
</script>
