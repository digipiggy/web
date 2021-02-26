<template>
  <v-card v-show="show" class="elevation-4 pa-5" color="#9367E6">
    <!-- <div style="text-align: right;">
      <v-icon class="text-right"
        @click="show = false"
      >
        mdi-close-circle-outline
      </v-icon>
    </div> -->
    <!-- <v-img 
      style="display: inline-block;" 
      class=""
      :src="require(`@/assets/${welcomeMessage.icon}.gif`)" 
      width="30px" >
    </v-img> -->
    <p class="text-h3 mb-0" style="display: inline-block; padding-left: 5px; color: white;">Welcome to the Piggles Family Lessons</p>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>
