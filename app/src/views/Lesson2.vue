<template>
  <v-container 
    class=" snap-container"
    fluid>
    <!-- Title --> 
    <v-row 
      :style="{
        minHeight: '95vh',
        backgroundImage: isDesktop 
          ? `url(${require(`@/assets/${titlePage.backgroundImage}`)})`
          : `url(${require(`@/assets/${titlePage.backgroundImageMobile}`)})`,
        color: titlePage.textPrimaryColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      class=" flex-column"
      justify="center"
    >
      <!--TODO componitize the contents of the if/else here-->
      <!--newTitlePage-->
      <template> 
        <v-col
          cols="12"
          class="mt-9"
        >
          <p class="text-h4 text-md-h3 text-uppercase text-center font-weight-bold mb-0">
            {{titlePage.title}}
          </p>
          <p 
            class="text-uppercase text-center font-weight-bold my-n5 my-md-n9" 
            :style="{
              fontSize: isDesktop ? '140px' : '90px'
            }">
            {{titlePage.subtitle}}
          </p>
        </v-col>
        <v-spacer>
        </v-spacer>
        <v-col
          cols="12"
        >
          <v-img 
            max-width="200px"
            class="mx-auto"
            style="cursor: pointer;"
            :src="require(`@/assets/startCoin.png`)" 
            @click="$vuetify.goTo('#page1')"
          ></v-img>
        </v-col>
        <v-spacer class="">
        </v-spacer>
        <v-col
          cols="12"
        >
          <p class="text-h6 text-center ">
            <v-icon size="40" :color="titlePage.textPrimaryColor">mdi-timer</v-icon> {{titlePage.readTime}} mins
          </p>
          <p class="text-h6 text-center">
            <v-icon size="40" :color="titlePage.textPrimaryColor">fab fa-readme</v-icon> {{titlePage.audience}}
          </p>
          <p class="text-h6 text-center">
            <v-icon 
              class="bounceyArrow"
              size="70"
              @click="$vuetify.goTo('#page1')"
              :color="titlePage.textPrimaryColor" 
            >mdi-chevron-down</v-icon>
          </p>
        </v-col>
      </template>
    
    </v-row>

    <!-- Page 1 --> 
    <v-row 
      :style="{
        minHeight: '100vh',
        color: textPage1.textPrimaryColor,
        backgroundImage: isDesktop ? `linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(${require(`@/assets/${textPage1.backgroundImage}`)})` : '',
        backgroundPosition: 'right',
        position: 'relative',
      }"
      class=" flex-column"
      id="page1"
    >
      <!-- <v-col cols="12" class="d-flex justify-center  pa-0">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo(0)"
          color="#9367E6"
        >mdi-chevron-up</v-icon>
      </v-col> -->
      <v-spacer>
      </v-spacer>
      <v-col
        cols="12"
        md="4"
        class="pa-5"
      >
        <p class="text-body-1 font-weight-light mt-md-3 mb-md-8" style="color: black">
          <v-icon color="#A0E667" size="30" >{{textPage1.instructionIcon}}</v-icon>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                v-bind="attrs"
                v-on="on"
              > {{textPage1.instructions}}</span>
            </template>
            <span>{{textPage1.instructionsTT}}</span>
          </v-tooltip>
        </p>
        <p class="text-body-1 font-weight-medium font-weight-md-regular text-md-h6 text-uppercase mb-1">
          {{textPage1.title}}
        </p>
        <div class="mb-8 mb-md-14">
          <p 
            class="text-body-1 text-md-h6 font-weight-light mb-6"
            v-for="paragraph in textPage1.text"
            :key="paragraph"
          >
            {{paragraph}}
          </p>
        </div>
        <!-- <v-container >
          <v-row>
            <v-col cols="4">
              <v-img 
                :src="require(`@/assets/${textPage1.quoteImg}`)" 
                style="border-radius: 50%; border: 1px solid #9367E6"
                aspect-ratio="1"
                width="100"
              ></v-img>
            </v-col>
            <v-col cols="8" class="text-body-1 font-weight-light">
              <p style="color: black">
                {{textPage1.quote}}
              </p>
              <p style="color: black">
                - {{textPage1.quoteAttrib}}
              </p>
            </v-col>
          </v-row>
        </v-container > -->
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="12" class="d-flex justify-center pa-0 ">
        <v-icon 
          :size="isDesktop ? 70 : 40"
          @click="$vuetify.goTo('#page2')"
          color="#9367E6"
        >mdi-chevron-down</v-icon>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const titlePage = {
  type: "newTitlePage",
  title: "Lesson 2",
  subtitle: "Earning",
  readTime: "20",
  audience: "Family reads together.",
  backgroundImage: "familyKitchen2.png",
  backgroundImageMobile: "familyKitchenMobile.png",
  textPrimaryColor: "#FFFFFF"
}
const textPage1 = {
  type: "newTextPage",
  title: "How do we earn?",
  text: [
    "Earning has to do with things people get through their own behavior. Adults earn money in exchange for doing a job. That’s how they pay for things they need and want.",
    "Before grown-ups earn money, they make a plan with who’s paying them, for what they’ll earn. They also agree on when they’ll be paid. Remember Rex’s goal to save for a Pirate Costume? Let’s see how he does it!"
  ],
  audience: "kid",
  instructions: "Read Aloud",
  instructionsTT: "Read this section outloud with your kid(s).",
  instructionIcon: "fab fa-readme",
  backgroundImage: 'PennyGoal.png',
  backgroundColor: "#FFFFFF",
  quote: '"I try to make goals when I play soccer"',
  quoteAttrib: 'Penny Piggle',
  quoteImg: "PennyHeadshotSquare.png",
  textPrimaryColor: "#9367E6"
}

export default {
  name: 'Lesson',
  components: {},
  computed: {
    ...mapState(['device']),
    isDesktop () {
        let { name } = this.$vuetify.breakpoint;
        return name == 'md' || name == 'lg' || name == 'xl';
    },
    goalCatalog: function () {
      const goalCatalog = this.device.rewards.map(reward => reward.name)
      return goalCatalog
    },
    activeGoals: function () {
      return this.goals.filter(goal => !!goal.kidsName)
    }
  },
  data() {
    return {
      goals: [],
      titlePage,
      textPage1,
      loading: false
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
        preferences: this.device.preferences,
        rewards: this.device.rewards,
        status: this.device.status,
        goals: this.goals.map((g, i)=> {
          if (this.activeGoals[i]){
            const currentReward = this.device.rewards.find(reward => reward.name == g.name)
            return {
              name: this.activeGoals[i].name,
              enabled: g.enabled,
              color: +g.color,
              percentage: +g.percentage / 100,
              total: currentReward.coins,
              current: +g.current,
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
              current: +g.current,
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
    }
  },
  mounted() {
    this.initialize();
  },

};
</script>

<style scoped>
  .backback {
    background-image: linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(../assets/PennyGoal.png)
  }

  .bounceyArrow {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: bounce-7;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }
    @keyframes bounce-7 {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-10px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
  }
</style>