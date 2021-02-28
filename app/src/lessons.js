const lessons = [
    {
      title: "1",
      pages: [
        {
          number: 0, 
          title: "Goals",
          type: 'title',
          backgroundColor: '#EDFFDC',
          textColor: 'white'
        },
        {
          number: 1, 
          text: "Don't kill all your dark areas - you need them to show the light. Maybe there's a little something happening right here. The only prerequisite is that it makes you happy. If it makes you happy then it's good. Use your imagination, let it go. We'll throw some happy little limbs on this tree.",
          imageLoc: "rex&Penny.jpg",
          type: 'text-1',
          backgroundColor: '#FFFFFF',
          textColor: 'white'
        },
        {
          number: 2, 
          text: "That's a crooked tree. We'll send him to Washington. The light is your friend. Preserve it. Have fun with it. Everybody's different. Trees are different. Let them all be individuals.",
          imageLoc: "rex&Penny.jpg",
          type: 'text-2',
          backgroundColor: '#EDFFDC',
          textColor: 'white'
        },
        {
          number: 3, 
          questions: [
            "What are clouds?",
            "Why are clouds?",
            "Where are clouds?",
          ],
          imageLoc: "rex&Penny.jpg",
          type: 'question-1',
          backgroundColor: '#F7F8FA',
          textColor: 'white'
        },
        {
          number: 4, 
          text: "Be careful. You can always add more - but you can't take it away. Anything you want to do you can do here. But they're very easily killed. Clouds are delicate. Put it in, leave it alone. That's what makes life fun. That you can make these decisions. That you can create the world that you want.",
          imageLoc: "rex&Penny.jpg",
          redirectPage: 'pigSettings',
          type: 'cta-1',
          backgroundColor: '#EDFFDC',
          textColor: 'white'
        },
      ]
    }
  ]

export default lessons;