<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5 rounded-sm">
          <p class="text-h6 font-weight-regular mb-4" style="color: #9367E6">✋ Before you can {{actionTodo}}, you need to set up the system.</p>
          <p class="text-body-2 font-weight-regular mb-4">Click the button below to configure your family's settings</p>
          <v-btn
            color="#48A182"
            class="my-2 white--text"
            to="/settings"
          >
            Family Settings
            <v-icon right dark>arrow_forward</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Halt",
  props: {
    actionTodo: String
  }
};
</script>
