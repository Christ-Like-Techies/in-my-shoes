window.onload = () => {
  // using javascript to change the value of id in a div
  // then allowing the div to render

  /**
   * From what i noticed, events happens after an event
   * the choice of an event will prompt the next event
   * so the events are not random but strategically organised
   * so a choice that leads to a particular endpoint will
   * definite lead to that endpoint again
   *
   * So its a series of conditions that will determine what should be
   * shown
   *
   */

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
    },
  ];

  const proveIt = document.getElementById("prove-it");
  const proveItBtn = document.getElementById("prove-it-btn");

  const canPlay = document.getElementById("can-u-play");
  const findJob = document.getElementById("find-a-job");
  const exitBtn = document.getElementById("exit-btn");

  const secShift = document.querySelector(".sec-shift");
  const joinOur = document.querySelector(".join-our");
  const officeTemp = document.querySelector(".office-temp");

  const continueHealth1 = document.querySelector(".continue-health-1");
  const continueHealth2 = document.querySelector(".continue-health-2");
  const continueHealth3 = document.querySelector(".continue-health-3");
  const healthOption = document.getElementById("health-option");

  const joinOurTeam = document.getElementById("joinOurTeam");
  const ndShiftPrompt = document.getElementById("ndShiftPrompt");
  const officeTempPrompt = document.getElementById("officeTempPrompt");

  const goldPlan = document.getElementById("gold");
  const silverPlan = document.getElementById("silver");
  const bronzePlan = document.getElementById("bronze");
  const healthResultGold = document.getElementById("health-result-gold");
  const healthResultSilver = document.getElementById("health-result-silver");
  const healthResultBronze = document.getElementById("health-result-bronze");

  goldPlan.addEventListener("click", function () {
    healthResultGold.style.display = "block";
    healthOption.style.display = "none";
  });
  silverPlan.addEventListener("click", function () {
    healthResultSilver.style.display = "block";
    healthOption.style.display = "none";
  });
  bronzePlan.addEventListener("click", function () {
    healthResultBronze.style.display = "block";
    healthOption.style.display = "none";
  });

  const healthContinueGold = document.getElementById("health-continue-gold");
  const healthContinueSilver = document.getElementById(
    "health-continue-silver"
  );
  const healthContinueBronze = document.getElementById(
    "health-continue-bronze"
  );
  const findAPlace = document.getElementById("findAPlace");

  healthContinueGold.addEventListener("click", function () {
    healthResultGold.style.display = "none";
    findAPlace.style.display = "block";
  });
  healthContinueSilver.addEventListener("click", function () {
    healthResultSilver.style.display = "none";
    findAPlace.style.display = "block";
  });
  healthContinueBronze.addEventListener("click", function () {
    healthResultBronze.style.display = "none";
    findAPlace.style.display = "block";
  });

  const payForPlace = document.getElementById("pay-for-place");
  const findAPlaceResult = document.getElementById("findAPlaceResult");
  payForPlace.addEventListener("click", function () {
    findAPlaceResult.style.display = "block";
    findAPlace.style.display = "none";
  });

  const findAPlaceContinue = document.getElementById("findAPlaceContinue");
  const firstHouseQuestion = document.getElementById("first-house-question");
  findAPlaceContinue.addEventListener("click", function () {
    firstHouseQuestion.style.display = "block";
    findAPlaceResult.style.display = "none";
  });

  const template = document.getElementById("template");
  const resultTemp = document.getElementById("result-temp");
  const resultOk = document.getElementById("result-ok");

  const lastPage = document.getElementById("last-page");

  proveItBtn.addEventListener("click", function () {
    proveIt.style.display = "none";
    canPlay.style.display = "block";
  });

  findJob.addEventListener("click", function () {
    template.style.display = "block";
    canPlay.style.display = "none";
  });

  exitBtn.addEventListener("click", function () {
    canPlay.style.display = "none";
    lastPage.style.display = "block";
  });

  secShift.addEventListener("click", function () {
    ndShiftPrompt.style.display = "block";
    template.style.display = "none";
  });
  joinOur.addEventListener("click", function () {
    joinOurTeam.style.display = "block";
    template.style.display = "none";
  });
  officeTemp.addEventListener("click", function () {
    officeTempPrompt.style.display = "block";
    template.style.display = "none";
  });

  continueHealth1.addEventListener("click", function () {
    healthOption.style.display = "block";
    ndShiftPrompt.style.display = "none";
    joinOurTeam.style.display = "none";
    officeTempPrompt.style.display = "none";
  });
  continueHealth2.addEventListener("click", function () {
    healthOption.style.display = "block";
    ndShiftPrompt.style.display = "none";
    joinOurTeam.style.display = "none";
    officeTempPrompt.style.display = "none";
  });

  continueHealth3.addEventListener("click", function () {
    healthOption.style.display = "block";
    ndShiftPrompt.style.display = "none";
    joinOurTeam.style.display = "none";
    officeTempPrompt.style.display = "none";
  });

  resultOk.addEventListener("click", function () {
    resultTemp.style.display = "none";
    template.style.display = "block";
  });

  const noteQue = document.getElementById("note-que");
  const optionOneQue = document.getElementById("option-one-que");
  const optionTwoQue = document.getElementById("option-two-que");
  const optionThreeQue = document.getElementById("option-three-que");
  const firstQuestionResponseResult = document.getElementById(
    "first-question-response-result"
  );

  optionOneQue.addEventListener("click", function () {
    firstHouseQuestion.style.display = "none";
    firstQuestionResponseResult.style.display = "block";
  
    const index = Math.floor(Math.random() * questions.length);
    const object = questions[index];

    noteQue.textContent = object.note;
    optionOneQue.textContent = object.optionOne;
    optionTwoQue.textContent = object.optionTwo;
    optionThreeQue.textContent = object.optionThree;
  });
  optionTwoQue.addEventListener("click", function () {
    firstHouseQuestion.style.display = "none";
    firstQuestionResponseResult.style.display = "block";
    
    const index = Math.floor(Math.random() * questions.length);
    const object = questions[index];

    noteQue.textContent = object.note;
    optionOneQue.textContent = object.optionOne;
    optionTwoQue.textContent = object.optionTwo;
    optionThreeQue.textContent = object.optionThree;
  });
  optionThreeQue.addEventListener("click", function () {
    firstHouseQuestion.style.display = "none";
    firstQuestionResponseResult.style.display = "block";
    
    const index = Math.floor(Math.random() * questions.length);
    const object = questions[index];

    noteQue.textContent = object.note;
    optionOneQue.textContent = object.optionOne;
    optionTwoQue.textContent = object.optionTwo;
    optionThreeQue.textContent = object.optionThree;
  });

  const resultQueContinue = document.getElementById("result-que-continue");
  resultQueContinue.addEventListener("click", function() {
  firstQuestionResponseResult.style.display = "none";
  firstHouseQuestion.style.display = "block";
  })




  // manipulating div to randomly display different question 
  // and respective results
  


  // workload
};
