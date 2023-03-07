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
      resultOne: "void 1",
      resultTwo: "void 2",
      resultThree: "void 3",
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 1,
    },
    {
      note: "A family friend sends your child a card. Inside is $10.",
      optionOne: "GIVE YOUR CHILD THE $10",
      optionTwo: "KEEP THE $10",
      optionThree: "",
      resultOne: "void que2 opt-1",
      resultTwo: "void que2 opt-2",
      resultThree: "void que2 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionTwoMoneyAdded: 10,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 2,
    },
    {
      note: "Your best friend from childhood is getting married, and they want you to be in the wedding. The only problem: It's in another state.",
      optionOne: "FLY TO THE WEDDING ($350)",
      optionTwo: "SAY YOU CAN'T GO",
      optionThree: "",
      resultOne: "SOME RESULT TEXT que-3 opt-1",
      resultTwo: "SOME RESULT TEXT que-3 opt-2",
      resultThree: "SOME RESULT TEXT que-3 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 350,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 3,
    },
    {
      note: "You've been putting off doing laundry for weeks because you don't have a washer or dryer.",
      optionOne: "GO TO THE LAUNDROMAT ($30)",
      optionTwo: "ASK A FRIEND",
      optionThree: "WEAR DIRTY CLOTHES",
      resultOne: "SOME RESULT TEXT que4 opt-1",
      resultTwo: "SOME RESULT TEXT que4 opt-2",
      resultThree: "SOME RESULT TEXT que4 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 30,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 4,
    },
    {
      note: "The local community college is offering an online course in computer science, which could be your ticket to a higher paycheck. But the class costs $200.",
      optionOne: "SIGN UP ($200)",
      optionTwo: "MAYBE NEXT SEMESTER",
      optionThree: "",
      resultOne: "SOME RESULT TEXT que5 opt-1",
      resultTwo: "SOME RESULT TEXT que5 opt-2",
      resultThree: "SOME RESULT TEXT que5 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 200,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 5,
    },
    {
      note: "You're sure you weren't speeding, but the cop who gave you a ticket disagrees.",
      optionOne: "PAY IT OFF ($250)",
      optionTwo: "CONTEST IT IN COURT",
      optionThree: "",
      resultOne: "SOME RESULT TEXT que6 opt-1",
      resultTwo: "SOME RESULT TEXT que6 opt-2",
      resultThree: "SOME RESULT TEXT que6 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 250,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 100,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 6,
    },
    {
      note: "Your bathroom sink has a small leak that just became a big leak. Your landlord won't return your calls, and you can't put it off any longer.",
      optionOne: "CALL A PLUMBER ($150)",
      optionTwo: "TRY TO FIX IT YOURSELF",
      optionThree: "",
      resultOne: "SOME RESULT TEXT que7 opt-1",
      resultTwo: "SOME RESULT TEXT que7 opt-2",
      resultThree: "SOME RESULT TEXT que7 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 150,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 50,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 7,
    },
    {
      note: "One of your co-workers has gotten seriously ill. Because your company doesn't offer sick days, everyone is contributing $20 to help her out.",
      optionOne: "PITCH IN",
      optionTwo: "SAY YOU FORGOT YOUR WALLET",
      optionThree: "",
      resultOne: "SOME RESULT TEXT que8 opt-1",
      resultTwo: "SOME RESULT TEXT que8 opt-2",
      resultThree: "SOME RESULT TEXT que8 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 20,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 8,
    },
    {
      note: "You come out of your house to discover that someone has siphoned the gas from your car. And you're already running late for work.",
      optionOne: "TAKE THE BUS",
      optionTwo: "CALL IN SICK",
      optionThree: "ASK A FRIEND FOR A RIDE",
      resultOne: "SOME RESULT TEXT que9 opt-1",
      resultTwo:
        "BCOS YOU CALLED IN SICK $50 WAS REMOVED FROM YOUR PAY-CHEQUE que9 opt-2",
      resultThree: "SOME RESULT TEXT que9 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 15,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 50,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 9,
    },
    {
      note: "The repetitive work you do is taking its toll. Your back hurts so badly you can barely stand, and it's only the beginning of your shift.",
      optionOne: "SUBMIT A WORKER'S COMP CLAIM",
      optionTwo: "WORK THROUGH THE PAIN",
      optionThree: "TAKE THE DAY OFF",
      resultOne: "SOME RESULT TEXT que10 opt-1",
      resultTwo: "SOME RESULT TEXT que10 opt-2",
      resultThree: "SOME RESULT TEXT que10 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 10,
    },
    {
      note: "Your child's class is going on a field trip to the natural history museum. The trip costs $15.",
      optionOne: "PAY THE MONEY",
      optionTwo: "DON'T PAY",
      optionThree: "",
      resultOne: "SOME RESULT TEXT que11 opt-1",
      resultTwo: "SOME RESULT TEXT que11 opt-2",
      resultThree: "SOME RESULT TEXT que11 opt-3",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 15,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 0,
      id: 11,
    },
    {
      note: "Two bills are due today.",
      optionOne: "PAY CELLPHONE BILL ($75)",
      optionTwo: "PAY CAR INSURANCE ($100)",
      optionThree: "PAY THEM BOTH ($175)",
      resultOne: "SOME RESULT TEXT que12 opt-1",
      resultTwo: "SOME RESULT TEXT que12 opt-2",
      resultThree: "SOME RESULT TEXT que12 opt-3",
      moneyAdded: 0, //some func that will set the amt in the option clicked
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 75,
      optionTwoMoneyAdded: 0,
      optionTwoMoneyRemoved: 100,
      optionThreeMoneyAdded: 0,
      optionThreeMoneyRemoved: 175,
      id: 12,
    },
  ];

  // we need a func that will use a unique key of an obj inside
  // questions array to remove it once the obj has been called
  // when the money or array is finally empty, it should show last page

  let currentDay = 1;
  // if currentDay = 30? End of game!

  let score = 1000;
  // if score < 0? End of game!

  let resultStateOne;
  let resultStateOption;

  let resultOptionOne;
  let resultOptionTwo;
  let resultOptionThree;

  let resultTwoOptionOne;
  let resultTwoOptionTwo;
  let resultTwoOptionThree;

  const scoreText = document.getElementById("score");
  const currentDays = document.getElementById("current-day");
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

    score = score - 808;

    // the game ends if the score is less than 0
    if (score <= 0) {
      // the game ends!
    }
    scoreText.textContent = score;
  });

  const findAPlaceContinue = document.getElementById("findAPlaceContinue");
  const firstHouseQuestion = document.getElementById("first-house-question");
  findAPlaceContinue.addEventListener("click", function () {
    // first call into the QUESTIONS array of objects

    if (questions.length === 0) {
      lastPage.style.display = "block";
      firstQuestionResponseResult.style.display = "none";
      firstHouseQuestion.style.display = "none";
    } else {
      firstHouseQuestion.style.display = "block";
      firstQuestionResponseResult.style.display = "none";
      findAPlaceResult.style.display = "none";

      // edges List + vertices list
  const vertices = [{a:1, b:1}, {a:2, b:2}, {a:3, b:3}, {a:4, b:4}, {a:5, b:5}]

  const edges = [
    [questions[0], questions[1]],
    [questions[1], questions[2]],
    [questions[3], questions[4]],
    [questions[5], questions[6]],
    [questions[7], questions[8]],
    [questions[9], questions[10]],
    [questions[10], questions[11]],
  ]

  // findAdjacentNodes
  const findAdjacentNodes = function (node) {

    // loop through edges array
    // Is my node in the connection?
    // if yes, push the other node in pair, into adjacentNodes array
    // If no, keep looping
    const adjacentNodes = []
    let adjacentNode;

    for (let edge of edges) {
      // edge = ['A', 'B']
      const nodeIdx = edge.indexOf(node)
      if (nodeIdx > -1){
        adjacentNode = nodeIdx === 0 ? edge[1] : edge[0]
        adjacentNodes.push(adjacentNode)
      }
    }
    return adjacentNodes
  }

  let ObjArr = findAdjacentNodes(questions[1])

      // let index = Math.floor(Math.random() * questions.length);
      let object = ObjArr[0];
      let objOne = object.id;

      resultOptionOne = object.resultOne;
      resultOptionTwo = object.resultTwo;
      resultOptionThree = object.resultThree;

      // search thru amd remove used array obj
      let output = questions.filter((que) => que.id == objOne);
      console.log(output);
      output.forEach((f) =>
        questions.splice(
          questions.findIndex((e) => e.id === objOne),
          1
        )
      );
      // console.log("some space");

      // console.log(questions.length);

      currentDay = currentDay + 1;
      currentDays.textContent = currentDay;
      noteQue.textContent = object.note;
      optionOneQue.textContent = object.optionOne;
      optionTwoQue.textContent = object.optionTwo;
      optionThreeQue.textContent = object.optionThree;
    }
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
  const resultStatement = document.getElementById("result-statement");

  optionOneQue.addEventListener("click", function () {
    if (questions.length === 0) {
      lastPage.style.display = "block";
      firstQuestionResponseResult.style.display = "none";
      firstHouseQuestion.style.display = "none";
    } else {
      firstHouseQuestion.style.display = "none";
      firstQuestionResponseResult.style.display = "block";

      let index = Math.floor(Math.random() * questions.length);
      let object = questions[index];
      resultStateOption = 1;
      let objOne = object.id;

      resultTwoOptionOne = object.resultOne;
      resultTwoOptionTwo = object.resultTwo;
      resultTwoOptionThree = object.resultThree;      

      // resultOptionOne = resultTwoOptionOne;
      resultOptionTwo = resultTwoOptionTwo;
      resultOptionThree = resultTwoOptionThree;

      // search thru amd remove used array obj
      let output = questions.filter((que) => que.id == objOne);
      console.log(output);
      output.forEach((f) =>
        questions.splice(
          questions.findIndex((e) => e.id === objOne),
          1
        )
      );
      console.log("some space");

      console.log(questions.length);

      currentDay = currentDay + 1;
      currentDays.textContent = currentDay;
      noteQue.textContent = object.note;
      optionOneQue.textContent = object.optionOne;
      optionTwoQue.textContent = object.optionTwo;
      optionThreeQue.textContent = object.optionThree;
      resultStatement.textContent = resultOptionOne;
      resultOptionOne = resultTwoOptionOne;
    }
  });
  optionTwoQue.addEventListener("click", function () {
    if (questions.length === 0) {
      lastPage.style.display = "block";
      firstQuestionResponseResult.style.display = "none";
      firstHouseQuestion.style.display = "none";
    } else {
      firstHouseQuestion.style.display = "none";
      firstQuestionResponseResult.style.display = "block";

      let index = Math.floor(Math.random() * questions.length);
      let object = questions[index];
      resultStateOption = 2;
      let objOne = object.id;

      // resultTwoOptionOne = object.resultOne;
      resultTwoOptionTwo = object.resultTwo;
      // resultTwoOptionThree = object.resultThree;

      resultOptionOne = resultTwoOptionOne;
      // resultOptionTwo = resultTwoOptionTwo;
      resultOptionThree = resultTwoOptionThree;
      

      // search thru amd remove used array obj
      let output = questions.filter((que) => que.id == objOne);
      console.log(output);
      output.forEach((f) =>
        questions.splice(
          questions.findIndex((e) => e.id === objOne),
          1
        )
      );
      console.log("some space");

      console.log(questions.length);

      currentDay = currentDay + 1;
      currentDays.textContent = currentDay;
      noteQue.textContent = object.note;
      optionOneQue.textContent = object.optionOne;
      optionTwoQue.textContent = object.optionTwo;
      optionThreeQue.textContent = object.optionThree;
      resultStatement.textContent = resultOptionTwo;
      resultOptionTwo = resultTwoOptionTwo;
    }
  });
  optionThreeQue.addEventListener("click", function () {
    if (questions.length === 0) {
      lastPage.style.display = "block";
      firstQuestionResponseResult.style.display = "none";
      firstHouseQuestion.style.display = "none";
    } else {
      firstHouseQuestion.style.display = "none";
      firstQuestionResponseResult.style.display = "block";

      let index = Math.floor(Math.random() * questions.length);
      let object = questions[index];
      resultStateOption = 3;
      let objOne = object.id;

      // resultTwoOptionOne = object.resultOne;
      // resultTwoOptionTwo = object.resultTwo;
      resultTwoOptionThree = object.resultThree;

      resultOptionOne = resultTwoOptionOne;
      resultOptionTwo = resultTwoOptionTwo;
      

      // search thru amd remove used array obj
      let output = questions.filter((que) => que.id == objOne);
      console.log(output);
      output.forEach((f) =>
        questions.splice(
          questions.findIndex((e) => e.id === objOne),
          1
        )
      );
      console.log("some space");

      console.log(questions.length);

      currentDay = currentDay + 1;
      currentDays.textContent = currentDay;
      noteQue.textContent = object.note;
      optionOneQue.textContent = object.optionOne;
      optionTwoQue.textContent = object.optionTwo;
      optionThreeQue.textContent = object.optionThree;
      resultStatement.textContent = resultOptionThree;
      resultOptionThree = resultTwoOptionThree;
    }
  });

  const resultQueContinue = document.getElementById("result-que-continue");
  resultQueContinue.addEventListener("click", function () {
    // firstQuestionResponseResult.style.display = "none";
    // firstHouseQuestion.style.display = "block";
    if (questions.length === 0) {
      lastPage.style.display = "block";
      firstQuestionResponseResult.style.display = "none";
      firstHouseQuestion.style.display = "none";
    } else {
      firstHouseQuestion.style.display = "block";
      firstQuestionResponseResult.style.display = "none";
      findAPlaceResult.style.display = "none";
    }
  });

  // manipulating div to randomly display different question
  // and respective results

  // workload
};
