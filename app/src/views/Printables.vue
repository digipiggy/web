<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <p class="text-h5 mt-5 mb-0" style="color: #9367E6">Piggles Printables </p>
        <p class="text-body-1 font-weight-light mb-0">Need an extra copy of a Piggles Family document? No worries! We've put extra copies of our printed resources down below.</p>  
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row >
          <v-col 
            cols="6"
            md="3"
            v-for="resource in resources"
            :key="resource.name"
          >
            <p class="text-subtitle-1 text-center mb-0"><a :href="resource.pdf" target="_blank">{{resource.name}}</a></p>  
            <a :href="resource.pdf" target="_blank">
              <v-card >
                <v-img
                  class="white--text align-end"
                  aspect-ratio="0.75"
                  :src="require(`@/assets/${resource.img}`)"
                >
                </v-img>
              </v-card>
            </a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

const resources = [
  {
    name: "Welcome Guide",
    pdf: "Welcome_Doc_V2.pdf",
    img: "WelcomeGuide.jpg",
  },
  {
    name: "DigiPig Setup",
    pdf: "Setup_Instructions_V2.pdf",
    img: "SetupInstructions.jpg",
  },
  {
    name: "App on Your Phone",
    pdf: "Mobile_App_Doc_V2.pdf",
    img: "MobileLogin.jpg",
  },
  {
    name: "Goal & Earning Plan",
    pdf: "Goal_and_Earning_Plan.pdf",
    img: "common/goalAndEarningPlan.jpg",
  },
  {
    name: "A-Maze-ing DigiPig",
    pdf: "A_Maze_Ing_DigiPiggy.pdf",
    img: "DigiPigMaze.jpg",
  },
  {
    name: "Name Your DigiPig",
    pdf: "Name_Your_DigiPiggy.pdf",
    img: "NameYourDigiPig.jpg",
  },
  
]

export default {
  name: "PigglesPrintables",
  components: {},
  data() {
    return {
      resources
    }
  },

};
</script>
