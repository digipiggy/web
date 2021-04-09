const titlePage = {
    type: "titlePage",
    title: "Lesson 4",
    subtitle: "Making Choices",
    readTime: "15",
    audience: "Family reads together.",
    backgroundImage: "lessons/lesson4/lesson4Title.jpg",
    backgroundImageMobile: "lessons/lesson4/lesson4Title.jpg",
    textPrimaryColor: "#FFFFFF"
}

const contentPage1 = {
    type: "contentPageBasicText",
    title: "PENNY’S LIST OF WANTS",
    text: [
        "In lesson 3 we learned that Penny’s  art supplies are Wants and not  Needs.",
        "Papa notices that Penny’s list is long. He tells Penny that this is normal. Penny has trouble deciding which thing to get first.",
        "Let’s explore how Penny decides which Wants she should work towards."
    ],
    audience: "kid",
    instructions: "Read Aloud",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fab fa-readme",
    backgroundImage: 'lessons/lesson3/papaAndPennyWantsListBackground.jpg',
    mobileBackgroundImage: 'lessons/lesson3/papaAndPennyWantsListBackground.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page1',
    nextPage: 'page2'
}

const contentPage2 = {
    type: "contentPageBasicText",
    title: "HOW DO YOU CHOOSE?",
    text: [
        "For Penny to decide which item to buy first, she has to consider which item is most important to creating her masterpiece. Her list includes, extra canvases, new brushes, a clean apron, and missing paint."
    ],
    quote: '"There’s a lot on your list, Penny. Sometimes that happens. It looks like you could use some new paints to finish your masterpiece. Let’s work towards that first."',
    quoteAttrib: 'Papa Piggle',
    quoteImg: "lessons/papaPiggleHeadshot.png",
    audience: "kid",
    instructions: "Read Aloud",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fab fa-readme",
    backgroundImage: 'lessons/lesson4/pennyPaintingSadBackground.jpg',
    mobileBackgroundImage: 'lessons/lesson4/pennyPaintingSadBackground.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page2',
    nextPage: 'page3'
}

const contentPage3 = {
    type: "contentPageSortingGame",
    title: "HELP PENNY ORDER HER LIST",
    text: [
        "Penny’s masterpiece is almost done, but she wants to buy a few extra items to make it perfect. Currently she has 8 Piggles Coins, which is not enough to buy all the items on her list at once.",
        "Drag and drop the items on Penny’s list with the most important items at the top."
    ],
    audience: "kid",
    instructions: "Try It Out",
    instructionsTT: "Drag and Drop the items in Penny's list.",
    instructionIcon: "fas fa-list-ol",
    backgroundImage: 'lessons/lesson4/pennysPainting.jpg',
    mobileBackgroundImage: 'lessons/lesson4/pennysPainting.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page3',
    nextPage: 'page4'
}

const contentPage4 = {
    type: "contentPageBasicText",
    title: "PENNY’S MASTERPIECE",
    text: [
        "Penny decided to put the missing paint at the top of her list of list. She spent 4 of her 8 Piggles Coins on the missing paint, and now has 4 coins left for to save for the next item on her list."
    ],
    audience: "kid",
    instructions: "Read Aloud",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fab fa-readme",
    backgroundImage: 'lessons/lesson4/pennyPaintingHappyBackground.jpg',
    mobileBackgroundImage: 'lessons/lesson4/pennyPaintingHappyBackground.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page4',
    nextPage: 'page5'
}

const contentPage5 = {
    type: "contentPageQuestions",
    title: "PARENT GOALS",
    text: [
      "Parents, think of a time when you had to choose between multiple things that you wanted.",
      "Discuss:",
      "What were the things that you wanted?",
      "How did you choose between them?",
    ],
    audience: "kid",
    instructions: "Read and Share",
    instructionsTT: "Read and discuss the italicized questions with your kid(s)",
    instructionIcon: "fas fa-book-reader",
    backgroundImage: 'lessons/lesson4/papaWithSunglassesBackground.jpg',
    mobileBackgroundImage: 'lessons/lesson4/papaWithSunglassesBackground.jpg',
    backgroundColor: "#FFFFFF",
    quote: '“I wanted to buy a new pool for the backyard, and also get a new motorcycle. I chose the pool, so the kids could enjoy it on the hot summer days in Pigglesville”',
    quoteAttrib: 'Papa Piggle',
    quoteImg: "lessons/papaPiggleHeadshot.png",
    textPrimaryColor: "#9367E6",
    id: 'page5',
    nextPage: 'page6'
}

const contentPage6 = {
    type: "contentPageQuestions",
    title: "KIDS GOALS",
    text: [
      "Kids, what are some things from your goal catalog that you want?",
      "Discuss:",
      "How can you choose between the multiple things that you want?",
      "Which goal are you working towards first?",
      "Which goal will you work towards next?"
    ],
    audience: "kid",
    instructions: "Read and Share",
    instructionsTT: "Read and discuss the italicized questions with your kid(s)",
    instructionIcon: "fas fa-book-reader",
    backgroundImage: 'lessons/lesson4/pennyThinkingHappyBackground.jpg',
    mobileBackgroundImage: 'lessons/lesson4/pennyThinkingHappyBackground.jpg',
    backgroundColor: "#FFFFFF",
    quote: '“I’m excited to save up 1 more Piggle Coin to buy new brushes.”',
    quoteAttrib: 'Penny Piggle',
    quoteImg: "lessons/lesson1/PennyHeadshotSquare.png",
    textPrimaryColor: "#9367E6",
    id: 'page6',
    nextPage: 'page7'
}

const contentPage7 = {
    type: "contentPageSortingCTA",
    title: "PICK YOUR NEXT GOAL",
    text: [
      "Kids, practice sorting your goals. Once you’re done, check in on the progress you’ve made towards your current goals.",
    ],
    audience: "kid",
    instructions: "Take Action",
    instructionsTT: "Practice putting your list in priority order",
    instructionIcon: "fas fa-tasks",
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: "page7",
    ctaLink: "/goals",
    ctaText: "Check in on your goals",
    ctaIcon: "arrow_forward"
}

const lesson4 = {
    titlePage,
    // Note: The order that the contentPages are passed in here,
    // are the order in which they will be displayed.
    contentPages: [
        contentPage1,
        contentPage2,
        contentPage3,
        contentPage4,
        contentPage5,
        contentPage6,
        contentPage7
    ]
}

export default lesson4