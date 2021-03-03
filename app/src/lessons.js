// system colors
const brightGreen = '#A0E667'
const lightGreen = '#EDFFDC'
const teal = '#48A182'
const lightGrey = '#F7F8FA'
const purple = '#9367E6'
//const white = '#FFFFFF'
//const darkGrey = '#2C2C2C'

// background Gradients 
const greenToLightGreen = `linear-gradient(135deg, ${brightGreen} 0%, ${lightGreen} 100%)`
const lightGreyToPurple = `linear-gradient(135deg, ${lightGrey} 0%, ${purple} 100%)`
const tealToLightGrey = `linear-gradient(135deg, ${teal} 0%, ${lightGrey} 100%)`

const titlePage = {
  title: "Goals",
  subtitle: "What's a Goal?",
  type: 'title',
  completionTime: '5',
  backgroundColor: greenToLightGreen,
  textPrimaryColor: '#9367E6',
  textSecondaryColor: '#9367E6',
}
const textWithPictureRightPage = {
  text: "Don't kill all your dark areas - you need them to show the light. Maybe there's a little something happening right here. The only prerequisite is that it makes you happy. If it makes you happy then it's good. Use your imagination, let it go. We'll throw some happy little limbs on this tree.",
  imageLoc: "rex&Penny.jpg",
  type: 'textWithPictureRight',
  backgroundColor: lightGreyToPurple,
  textPrimaryColor: '#2C2C2C'
}
const textWithPictureLeftPage = {
  text: "That's a crooked tree. We'll send him to Washington. The light is your friend. Preserve it. Have fun with it. Everybody's different. Trees are different. Let them all be individuals.",
  imageLoc: "rex&Penny.jpg",
  type: 'textWithPictureLeft',
  backgroundColor: tealToLightGrey,
  textPrimaryColor: '#2C2C2C'
}
const textPage = {
  text: "That's a crooked tree. We'll send him to Washington. The light is your friend. Preserve it. Have fun with it. Everybody's different. Trees are different. Let them all be individuals.",
  imageLoc: "rex&Penny.jpg",
  type: 'text',
  backgroundColor: lightGreyToPurple,
  textPrimaryColor: '#2C2C2C'
}
const textWithTitlePage = {
  title: "What's a goal?",
  text: "That's a crooked tree. We'll send him to Washington. The light is your friend. Preserve it. Have fun with it. Everybody's different. Trees are different. Let them all be individuals.",
  type: 'textWithTitle',
  backgroundColor: lightGreyToPurple,
  textPrimaryColor: '#2C2C2C'
}
const headingPage = {
  title: "What's a goal?",
  type: 'heading',
  backgroundColor: lightGreyToPurple,
  textPrimaryColor: '#2C2C2C'
}
const questionPage = {
  questions: [
    "What are clouds?",
    "Why are clouds?",
    "Where are clouds?",
  ],
  imageLoc: "rex&Penny.jpg",
  type: 'question',
  backgroundColor: greenToLightGreen,
  textPrimaryColor: '#2C2C2C'
}
const ctaPage = {
  text: "Be careful. You can always add more - but you can't take it away. Anything you want to do you can do here. But they're very easily killed. Clouds are delicate. Put it in, leave it alone. That's what makes life fun. That you can make these decisions. That you can create the world that you want.",
  imageLoc: "rex&Penny.jpg",
  redirectPage: 'pigSettings',
  type: 'cta',
  backgroundColor: lightGreyToPurple,
  textPrimaryColor: '#2C2C2C'
}

const newTitlePage = {
  type: "newTitlePage",
  title: "Lesson 1",
  subtitle: "Goals",
  readTime: "15",
  audience: "Family reads together.",
  backgroundImage: "familyKitchen.jpg",
  textPrimaryColor: "#FFFFFF"
}

const newTextPage = {
  type: "newTextPage",
  title: "What is a goal?",
  text: [
    "A goal is something you’d like to do or have someday. It’s usually something you don’t get right away. You work for and wait to earn a goal. It takes planning and careful choices to reach a goal.",
    "You hear about goals in sports, because a team is working to get points to win a game. The goal of soccer is to get the ball into the net."
  ],
  audience: "kid",
  instructions: "Family reads",
  instructionIcon: "book-open",
  backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255) 35%, rgb(255, 255, 255,0) 100%), url(../assets/PennyGoal.png)',
  backgroundColor: "#FFFFFF",
  quote: "I try to make goals when I play soccer - Penny Piggle",
  quoteImg: "PennyHeadshotSquare.png",
  textPrimaryColor: "#9367E6"
}

const lessons = [
    {
      title: "1",
      coverImage: "",
      pages: {
        titlePage: newTitlePage,
        contentPages: [
          newTextPage
        ],
        finalPage: {

        }
        // titlePage,
        // headingPage,
        // textPage,
        // textWithTitlePage,
        // textWithPictureLeftPage,
        // textWithPictureRightPage,
        // questionPage,
        // ctaPage
        
      }
    }
  ]

export default lessons;