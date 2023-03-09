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

console.log('all set')



const proveIt = document.getElementById("prove-it");
const proveItBtn = document.getElementById("prove-it-btn");

const canYouPlay = document.getElementById("can-u-play");
const findJobBtn = document.getElementById("find-a-job");
const exitBtn = document.getElementById("exit-btn");

const jobOption = document.getElementById("job-options");
const secShift = document.getElementById("sec-shift");
const joinOur = document.getElementById("join-our");
const officeTemp = document.getElementById("office-temp");