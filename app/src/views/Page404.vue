<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-card class="pa-5">
          <p class="text-h5 mb-0 text-center" >Oh no, something went wrong!</p>
          <v-img 
            class="mx-auto my-5"
            :src="require(`@/assets/PigCry.gif`)" 
            max-width="50px" >
          </v-img>
          <v-spacer></v-spacer>
          <v-btn
            dense
            color="#48A182"
            class="mx-center"
            dark
            to="/"
          >
            Return Home
          <v-icon right dark>arrow_forward</v-icon>
          </v-btn>
        </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  Name: "404",
  components: {},

};
</script>
