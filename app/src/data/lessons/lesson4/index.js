const titlePage = {
    type: "titlePage",
    title: "Lesson 4",
    subtitle: "Making Choices",
    readTime: "10",
    audience: "Family reads together.",
    backgroundImage: "placeHolderImage.jpg",
    backgroundImageMobile: "placeHolderImage.jpg",
    textPrimaryColor: "#FFFFFF"
}

const contentPage1 = {
    type: "contentPageSortingGame",
    title: "HELP PENNY ORDER HER LIST",
    text: [
        "Penny’s masterpiece is almost done, but she…(tbd)",
        "Choose the items that are most important to Penny, and drag them into order. "
    ],
    audience: "kid",
    instructions: "Your Turn - Try It Out",
    instructionsTT: "Read this section out loud with your kid(s).",
    instructionIcon: "mdi-view-headline",
    backgroundImage: 'placeHolderImage.jpg',
    mobileBackgroundImage: 'placeHolderImage.jpg',
    backgroundColor: "#FFFFFF",
    textPrimaryColor: "#9367E6",
    id: 'page1',
    nextPage: 'page2'
}

const lesson4 = {
    titlePage,
    // Note: The order that the contentPages are passed in here,
    // are the order in which they will be displayed.
    contentPages: [
        contentPage1
    ]
}

export default lesson4