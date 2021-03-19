<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <p class="text-h4 my-5" style="color: #9367E6">Frequently asked questions</p>
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
    answer: "Parents with children aged 5 - 10."
  },
  {
    question: "Where can I find other reliable sources to learn about family financial education?",
    answer: "Check out our Articles Page to find our favorite resources about family financial education."
  },
  {
    question: "Can I use the app to view my kid's goals from anywhere?",
    answer: "You can log into the Piggles Family experience from any desktop or mobile device with access to the internet."
  },
  {
    question: "What kinds of lessons will my family learn?",
    answer: "Your family will have access to many different lessons, including good habit building, and financial savings lessons."
  },
  {
    question: "How often are lessons released?",
    answer: "Lessons are available to families as soon as you are signed up. New lessons are typically released every week but families can request increased/decreased lesson releases."
  },
  {
    question: "Can I set reminders to update goals?",
    answer: "After setting up your Piggles Family values, you'll receive automatic reminders to complete lessons and make progress to your goals."
  },
  {
    question: "Do I need to give an allowance to use the Piggles Family?",
    answer: "No. We provide a flexible Earning System which allows you to use an Allowance, an Incentive based approach, or a combination of both."
  },
  {
    question: "Are there tips to help me with an allowance philosophy?",
    answer: "Yes, there are lessons already built into the Piggles Family experience that cover the allowance philosophy."
  },
  {
    question: "What's a good sized goal for me to set for my kids?",
    answer: "We recommend setting a goal you believe your child will earn during a 2 week period. It is sometimes good to start with a smaller goal, like a small toy or being able to stay up late, and have your child work up to larger goals."
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
  name: "FAQ",
  components: {},
  data() {
    return {
      questions
    }
  },

};
</script>
