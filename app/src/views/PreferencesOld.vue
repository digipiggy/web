<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="11">
        <p class="text-h4 pa-0">
          Define your family's earning system
        </p>
        <p>
          Parents, let’s think about how you want your kids to earn Piggles coins (LEDs). All families have unique values. This section helps define a way of earning that works for you.
        </p>
        <p>
          Respond to the statements below with a “Yes” or “No”, then read the guidance statements under the box. It’s a good idea to talk about this with other adults in your family, for a plan to award coins consistently.
        </p>
        <v-container style="border-top: 1px solid #2C2C2C" >
          <v-row 
            justify="center"
            align="center"
            style="border-bottom: 1px solid #2C2C2C" 
            v-for="(question, index) in questions" 
            :key="index">
            <v-col cols="9" >
              <p class="mb-0">{{index+1}}. {{question.text}}</p>
            </v-col>
            <v-col cols="3" >
              <v-radio-group
                :v-model="question.answer"
                row
              >
                <v-radio
                  label="Yes"
                  value="true"
                  color="#A0E667"
                ></v-radio>
                <v-radio
                  label="No"
                  value="false"
                  color="#A0E667"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row class="my-5" justify="end">
            <v-btn color="#A0E667" dark >
              Submit Preferences
            </v-btn>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      questions: [
        {text: "I want to show my child(ren) they must work to earn money.", answer: null},
        {text: "I want to control more of the help I receive around the house.", answer: null},
        {text: "I feel chores should be performed without expectations of money.", answer: null},
        {text: "I’m able to keep careful track of chores performed.", answer: null},
        {text: "I’m comfortable providing an allowance (or rewards) and expecting nothing in return.", answer: null},
        {text: "Allowances (or rewards) for my children fit into the family budget.", answer: null},
        {text: "It’s more important to reward positive habits I want my kids to establish, than to pay my child(ren) for chores.", answer: null}
      ]
    }
  }

};
</script>
