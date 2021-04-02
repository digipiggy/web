const titlePage = {
    type: "titlePage",
    title: "Lesson 3",
    subtitle: "Needs vs Wants",
    readTime: "10",
    audience: "Family reads together.",
    backgroundImage: "lessons/lesson3/lesson3Title.jpg",
    backgroundImageMobile: "lessons/lesson3/lesson3TitleMobile.jpg",
    textPrimaryColor: "#FFFFFF"
}

const contentPage1 = {
    type: "contentPageBasicText",
    title: "Penny's Masterpiece",
    text: [
        "Penny thinks of art supplies she would like to get and tells Papa Piggle she Needs them for her masterpiece.",
        "Papa explains that there is a difference between Needs and Wants."
    ],
    audience: "kid",
    instructions: "Read Aloud",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fab fa-readme",
    backgroundImage: 'lessons/lesson3/pennyPaintingBackground.jpg',
    mobileBackgroundImage: 'lessons/lesson3/pennyPainting.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page1',
    nextPage: 'page2'
}

const contentPage2 = {
    type: "contentPageBasicText",
    title: "NEEDS vs WANTS",
    text: [
        "Sometimes when we consider buying things, it helps to compare what we Need and Want.",
        "A Need keeps you healthy, safe or helps you live like food, water, and a home.",
        "A Want is something fun or enjoyable that makes you feel happy like ice cream, video games, or a new bike."
    ],
    audience: "kid",
    instructions: "Read Aloud",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fab fa-readme",
    backgroundImage: 'lessons/lesson3/papaTalkingBackground.jpg',
    mobileBackgroundImage: 'lessons/lesson3/papaTalking.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page2',
    nextPage: 'page3'
}

const contentPage3 = {
    type: "contentPageFlipCards",
    title: "Which are Needs or Wants?",
    text: [
        "Kids tell your parents which of these things are Needs and which ones are Wants. Click to reveal and discuss your choices."
    ],
    audience: "kid",
    instructions: "Take Action",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fas fa-tasks",
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    flipCards: [
        {frontText: "Bicycle", frontImg: "lessons/lesson3/bike.png", backText: "Want", backColor: "#48A182"},
        {frontText: "Brushes", frontImg: "lessons/lesson3/brush.png", backText: "Want", backColor: "#48A182"},
        {frontText: "Water", frontImg: "lessons/lesson3/water.png", backText: "Need", backColor: "#9367E6"},
        {frontText: "Home", frontImg: "lessons/lesson3/house.png", backText: "Need", backColor: "#9367E6"},
        {frontText: "Dessert", frontImg: "lessons/lesson3/iceCream.png", backText: "Want", backColor: "#48A182"},
        {frontText: "Food", frontImg: "lessons/lesson3/food.png", backText: "Need", backColor: "#9367E6"},
        {frontText: "Rest", frontImg: "lessons/lesson3/sleep.png", backText: "Need", backColor: "#9367E6"},
        {frontText: "Games", frontImg: "lessons/lesson3/videoGame.png", backText: "Want", backColor: "#48A182"},
        {frontText: "Pizza", frontImg: "lessons/lesson3/pizza.png", backText: "Want", backColor: "#48A182"}
    ],
    id: 'page3',
    nextPage: 'page4'
}

const contentPage4 = {
    type: "contentPageQuestions",
    title: "What do you think?",
    text: [
      "Kids, do you think Penny Needs or Wants new art supplies?",
      "Discuss:",
      "Kids, what are some things that you Need?",
      "Kids, what are some things that you Want?",
      "Parents, what are some things that you Need and Want?"
    ],
    audience: "kid",
    instructions: "Read and Share",
    instructionsTT: "Read and discuss the italicized questions with your kid(s)",
    instructionIcon: "fas fa-book-reader",
    backgroundImage: 'lessons/lesson3/pennyThinkingBackground.jpg',
    mobileBackgroundImage: 'lessons/lesson3/pennyThinking.jpg',
    backgroundColor: "#FFFFFF",
    quote: '"I  really want some new brushes, easel, new canvas, and paints to create my masterpiece!"',
    quoteAttrib: 'Penny Piggle',
    quoteImg: "lessons/lesson1/PennyHeadshotSquare.png",
    textPrimaryColor: "#9367E6",
    id: 'page4',
    nextPage: 'page5'
}

const contentPage5 = {
    type: "contentPageTakeAction",
    title: "Make A List",
    text: [
      "After talking with Papa, Penny realizes that her art supplies were Wants and not Needs.",
      "Penny creates a list of art supplies that she Wants for her masterpiece. Papa realizes this is important to her but explains she can’t buy them all at once.",
      "Make a list of a few of your Wants. You can turn things you Want into Goals you work toward. Review your Goals Catalog to see if there are any new Goals you’d like to add.",
    ],
    audience: "kid",
    instructions: "Take Action",
    instructionsTT: "Make a list of Wants, and review your Goals.",
    instructionIcon: "fas fa-tasks",
    backgroundImage: 'lessons/lesson3/papaAndPennyWantsListBackground.jpg',
    mobileBackgroundImage: 'lessons/lesson3/papaAndPennyWantsList.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: "page5",
    ctaLink: "/settings#goalCatalog",
    ctaText: "Update Goals Catalog",
    ctaIcon: "arrow_forward"
}

const lesson3 = {
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

export default lesson3