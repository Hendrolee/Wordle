console.log("hello world");

const answer = "henry";
const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("#submit_button");
let array1 = [];
const playersName = [
  "adams",
  "b",
  "cisse",
  "d",
  "e",
  "f",
  "giggs",
  "henry",
  "i",
  "jones",
  "klose",
  "l",
  "messi",
  "neuer",
  "ochoa",
  "prilo",
  "q",
  "ramos",
  "s",
  "tevez",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let isValidName = false;
let count = 1;

// const inputFormSelector = () => {
//   let count = 1;
//   if (!isValidName && !count > 6) {
//     document.querySelector(`#form${count}_${array1.length - 1}`).focus();
//   }
// };
const updateDisplayPanel = () => {
  for (let i = 0; i < 5; i++) {
    document
      .querySelector(`#form${count}_${i}`)
      .setAttribute("value", array1[i] || "");
  }

  if (array1.length) {
    // inputFormSelector();
    document.querySelector(`#form${count}_${array1.length - 1}`).focus();
  }
};

const keyupHandler = (e) => {
  const key = e.key;

  if (key.length === 1 && key.match(/[a-z]/i)) {
    if (array1.length === 5) {
      return;
    }

    array1.push(key);
    updateDisplayPanel();
    // console.log("pushing");
  }

  if (key === "Backspace") {
    if (array1.length === 0) {
      return;
    }

    array1.pop();
    updateDisplayPanel();
    // console.log("popping");
  }

  // console.log("Array", array1);
};

// form1.addEventListener("keyup", keyupHandler);
inputs.forEach((input) => {
  input.addEventListener("keyup", keyupHandler);
});

const submitButtonHandler = (e) => {
  if (array1.length === 5) {
    let inputString = array1.join("");
    if (inputString === answer) {
      console.log("WINN!");
    } else if (inputString !== answer && playersName.includes(inputString)) {
      // reveal tiles function

      // focus on next form
      // ----- Start ----- //
      isValidName = true;
      array1 = [];
      // ----- End ----- //

      // disable previous forms
      // ----- Start -----//
      let elements = document.querySelector(`#form${count}`).elements;
      for (let i = 0; i < elements.length; i++) {
        elements[i].readOnly = true;
      }
      // ----- End ---- //
      count += 1;
      console.log(count);

      console.log("close!!");
    } else {
      console.log("Not a valid player!");
    }
  }
};
submitButton.addEventListener("click", () => {
  submitButtonHandler();
  // console.log(array1.join(""));
  // console.log(playersName.includes(array1.join("")));
});

// create submit button handler function //
// checks validity of words //
// reveal tiles function
// move on to the next form //
// previous form is inaccessible after valid input is submited //
// display different background for any word that is within the answer
// disable access for previous form
