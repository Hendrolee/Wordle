console.log("helloworld");

const inputs = document.querySelectorAll("input");
const userInputForm1 = document.getElementById("form1").elements;
const submitButton = document.getElementById("submit_button");

let inputArray = [];
const answer = "dirty";
const validWords = ["audio", "brush", "coach", "dirty", "entry"];

function handler(e) {
  var stringId = this.id;
  const idValue = document.getElementById(stringId).value;
  var currentPosition = parseInt(stringId[stringId.length - 1]);
  // const regex = /\b[^\d\W]+\b/g;
  const key = e.key;
  console.log(stringId);

  // e.preventDefault();
  if (key !== "Backspace" && key !== "Tab") {
    // document
    //   .querySelector(`#form1_${currentPosition}`)
    //   .setAttribute("value", key);

    document.querySelector(`#form1_${currentPosition}`).select();
  }

  if (
    key !== "Backspace" &&
    idValue.trim().length !== 0 &&
    currentPosition < 5
  ) {
    document.querySelector(`#form1_${currentPosition + 1}`).select();
  }
}

function backspaceHandler(e) {
  var stringId = this.id;
  const idValue = document.getElementById(stringId).value;
  var currentPosition = parseInt(stringId[stringId.length - 1]);
  const key = e.key;

  console.log(stringId);
  if (key === "Backspace" && currentPosition > 1) {
    // document
    //   .querySelector(`#form1_${currentPosition}`)
    //   .removeAttribute("value");
    document.querySelector(`#form1_${currentPosition - 1}`).select();
  }
}

inputs.forEach((input) => {
  input.addEventListener("keydown", handler);
  input.addEventListener("keyup", backspaceHandler);
});

function submit() {
  let boolean = false;
  for (let i = 0; i < userInputForm1.length; i++) {
    inputArray.push(userInputForm1[i].value);
  }

  // if input equal answer - boolean true
  // if input is not equal answer and input is in validWords array - move to next form
  // and the previous form is inaccesible
  if (inputArray.join("") === answer) {
    boolean = true;
  } else {
    inputArray = [];
    boolean = false;
  }
  console.log(boolean);
}

submitButton.addEventListener("click", submit);

// Increment upwards
// Decrement downwards when key is backspaced
// When hit position 5, submit form

// Move to next form if valid word but wrong answer,
// provides array of words - maybe API of 5 words only ?

// Fix:
// The focus of input field:
// - when user delete, stays on the same input field
// atm when user press "backspace" it goes back to previous field
// because whenever "backspace" is pressed currentPosition is decreased by 1
// -> (decrease) if field value != empty, stays on that field
// -> if empty, moves to previous field
// OR
// when user press key, stays on the field
// when user press another key, move to the next field and fill in the key value

// should userinput be keydown and delete be keyup ?
