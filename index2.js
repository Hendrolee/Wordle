console.log("hello world");

window.onload = () => {
  document.querySelector("#form1_0").focus();
};

const answerString = "neuer";
const inputs = document.querySelectorAll("input");
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

  if (key.length === 1 && key.match(/[a-z]/i) && gameCount < 7) {
    if (inputArray.length === 5) {
      return;
    }

    inputArray.push(key);
    updateDisplayPanel();
    // console.log("pushing");
  }

  if (key === "Backspace") {
    if (inputArray.length === 0) {
      return;
    }

    inputArray.pop();
    updateDisplayPanel();
    // console.log("popping");
  }

  if (key === "Enter") {
    submitButtonHandler(answerString, playersNameArray);
  }
  // console.log("Array", array1);
};

inputs.forEach((input) => {
  input.addEventListener("keyup", keyupHandler);
  input.readOnly = true;
});

const convertToObject = (string) => {
  const array = string.split("");
  const object = { ...array };
  return object;
};

const sortObject = (object) => {
  const obj = Object.entries(object).map((entry) => {
    const [key, value] = entry;
    return { letter: value, position: key };
  });
  return obj;
};

// Check whether a letter exist more than 1 (duplication)
const duplicationCheck = (array) => {
  const result = {};
  let boolean = false;

  const reducedArray = array.reduce((array, element) => {
    let newElementEntry = result.hasOwnProperty(element);
    !newElementEntry ? (result[element] = 1) : (result[element] += 1);
    return array;
  }, result);

  const valuesArray = Object.values(result);
  const newMaxValue = Math.max(...valuesArray);
  if (newMaxValue === 1) {
    // return newMaxValue;
    return boolean;
  } else {
    boolean = true;
  }
  return boolean;
};

const revealTile = (gameCount, answer, inputString) => {
  const answerArray = answer.split("");
  const answerObject = convertToObject(answer);
  const inputObject = convertToObject(inputString);

  const answerSorted = sortObject(answerObject);
  const inputSorted = sortObject(inputObject);
  console.log(answerSorted);
  console.log(inputSorted);

  let arrayExisted = [];
  for (let i = 0; i < answer.length; i++) {
    if (answerSorted[i].letter === inputSorted[i].letter) {
      // console.log("green", inputSorted[i]);

      // If answer letter has no duplicates
      // Insert into arrayExisted
      if (!duplicationCheck(answerArray)) {
        arrayExisted.push(inputSorted[i].letter);
        console.log("exist", arrayExisted);
      }

      document
        .querySelector(`#form${gameCount}_${i}`)
        .setAttribute("style", "background-color: green");
    } else if (
      // if input letter is found on answer letter
      answerSorted.some(
        (element) => element.letter === inputSorted[i].letter
      ) &&
      // if input letter is not found in arrayExisted
      !arrayExisted.includes(inputSorted[i].letter)
    ) {
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
// !arrayExisted.includes(inputSorted[i].letter)

const submitButtonHandler = (answer, playersName) => {
  if (inputArray.length === 5) {
    let inputString = inputArray.join("");
    if (inputString === answer) {
      revealTile(gameCount, answer, inputString);
      console.log("WINN!");
    } else if (inputString !== answer && playersName.includes(inputString)) {
      // reveal tiles function
      revealTile(gameCount, answer, inputString);

      // count is used for moving to the next form
      gameCount += 1;
      // console.log(gameCount);

      console.log("close!!");

      // reseting array to empty
      inputArray = [];
    } else {
      console.log("Not a valid player!");
    }
  }
};
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
