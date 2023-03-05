const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const app = express();
const port = 4001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressLayouts);
app.use(express.static("public"));
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("/", (_, res) => {
  let questions = [
    {
      note: "One of your co-workers has gotten seriously ill. Because your company doesn’t offer sick days, everyone is contributing $20 to help her out.",
      optionOne: "PITCH IN",
      optionTwo: "SAY YOU FORGOT YOUR WALLET",
      optionThree: "",
      result: "RESULT STATEMENT OF QUESTION 1",
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
      result: "RESULT STATEMENT OF QUESTION 3",
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
      note: "Your best friend from childhood is getting married, and they want you to be in the wedding. The only problem: It's in another state.",
      optionOne: "FLY TO THE WEDDING ($350)",
      optionTwo: "SAY YOU CAN'T GO",
      optionThree: "",
      result: "RESULT STATEMENT OF QUESTION 4",
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
      note: "Your best friend from childhood is getting married, and they want you to be in the wedding. The only problem: It's in another state.",
      optionOne: "FLY TO THE WEDDING ($350)",
      optionTwo: "SAY YOU CAN'T GO",
      optionThree: "",
      result: "RESULT STATEMENT OF QUESTION 5",
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
      note: "Your best friend from childhood is getting married, and they want you to be in the wedding. The only problem: It's in another state.",
      optionOne: "FLY TO THE WEDDING ($350)",
      optionTwo: "SAY YOU CAN'T GO",
      optionThree: "",
      result: "RESULT STATEMENT OF QUESTION 6",
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
      note: "Your best friend from childhood is getting married, and they want you to be in the wedding. The only problem: It's in another state.",
      optionOne: "FLY TO THE WEDDING ($350)",
      optionTwo: "SAY YOU CAN'T GO",
      optionThree: "",
      result: "RESULT STATEMENT OF QUESTION 7",
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
      note: "Your best friend from childhood is getting married, and they want you to be in the wedding. The only problem: It's in another state.",
      optionOne: "FLY TO THE WEDDING ($350)",
      optionTwo: "SAY YOU CAN'T GO",
      optionThree: "",
      result: "RESULT STATEMENT OF QUESTION 8",
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
      note: "Your best friend from childhood is getting married, and they want you to be in the wedding. The only problem: It's in another state.",
      optionOne: "FLY TO THE WEDDING ($350)",
      optionTwo: "SAY YOU CAN'T GO",
      optionThree: "",
      result: "RESULT STATEMENT OF QUESTION 9",
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
      note: "You weren't paying attention, and you broke something as you were putting it into a box.",
      optionOne: "PAY $25 TO COVER THE BROKEN ITEM",
      optionTwo: "HIDE THE EVIDENCE",
      optionThree: "CHILL",
      result: "RESULT STATEMENT OF QUESTION 10",
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
  let question = "WHAT DO YOU WANT TO DO?";
// randomly select an index
// then put the index in an array ...askedQuestionIndex
// use the index to ask next questn but check if index exists in askedQuestionIndex
  let questionObj = questions[Math.floor(Math.random(10) * 10)]
  res.render("switch-div", { questionObj, question });
});

app.listen(port, () => {
  console.log("server listening to port 4001");
});
