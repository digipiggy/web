<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="elevation-4 pa-5" color="#A0E667">
          <p class="text-h4 mb-0" style="color: white;">Frequently asked questions</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="5" >
        <!--TODO: componitizet these questions-->
        <div
          class="mb-6"
          v-for="question in questions.slice(0, Math.floor(questions.length / 2))"
          :key="question.question"
        >
          <p class="text-subtitle-1 font-weight-medium mb-0">{{question.question}}</p>  
          <p class="text-body-2 mb-0"> {{question.answer}}</p>  
        </div>
      </v-col>
      <v-col cols="12" md="5" >
        <div
          class="mb-6"
          v-for="question in questions.slice(Math.floor(questions.length / 2), questions.length)"
          :key="question.question"
        >
          <p class="text-subtitle-1 font-weight-medium mb-0">{{question.question}}</p>  
          <p class="text-body-2 mb-0"> {{question.answer}}</p>  
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const questions = [
  {
    question: "What's a good age range for this product?",
    answer: "Parents with children aged 8 - 10."
  },
  {
    question: "Where can I find other reliable sources to learn about family financial ed?",
    answer: "TheMint.org"
  },
  {
    question: "Can I use the app to view my kid's goals from anywhere?",
    answer: "You can log into the Piggles Family experience from any desktop or mobile device with access to the internet."
  },
  {
    question: "What kinds of lessons will my family learn?",
    answer: "Your family will have access to many different lessons, including good habit building and financial savings lessons."
  },
  {
    question: "Can I access the Piggles Family on the web and in an app?",
    answer: "You can log into the Piggles Family experience from any desktop or mobile device with access to the internet."
  },
  {
    question: "How often are lessons released?",
    answer: "Lessons are available to families as soon as you are signed up. New lessons are typically released every week but families can request increased/decreased lesson releases."
  },
  {
    question: "Can I set reminders to update goals?",
    answer: "You can setup reminders in from the Piggles Family website."
  },
  {
    question: "Do I need to give an allowance to use the Piggles Family?",
    answer: "No. While allowance it the typical way to track progress, you can adjust each goal to your own specifications. Including non-allowance based goals."
  },
  {
    question: "Are there tips to help me with an allowance philosophy?",
    answer: "Yes, there are lessons already built into the Piggles Family experience that cover the allowance philosophy."
  },
  {
    question: "What's a good sized goal for me to set for my kids?",
    answer: " It is sometimes good to start with a smaller goal, $5 - $20 a small toy or choice of dining experience, and have your child work up to larger goals, $200 - $300 Nintendo Switch."
  },
  {
    question: "How can I help my kids learn about money without using allowance?",
    answer: "If you don't feel a steady allowance is good for you and your family you can have your children work towards a singular goal. You don't need to assign a monetary value to each chore or completed task either. A good idea is to have that goal be something the whole family can enjoy, like a family dinner or night out at the movies."
  },
  {
    question: "My kids don't see money exchange hands, how will this help them understand money?",
    answer: "The Piggles Family will feature lessons dedicated to money and its exchange. There is also an interactive experience that will introduce your children to money denominations, exchange, and savings."
  }
]

export default {
  components: {},
  data() {
    return {
      questions
    }
  },

};
</script>
