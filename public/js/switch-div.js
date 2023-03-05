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
      result: "void",
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
      result: "void",
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
      result: "SOME RESULT TEXT",
      moneyAdded: 0,
      moneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionOneMoneyAdded: 0,
      optionOneMoneyRemoved: 0,
      optionThreeMoneyAdded: 0,
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
  findAPlaceContinue.addEventListener("click", function() {
    firstHouseQuestion.style.display = "block"
    findAPlaceResult.style.display = "none";
  })



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


  const optionOneQue = document.getElementById("option-one-que");
  const optionTwoQue = document.getElementById("option-two-que");
  const optionThreeQue = document.getElementById("option-three-que");
  const firstQuestionResponseResult = document.getElementById("first-question-response-result");

  optionOneQue.addEventListener("click", function() {
    firstHouseQuestion.style.display = "none";
    firstQuestionResponseResult.style.display = "block";
  })
  optionTwoQue.addEventListener("click", function() {
    firstHouseQuestion.style.display = "none";
    firstQuestionResponseResult.style.display = "block";
  })
  optionThreeQue.addEventListener("click", function() {
    firstHouseQuestion.style.display = "none";
    firstQuestionResponseResult.style.display = "block";
  })

  const resultQueContinue = document.getElementById("result-que-continue");
  resultQueContinue.addEventListener("click", function () {
    firstHouseQuestion.style.display = "block";
    firstQuestionResponseResult.style.display = "none";
  });
};
