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

// =========================================================
// the array of objects for different category
// =========================================================
let officeTempArr = [
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

let secondShiftArr = [
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

let joinOurTeamArr = [
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

let note;
let optionOne;
let optionTwo;
let optionThree;
let resultOne;
let resultTwo;
let resultThree;
let resultFour;
let optionOneMoneyAdded;
let optionOneMoneyRemoved;
let optionTwoMoneyAdded;
let optionTwoMoneyRemoved;
let optionThreeMoneyAdded;
let optionThreeMoneyRemoved;

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
let currentQuestionArr;

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

  currentScore = currentScore - 808;
  score.textContent = currentScore;
});

// ==========================================================
// implementing the selection of questions randomly
// ===========================================================

// get score and date from html
let scoreChange;
let day = 1;
let currentScore = 1000;
const score = document.getElementById("balance");
const currentDay = document.getElementById("day");

const nextRandomQuestion = document.getElementById("next-random-question");
const queNote = document.getElementById("que-note");
const question = document.getElementById("question");
const queOptionOne = document.getElementById("que-option-one");
const queOptionTwo = document.getElementById("que-option-two");
const queOptionThree = document.getElementById("que-option-three");

const nextResultQuestionOption = document.getElementById(
  "next-result-question-option"
);
const resultStatementOne = document.getElementById("result-statement-one");
const resultStatementTwo = document.getElementById("result-statement-two");
const resultStatementThree = document.getElementById("result-statement-three");
const resultStatementFour = document.getElementById("result-statement-four");
const resultQueContinue = document.getElementById("result-que-continue");

// first place to set question
findAPlaceContinue.addEventListener("click", function () {
  // console.log(currentQuestionArr);
  let index = Math.floor(Math.random() * currentQuestionArr.length);
  let object = currentQuestionArr[index];

  // search thru the array amd remove used obj
  let output = currentQuestionArr.filter((que) => que.id == object.id);
  // console.log(output);
  output.forEach((f) =>
    currentQuestionArr.splice(
      currentQuestionArr.findIndex((e) => e.id === object.id),
      1
    )
  );
  // console.log(currentQuestionArr);

  note = object.note;
  optionOne = object.optionOne;
  optionTwo = object.optionTwo;
  optionThree = object.optionThree;
  resultOne = object.resultOne;
  resultTwo = object.resultTwo;
  resultThree = object.resultThree;
  resultFour = object.resultFour;
  optionOneMoneyAdded = object.optionOneMoneyAdded;
  optionOneMoneyRemoved = object.optionOneMoneyRemoved;
  optionTwoMoneyAdded = object.optionTwoMoneyAdded;
  optionTwoMoneyRemoved = object.optionTwoMoneyRemoved;
  optionThreeMoneyAdded = object.optionThreeMoneyAdded;
  optionThreeMoneyRemoved = object.optionThreeMoneyRemoved;

  queNote.textContent = note;
  queOptionOne.textContent = optionOne;
  queOptionTwo.textContent = optionTwo;
  queOptionThree.textContent = optionThree;
  resultStatementOne.textContent = resultOne;
  resultStatementTwo.textContent = resultTwo;
  resultStatementThree.textContent = resultThree;
  resultStatementFour.textContent = resultFour;

  day = day + 1;
  currentDay.textContent = day;

  // nextResultQuestionOption.style.display = "block";
  findAPlaceResult.style.display = "none";
  nextRandomQuestion.style.display = "block";
});

queOptionOne.addEventListener("click", function () {
  nextResultQuestionOption.style.display = "block";
  nextRandomQuestion.style.display = "none";

  resultStatementOne.style.display = "block";
  resultStatementTwo.style.display = "none";
  resultStatementThree.style.display = "none";
  resultStatementFour.style.display = "none";

  scoreChange = optionOneMoneyAdded - optionOneMoneyRemoved;
  currentScore = currentScore + scoreChange;
});
queOptionTwo.addEventListener("click", function () {
  nextResultQuestionOption.style.display = "block";
  nextRandomQuestion.style.display = "none";

  resultStatementTwo.style.display = "block";
  resultStatementOne.style.display = "none";
  resultStatementThree.style.display = "none";
  resultStatementFour.style.display = "none";

  scoreChange = optionTwoMoneyAdded - optionTwoMoneyRemoved;
  currentScore = currentScore + scoreChange;
});
queOptionThree.addEventListener("click", function () {
  nextResultQuestionOption.style.display = "block";
  nextRandomQuestion.style.display = "none";

  resultStatementOne.style.display = "none";
  resultStatementTwo.style.display = "none";
  resultStatementThree.style.display = "block";
  resultStatementFour.style.display = "none";

  scoreChange = optionThreeMoneyAdded - optionThreeMoneyRemoved;
  currentScore = currentScore + scoreChange;
});

// continue to set questions on click
resultQueContinue.addEventListener("click", function () {
  // console.log(currentQuestionArr);
  let index = Math.floor(Math.random() * currentQuestionArr.length);
  let object = currentQuestionArr[index];

  // search thru the array amd remove used obj
  let output = currentQuestionArr.filter((que) => que.id == object.id);
  // console.log(output);
  output.forEach((f) =>
    currentQuestionArr.splice(
      currentQuestionArr.findIndex((e) => e.id === object.id),
      1
    )
  );
  // console.log(currentQuestionArr);

  note = object.note;
  optionOne = object.optionOne;
  optionTwo = object.optionTwo;
  optionThree = object.optionThree;
  resultOne = object.resultOne;
  resultTwo = object.resultTwo;
  resultThree = object.resultThree;
  resultFour = object.resultFour;
  optionOneMoneyAdded = object.optionOneMoneyAdded;
  optionOneMoneyRemoved = object.optionOneMoneyRemoved;
  optionTwoMoneyAdded = object.optionTwoMoneyAdded;
  optionTwoMoneyRemoved = object.optionTwoMoneyRemoved;
  optionThreeMoneyAdded = object.optionThreeMoneyAdded;
  optionThreeMoneyRemoved = object.optionThreeMoneyRemoved;

  queNote.textContent = note;
  queOptionOne.textContent = optionOne;
  queOptionTwo.textContent = optionTwo;
  queOptionThree.textContent = optionThree;
  resultStatementOne.textContent = resultOne;
  resultStatementTwo.textContent = resultTwo;
  resultStatementThree.textContent = resultThree;
  resultStatementFour.textContent = resultFour;

  nextResultQuestionOption.style.display = "block";
  nextResultQuestionOption.style.display = "none";
  nextRandomQuestion.style.display = "block";
  day = day + 1;
  currentDay.textContent = day;

  if (currentScore <= 0 || currentScore === NaN) {
    score.textContent = 0;
    lastPage.style.display = "block";
    nextRandomQuestion.style.display = "none";
  } else {
    score.textContent = currentScore;
  }
});
