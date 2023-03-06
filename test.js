let questions = [
    {
      note: "One of your co-workers has gotten seriously ill. Because your company doesn’t offer sick days, everyone is contributing $20 to help her out.",
      optionOne: "PITCH IN",
      optionTwo: "SAY YOU FORGOT YOUR WALLET",
      optionThree: "",
      result: "void 1",
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 1
    },
    {
      note: "A family friend sends your child a card. Inside is $10.",
      optionOne: "GIVE YOUR CHILD THE $10",
      optionTwo: "KEEP THE $10",
      optionThree: "",
      result: "void 2",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 2
    },
    {
      note: "Your best friend from childhood is getting married, and they want you to be in the wedding. The only problem: It's in another state.",
      optionOne: "FLY TO THE WEDDING ($350)",
      optionTwo: "SAY YOU CAN'T GO",
      optionThree: "",
      result: "SOME RESULT TEXT 3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 3
    },
    {
      note: "You've been putting off doing laundry for weeks because you don't have a washer or dryer.",
      optionOne: "GO TO THE LAUNDROMAT ($30)",
      optionTwo: "ASK A FRIEND",
      optionThree: "WEAR DIRTY CLOTHES",
      result: "SOME RESULT TEXT 4",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 4
    },
    {
      note: "The local community college is offering an online course in computer science, which could be your ticket to a higher paycheck. But the class costs $200.",
      optionOne: "SIGN UP ($200)",
      optionTwo: "MAYBE NEXT SEMESTER",
      optionThree: "",
      result: "SOME RESULT TEXT 5",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 5
    },
    {
      note: "You're sure you weren't speeding, but the cop who gave you a ticket disagrees.",
      optionOne: "PAY IT OFF ($250)",
      optionTwo: "CONTEST IT IN COURT",
      optionThree: "",
      result: "SOME RESULT TEXT 6",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 250,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 100,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 6
    },
    {
      note: "Your bathroom sink has a small leak that just became a big leak. Your landlord won't return your calls, and you can't put it off any longer.",
      optionOne: "CALL A PLUMBER ($150)",
      optionTwo: "TRY TO FIX IT YOURSELF",
      optionThree: "",
      result: "SOME RESULT TEXT 7",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 150,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 50,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 7
    },
    {
      note: "One of your co-workers has gotten seriously ill. Because your company doesn't offer sick days, everyone is contributing $20 to help her out.",
      optionOne: "PITCH IN",
      optionTwo: "SAY YOU FORGOT YOUR WALLET",
      optionThree: "",
      result: "SOME RESULT TEXT 8",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 20,
      optionOneMoneyRemoved: 0,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 8
    },
    {
      note: "You come out of your house to discover that someone has siphoned the gas from your car. And you're already running late for work.",
      optionOne: "TAKE THE BUS",
      optionTwo: "CALL IN SICK",
      optionThree: "ASK A FRIEND FOR A RIDE",
      result: "SOME RESULT TEXT 9",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 15,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 9
    },
    {
      note: "The repetitive work you do is taking its toll. Your back hurts so badly you can barely stand, and it's only the beginning of your shift.",
      optionOne: "SUBMIT A WORKER'S COMP CLAIM",
      optionTwo: "WORK THROUGH THE PAIN",
      optionThree: "TAKE THE DAY OFF",
      result: "SOME RESULT TEXT 10",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 10
    },
    {
      note: "Your child's class is going on a field trip to the natural history museum. The trip costs $15.",
      optionOne: "PAY THE MONEY",
      optionTwo: "DON'T PAY",
      optionThree: "",
      result: "SOME RESULT TEXT 11",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 15,
      optionOneMoneyRemoved: 0,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 11
    },
    {
      note: "Two bills are due today.",
      optionOne: "PAY CELLPHONE BILL ($75)",
      optionTwo: "PAY CAR INSURANCE ($100)",
      optionThree: "PAY THEM BOTH ($175)",
      result: "SOME RESULT TEXT 12",
      moneyAdded: 0, //some func that will set the amt in the option clicked
      moneyRemoved: 0,
      optionOneMoneyAdded: 75,
      optionOneMoneyRemoved: 0,
      optionTwoMoneyAdded: 100,
      optionTwoMoneyRemoved: 0,
      // optionThreeMoneyAdded: optionOneMoneyAdded + optionTwoMoneyAdded,
      optionThreeMoneyRemoved: 0,
      id: 12
    },
  ];
  let cato;

  // we need a func that will use a unique key of an obj inside
  // questions array to remove it once the obj has been called 
  // when the money or array is finally empty, it should show last page
  function removeObj(questions){
    let index = Math.floor(Math.random() * questions.length);
    let object = questions[index];
    let objOne = object.id;

    // search thru
    let output = questions.filter(que => que.id == objOne);
    console.log(output);
    output.forEach(f => questions.splice(questions.findIndex(e => e.id === objOne),1));
    console.log("some space");
    cato = questions
    console.log(questions);
    return questions;
  }

  removeObj(questions);
  console.log(cato.length);