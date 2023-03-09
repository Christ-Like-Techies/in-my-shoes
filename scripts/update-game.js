// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(
  messageEvent,
  function (e) {
    if (e.data.balance) {
      balanceElement = document.getElementById("balance");
      balanceElement.innerHTML =
        Number(balanceElement.innerHTML) + e.data.balance;
    }

    if (e.data.day) {
      dayElement = document.getElementById("day");
      dayElement.innerHTML = Number(dayElement.innerHTML) + e.data.day;
    }
  },
  false
);

console.log("all set");

// ==========================================================
// implementing the replacement of iframes with div
// ========================================================

const proveIt = document.getElementById("prove-it");
const proveItBtn = document.getElementById("prove-it-btn");

const canYouPlay = document.getElementById("can-u-play");
const findJobBtn = document.getElementById("find-a-job");
const exitBtn = document.getElementById("exit-btn");

const lastPage = document.getElementById("last-page");
const playAgainBtn = document.getElementById("play-again-btn");

const jobOption = document.getElementById("job-options");
const secShift = document.querySelector(".sec-shift");
const joinOur = document.querySelector(".join-our");
const officeTemp = document.querySelector(".office-temp");

const joinOurTeam = document.getElementById("joinOurTeam");
const joinOurTeamContBtn = document.getElementById("joinOurTeam-cont-btn");

const secndShiftPrompt = document.getElementById("secndShiftPrompt");
const secndShiftPromptContBtn = document.getElementById(
  "secndShiftPrompt-cont-btn"
);

const officeTempPrompt = document.getElementById("officeTempPrompt");
const officeTempPromptContBtn = document.getElementById(
  "officeTempPrompt-cont-btn"
);

const healthPlan = document.getElementById("health-plan");

proveItBtn.addEventListener("click", function () {
  proveIt.style.display = "none";
  canYouPlay.style.display = "block";
});

findJobBtn.addEventListener("click", function () {
  canYouPlay.style.display = "none";
  jobOption.style.display = "block";
});

exitBtn.addEventListener("click", function () {
  canYouPlay.style.display = "none";
  lastPage.style.display = "block";
});

// select the secondShift arrays of questions to work with
secShift.addEventListener("click", function () {
  jobOption.style.display = "none";
  secndShiftPrompt.style.display = "block";
  currentQuestionArr = secondShiftArr;
});

// select the joinOurTeam arrays of questions to work with
joinOur.addEventListener("click", function () {
  jobOption.style.display = "none";
  joinOurTeam.style.display = "block";
  currentQuestionArr = joinOurTeamArr;
});

// select the officeTemp arrays of questions to work with
officeTemp.addEventListener("click", function () {
  jobOption.style.display = "none";
  officeTempPrompt.style.display = "block";
  currentQuestionArr = officeTempArr;
});

joinOurTeamContBtn.addEventListener("click", function () {
  joinOurTeam.style.display = "none";
  healthPlan.style.display = "block";
});

secndShiftPromptContBtn.addEventListener("click", function () {
  secndShiftPrompt.style.display = "none";
  healthPlan.style.display = "block";
});

officeTempPromptContBtn.addEventListener("click", function () {
  officeTempPrompt.style.display = "none";
  healthPlan.style.display = "block";
});

// ===========================================================
// events of chossing health plan gold silver bronze
// ===========================================================

const goldPlan = document.getElementById("gold");
const silverPlan = document.getElementById("silver");
const bronzePlan = document.getElementById("bronze");

const healthResultGold = document.getElementById("health-result-gold");
const continueGoldBtn = document.getElementById("continue-gold-btn");

const healthResultSilver = document.getElementById("health-result-silver");
const continueSilverBtn = document.getElementById("continue-silver-btn");

const healthResultBronze = document.getElementById("health-result-bronze");
const continueBronzeBtn = document.getElementById("continue-bronze-btn");

const findAPlace = document.getElementById("findAPlace");
const payForPlaceBtn = document.getElementById("pay-for-place-btn");

const findAPlaceResult = document.getElementById("findAPlaceResult");
const findAPlaceContinue = document.getElementById("findAPlaceContinue");

goldPlan.addEventListener("click", function () {
  healthPlan.style.display = "none";
  healthResultGold.style.display = "block";
});
silverPlan.addEventListener("click", function () {
  healthPlan.style.display = "none";
  healthResultSilver.style.display = "block";
});
bronzePlan.addEventListener("click", function () {
  healthPlan.style.display = "none";
  healthResultBronze.style.display = "block";
});

continueGoldBtn.addEventListener("click", function () {
  healthResultGold.style.display = "none";
  findAPlace.style.display = "block";
});
continueSilverBtn.addEventListener("click", function () {
  healthResultSilver.style.display = "none";
  findAPlace.style.display = "block";
});
continueBronzeBtn.addEventListener("click", function () {
  healthResultBronze.style.display = "none";
  findAPlace.style.display = "block";
});

payForPlaceBtn.addEventListener("click", function () {
  findAPlace.style.display = "none";
  findAPlaceResult.style.display = "block";
});

// ==========================================================
// implementing the selecting of questions randomly
// ===========================================================

const nextRandomQuestion = document.getElementById("next-random-question");
const queNote = document.getElementById("que-note");
const question = document.getElementById("question");
const queOptionOne = document.getElementById("que-option-one");
const queOptionTwo = document.getElementById("que-option-two");
const queOptionThree = document.getElementById("que-option-three");

const nextResultQuestionOption = document.getElementById(
  "next-result-question-option"
);
const resultStatement = document.getElementById("result-statement");
const resultQueContinue = document.getElementById("result-que-continue");

// first place to set question
findAPlaceContinue.addEventListener("click", function () {});
