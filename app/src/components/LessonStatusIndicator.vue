<template>
  <v-card class="pa-5 rounded-sm">
    <div class="d-flex justify-space-between">
      <p class="text-h6 font-weight-regular mb-5" style="color: #9367E6">Welcome to the Lesson Hub!</p>
      <v-btn
        icon
        @click="showIntro = !showIntro"
      >
        <v-icon>{{ showIntro ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </div>
    <v-expand-transition>
      <div v-show="showIntro">
        <p class="text-body-1 font-weight-light mb-5">Here you will find our first two financial education lessons. These lessons make it easy to introduce your kid(s) to the concepts of goals and earning. Together along with the Piggles family, your kid(s) will choose their first goal, set up an earning plan, and start making progress!</p>
        <p class="text-body-1 font-weight-light mb-5">Check in regularly, as new lessons will be posted weekly!</p>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showIntro: true
    };
  }
};
</script>
