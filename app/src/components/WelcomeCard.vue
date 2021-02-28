<template>
  <v-card v-show="show" class="elevation-4 pa-5" color="#A0E667">
    <!-- <div style="text-align: right;">
      <v-icon class="text-right"
        @click="show = false"
      >
        mdi-close-circle-outline
      </v-icon>
    </div> -->
    <v-img 
      style="display: inline-block;" 
      class=""
      :src="require(`@/assets/${welcomeMessage.icon}.gif`)" 
      width="30px" >
    </v-img>
    <p class="text-h5 mb-0" style="display: inline-block; padding-left: 5px; color: white;">{{welcomeMessage.text}}</p>

  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      welcomeMessages: [
        { text: 'Welcome back!', icon: 'PigHello' },
        { text: 'Great job staying on top of your goals!', icon: 'PigJumping' },
        { text: 'Don\'t pigs make great pets!', icon: 'PigMultiply' },
        { text: 'Oink oink oink', icon: 'PigDrool' },
        { text: 'Money doesn\'t have to be so serious!', icon: 'PigSilly' }
      ]
    };
  },
  computed: {
    welcomeMessage: function () {
      return this.welcomeMessages[Math.floor(Math.random() * Math.floor(this.welcomeMessages.length - 1))]
    }
  }
};
</script>
