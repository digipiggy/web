const titlePage = {
    type: "titlePage",
    title: "Lesson 1",
    subtitle: "Goals",
    readTime: "15",
    audience: "Family reads together.",
    backgroundImage: "common/familyKitchen.png",
    backgroundImageMobile: "familyKitchenMobile.png",
    textPrimaryColor: "#FFFFFF"
}

const contentPage1 = {
    type: "contentPageBasicText",
    title: "What is a goal?",
    text: [
        "A goal is something you’d like to do or have someday. It’s usually something you don’t get right away. You work for and wait to earn a goal. It takes planning and careful choices to reach a goal.",
        "You hear about goals in sports, because a team is working to get points to win a game. The goal of soccer is to get the ball into the net."
    ],
    audience: "kid",
    instructions: "Read Aloud",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fab fa-readme",
    backgroundImage: 'PennyGoal.png',
    backgroundColor: "#FFFFFF",
    quote: '"I try to make goals when I play soccer"',
    quoteAttrib: 'Penny Piggle',
    quoteImg: "lessons/lesson1/PennyHeadshotSquare.png",
    textPrimaryColor: "#9367E6",
    id: 'page1',
    nextPage: 'page2'
}

const contentPage2 = {
    type: "contentPageQuestions",
    title: "Parent Goals",
    text: [
        "Parents, think of a goal you really wanted to reach.",
        "Discuss:",
        "What was your goal?",
        "What got in your way?",
        "How did you work towards it?",
    ],
    audience: "kid",
    instructions: "Read and Share",
    instructionsTT: "Read and discuss the italicized questions with your kid(s)",
    instructionIcon: "fas fa-book-reader",
    backgroundImage: 'RexAndMomma.jpg',
    backgroundColor: "#FFFFFF",
    quote: '"My goal was to start a business, but I wasn’t sure how. I made a list of things to learn. Then I talked to people who helped me with my ideas."',
    quoteAttrib: 'Momma Piggle',
    quoteImg: "lessons/MommaPiggleHeadshot.png",
    textPrimaryColor: "#9367E6",
    id: 'page2',
    nextPage: 'page3'
}

const contentPage3 = {
    type: "contentPageQuestions",
    title: "Kid Goals",
    text: [
      "Kids, think of a time when you really wanted to do or have something, and you had to wait or work for it.",
      "Tell your family:",
      "What were you waiting for?",
      "What helped you feel patient?",
      "How did you work toward it?"
    ],
    audience: "kid",
    instructions: "Read and Share",
    instructionsTT: "Read and discuss the italicized questions with your kid(s)",
    instructionIcon: "fas fa-book-reader",
    backgroundImage: 'common/rexPirate.jpg',
    backgroundColor: "#FFFFFF",
    quote: 'I wanted a pirate costume for Halloween. I didn’t have the money yet, so I made a paper eye patch."',
    quoteAttrib: 'Rex Piggle',
    quoteImg: "lessons/lesson1/RexPiggleHeadshot.png",
    textPrimaryColor: "#9367E6",
    id: 'page3',
    nextPage: 'page4'
}

const contentPage4 = {
    type: "contentPageGoalSelector",
    title: "It's your turn!",
    text: [
      "Kids, choose your first goal from the Goal Catalog that you would like to save up for."
    ],
    audience: "kid",
    instructions: "Take Action",
    instructionsTT: "Pick your goal.",
    instructionIcon: "fas fa-tasks",
    imageTitle: "Goals Page Example:",
    backgroundImage: 'GoalPage.png',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page4',
    nextPage: 'page5'
}

const contentPage5 = {
    type: "contentPageNextLesson",
    title: "Get ready to earn",
    text: [
      "Congratulations on completing Lesson 1 - Goals! Now that your goal has been set, it’s time to learn how to earn Piggles Coins and watch your DigiPig light up. Find out how in Lesson 2 - Earning!",
    ],
    audience: "kid",
    instructions: "Take Action",
    instructionIcon: "fas fa-tasks",
    backgroundImage: 'lessons/lesson2/lesson2Title.png',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6"
}

const lesson1 = {
    titlePage,
    // Note: The order that the contentPages are passed in here,
    // are the order in which they will be displayed.
    contentPages: [
        contentPage1,
        contentPage2,
        contentPage3,
        contentPage4,
        contentPage5
    ]
}

export default lesson1