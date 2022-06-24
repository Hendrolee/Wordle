console.log("hello world");

window.onload = () => {
  document.querySelector("#form1_0").focus();
};

const answerString = "neuer";
const answerArray = answerString.split("");
let gameCount = 1; // to move input field in querySelector
const submitButton = document.querySelector("#submit_button");
let inputArray = [];
const playersNameArray = [
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
  "eante",
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

  // if (array1.length) {
  //   document.querySelector(`#form${count}_${array1.length - 1}`).focus();
  // }
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
  for (let i = 0; i < answerArray.length; i++) {
    if (answerArray[i] === inputArray[i]) {
      document
        .querySelector(`#form${gameCount}_${i}`)
        .setAttribute("style", "background-color: green");
    } else if (answerArray.includes(inputArray[i])) {
      document
        .querySelector(`#form${gameCount}_${i}`)
        .setAttribute("style", "background-color: orange");
    } else {
      document
        .querySelector(`#form${gameCount}_${i}`)
        .setAttribute("style", "background-color: gray");
    }
  }
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
// Add Enter event for submission

// display different background for any word that is within the answer
// adapt phone screen size

// why there is no selector when all inputs are readOnly ?
// Because letter is rendered when key is pressed (setAttribute/removeAttribute)

// filter the matching letter against answer => i.e. [e,n]
// const matchedLetter = inputArray.filter((letter) =>
// answerArray.includes(letter)
// );
// console.log("matchedLetter:", matchedLetter);

// // find the position of matchedLetter
// let matchLetterPosition = [];
// matchedLetter.map((letter) => {
// const position = inputArray.indexOf(letter);
// matchLetterPosition.push(position);
// });
// console.log("matchedLetter position:", matchLetterPosition);

// // positions of answerArray
// const answerArrayPosition = answerArray.map((letter) =>
// answerArray.indexOf(letter)
// );
// console.log(answerArray);

// compare matchLetterPosition with answerArray position & change the color of the matchedLetter

// Fix :
// duplicate alphabets in single alphabet answer

// const revealTile = (gameCount, answer) => {
//   // ['h', 'e', 'n', 'r', 'y']
//   const answerArray = answer.split("");

//   // filter the matching letter against answer => i.e. [e,n]
//   const matchedLetter = inputArray.filter((letter) =>
//     answerArray.includes(letter)
//   );
//   console.log("matchedLetter:", matchedLetter);

//   let matchLetterPosition = matchedLetter.map((letter) =>
//     inputArray.indexOf(letter)
//   );
//   console.log(matchLetterPosition);

//   for (let i = 0; i < answerArray.length; i++) {
//     if (answerArray[i] === inputArray[i]) {
//       console.log("green", answerArray[i]);
//       document
//         .querySelector(`#form${gameCount}_${i}`)
//         .setAttribute("style", "background-color:green");
//     } else if (answerArray.includes(inputArray[i])) {
//       console.log("yellow", inputArray[i]);
//       document
//         .querySelector(`#form${gameCount}_${i}`)
//         .setAttribute("style", "background-color:orange");
//     } else {
//       console.log("black", inputArray[i]);
//       document
//         .querySelector(`#form${gameCount}_${i}`)
//         .setAttribute("style", "background-color: gray");
//     }
//   }

//   Array.from(document.querySelectorAll("#form1 input")).map((input) => {
//     // let index = answerArray.find((element) => element === input.value);
//     // let value = answerArray.includes(input.value);
//     // if (index) {
//     //   input.setAttribute("style", "background-color:green");
//     // } else if (value) {
//     //   input.setAttribute("style", "background-color:orange");
//     // } else {
//     //   input.setAttribute("style", `background-color: ""`);
//     // }
//     // value ? input.setAttribute("style", "background-color:orange") : "";
//   });
// };

// for (let i = 0; i < answer.length; i++) {
//   if (answerSorted[i].letter === inputSorted[i].letter) {
//     console.log("green");
//     document
//       .querySelector(`#form${gameCount}_${i}`)
//       .setAttribute("style", "background-color: green");
//   }
// else if (

// ) {
//   console.log("yellow");
//   document
//     .querySelector(`#form${gameCount}_${i}`)
//     .setAttribute("style", "background-color: orange");
// }
// }

// fix :
// when duplicate letter comes before green letter
// when there are multiple duplicates
