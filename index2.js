console.log("hello world");

window.onload = () => {
  document.querySelector("#form1_0").focus();
};

const answerString = "henry";
const answerArray = answerString.split("");
let gameCount = 1; // to move input field in querySelector
const submitButton = document.querySelector("#submit_button");
let inputArray = [];
const playersNameArray = [
  "creek",
  "amavi",
  "bowen",
  "cisse",
  "depay",
  "evans",
  "fonte",
  "gotze",
  "henry",
  "iwobi",
  "jones",
  "kante",
  "lopez",
  "messi",
  "neuer",
  "origi",
  "pirlo",
  "quinn",
  "ramos",
  "silva",
  "tadic",
  "ulloa",
  "villa",
  "watts",
  "xhaka",
  "yerry",
  "zouma",
];

const updateDisplayPanel = () => {
  for (let i = 0; i < 5; i++) {
    document
      .querySelector(`#form${gameCount}_${i}`)
      .setAttribute("value", inputArray[i] || "");
  }
};

const keyupHandler = (e) => {
  const key = e.key;

  if (
    key.length === 1 &&
    key.match(/[a-z]/i) &&
    gameCount < 7 &&
    inputArray.length !== 5
  ) {
    inputArray.push(key);
    updateDisplayPanel();
  }

  if (key === "Backspace" && inputArray.length !== 0) {
    inputArray.pop();
    updateDisplayPanel();
  }

  if (key === "Enter" && inputArray.length === 5) {
    submitButtonHandler();
  }
};

const revealTile = (gameCount) => {
  let tempAnswerArray = [...answerArray]; // ['h', 'e', 'n', 'r', 'y']

  inputArray.forEach((letter, i) => {
    // get the index of matched letter from tempAnswerArray
    const tempAnswerIndex = tempAnswerArray.indexOf(letter);

    if (letter === tempAnswerArray[i]) {
      tempAnswerArray.splice(tempAnswerIndex, 1);
      document
        .querySelector(`#form${gameCount}_${i}`)
        .setAttribute("style", "background-color:green");
    } else if (tempAnswerArray.includes(letter)) {
      tempAnswerArray.splice(tempAnswerIndex, 1);
      document
        .querySelector(`#form${gameCount}_${i}`)
        .setAttribute("style", "background-color:orange");
    } else {
      document
        .querySelector(`#form${gameCount}_${i}`)
        .setAttribute("style", "background-color:grey");
    }
  });
  // reseting the looped array
  tempAnswerArray = [...answerArray];
};

const submitButtonHandler = () => {
  let inputString = inputArray.join("");
  if (inputString === answerString) {
    revealTile(gameCount);
    console.log("WINN!");
  } else if (
    inputString !== answerString &&
    playersNameArray.includes(inputString)
  ) {
    // reveal tiles function
    revealTile(gameCount);

    // count is used for moving to the next form
    gameCount += 1;
    console.log("close!!");

    // reseting array to empty
    inputArray = [];
  } else {
    console.log("Not a valid player!");
  }
};

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keyup", keyupHandler);
  input.readOnly = true;
});

// submitButton.addEventListener("click", submitButtonHandler);

// create submit button handler function //
// checks validity of words //
// reveal tiles function
// move on to the next form //

// previous form is inaccessible after valid input is submited //
// --- alternative ---
// all other forms are readOnly except current form //
// Add Enter event for submission //

// display different background for any word that is within the answer //
// why there is no selector when all inputs are readOnly ?
// Because letter is rendered when key is pressed (setAttribute/removeAttribute)

// fix :
// when duplicate letter comes before green letter //
// when there are multiple duplicates //
// adapt phone screen size
