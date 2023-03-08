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
