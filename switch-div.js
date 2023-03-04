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

  healthContinueGold.addEventListener("click", function() {
    healthResultGold.style.display = "none";
    findAPlace.style.display = "block";
  })
  healthContinueSilver.addEventListener("click", function() {
    healthResultSilver.style.display = "none";
    findAPlace.style.display = "block";
  })
  healthContinueBronze.addEventListener("click", function() {
    healthResultBronze.style.display = "none";
    findAPlace.style.display = "block";
  })

  const template = document.getElementById("template");
  const buttonNext = document.querySelector(".next");
  const resultTemp = document.getElementById("result-temp");
  const resultOk = document.getElementById("result-ok");

  const note = document.getElementById("note");
  const question = document.getElementById("question");

  const optionOne = document.getElementById("option-one");
  const optionTwo = document.getElementById("option-two");
  const optionThree = document.getElementById("option-three");

  const lastPage = document.getElementById("last-page");

  const note1 = "Your new apartment is too small for your stuff";
  const note2 =
    "Your landlord found out that you have a pet, and now you have to pay a $350 pet fee.";
  const note3 =
    "You're driving with your kid in the backseat when your car slips on a slick streach";

  const ques1 = "WHAT DO YOU WANT TO DO?";
  const ques2 = "WHAT DO YOU WANT TO DO?";
  const ques3 = "WHAT DO YOU WANT TO DO?";

  const optionOne1 = "rent a storage unit($45)";
  const optionOne2 = "pay the fee";
  const optionOne3 = "pay the damage($550)";

  const optionTwo1 = "have a yard sale";
  const optionTwo2 = "take your pet to the animal shelter";
  const optionTwo3 = "drive away";

  const optionThree1 = "ask a friend to store it";
  const optionThree2 = "ask a friend to take your pet";
  const optionThree3 = "";

  proveItBtn.addEventListener("click", function () {
    proveIt.style.display = "none";
    canPlay.style.display = "block";
  });

  buttonNext.addEventListener("click", function () {
    resultTemp.style.display = "block";
    template.style.display = "none";

    // loop through the NodeList to find the element you want to modify
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      if (i === 0) {
        // set the new id for the element
        element.setAttribute("id", "one");
      }
    }
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

  optionOne.addEventListener("click", function () {
    resultTemp.style.display = "block";
    template.style.display = "none";

    note.innerHTML = note1;
    optionOne.innerHTML = optionOne1;
    optionTwo.innerHTML = optionTwo1;
    optionThree.innerHTML = optionThree1;
    question.innerHTML = ques1;
  });

  optionTwo.addEventListener("click", function () {
    resultTemp.style.display = "block";
    template.style.display = "none";
  });

  optionThree.addEventListener("click", function () {
    resultTemp.style.display = "block";
    template.style.display = "none";
  });

  resultOk.addEventListener("click", function () {
    resultTemp.style.display = "none";
    template.style.display = "block";
  });
};
