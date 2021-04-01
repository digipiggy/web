const titlePage = {
    type: "titlePage",
    title: "Lesson 3",
    subtitle: "Needs vs Wants",
    readTime: "10",
    audience: "Family reads together.",
    backgroundImage: "placeHolderImage.jpg",
    backgroundImageMobile: "placeHolderImage.jpg",
    textPrimaryColor: "#FFFFFF"
}

const contentPage1 = {
    type: "contentPageTextWithSideImage",
    title: "Penny's Masterpiece",
    text: [
        "Penny thinks of art supplies she would like to get and tells Papa Pig she Needs them for her masterpiece.",
        "Papa explains that there is a difference between Needs and Wants."
    ],
    audience: "kid",
    instructions: "Read Aloud",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fab fa-readme",
    backgroundImage: 'placeHolderImage.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page1',
    nextPage: 'page2'
}

const contentPage2 = {
    type: "contentPageTextWithSideImage",
    title: "NEEDS vs WANTS",
    text: [
        "Sometimes when we consider buying things, it helps to compare what we Need and Want.",
        "A Need keeps you healthy, safe or helps you live like food, water, and shelter.",
        "A Want is something fun or enjoyable that makes you feel happy like ice cream, video games, or a new bike."
    ],
    audience: "kid",
    instructions: "Read Aloud",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fab fa-readme",
    backgroundImage: 'placeHolderImage.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page2',
    nextPage: 'page3'
}

const contentPage3 = {
    type: "contentPageTextWithSideImage",
    title: "Which are Needs or Wants?",
    text: [
        "Kids tell your parents which of these things are Needs and which ones are Wants. Discuss your choices."
    ],
    audience: "kid",
    instructions: "Take Action",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "fas fa-tasks",
    backgroundImage: 'placeHolderImage.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
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
    backgroundImage: 'placeHolderImage.jpg',
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
      "Make a list of a couple of your Wants. You can turn things you Want into Goals you work towards. Review your Goals Catalog to see if there are any new Goals you’d like to add.",
    ],
    audience: "kid",
    instructions: "Take Action",
    instructionIcon: "fas fa-tasks",
    backgroundImage: 'placeHolderImage.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: "page5",
    ctaLink: "/settings",
    ctaText: "Open Goals Catalog",
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