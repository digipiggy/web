<template>
  <v-card v-if="!device.status.completedPreferences" class="elevation-4 pa-5" >
    <v-img 
      class="my-5 mx-auto"
      :src="require(`@/assets/PigHello.gif`)" 
      max-width="30px" >
    </v-img>
    <p class="text-h5 mb-5 text-center" >Welcome to DigiPig! Get started by setting your family's values.</p>
    <p class="text-h5 mb-5 text-center">
      <v-btn
        dense
        dark
        to="/settings"
        color="#48A182"
        elevation="4"
      >
        Family Settings
        <v-icon right>
          mdi-arrow-right
        </v-icon>
      </v-btn>
    </p>
  </v-card>
  <v-card v-else class="elevation-4 pa-5" >
    <v-img 
      style="display: inline-block;" 
      class=""
      :src="require(`@/assets/${welcomeMessage.icon}.gif`)" 
      width="20px" >
    </v-img>
    <p class="text-h5 mb-0" style="display: inline-block; padding-left: 5px;">{{welcomeMessage.text}}</p>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      show: true,
      welcomeMessages: [
        { text: 'Great job staying on top of your goals!', icon: 'PigJumping' },
        { text: 'Don\'t pigs make great pets!', icon: 'PigMultiply' },
        { text: 'Welcome back!', icon: 'PigDrool' },
        { text: 'Money doesn\'t have to be so serious!', icon: 'PigSilly' }
      ]
    };
  },
  computed: {
    ...mapState(['device']),
    welcomeMessage: function () {
      return this.welcomeMessages[Math.floor(Math.random() * Math.floor(this.welcomeMessages.length - 1))]
    }
  }
};
</script>
