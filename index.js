console.log("helloworld");

const inputs = document.querySelectorAll("input");
const userInputForm1 = document.getElementById("form1").elements;
const submitButton = document.getElementById("submit_button");

let inputArray = [];
const answer = "dirty";
const validWords = ["audio", "brush", "coach", "dirty", "entry"];
let isKeyDown = false;

function keydownHandler(e) {
  var stringId = this.id;
  const idValue = document.getElementById(stringId).value;
  var currentPosition = parseInt(stringId[stringId.length - 1]);
  // const regex = /\b[^\d\W]+\b/g;
  const key = e.key;

  if (!isKeyDown) {
    isKeyDown = true;

    if (key !== "Backspace" && key !== "Tab") {
      document.querySelector(`#form1_${currentPosition}`).focus();
    }

    if (
      key !== "Backspace" &&
      idValue.trim().length !== 0 &&
      currentPosition < 5
    ) {
      document.querySelector(`#form1_${currentPosition + 1}`).focus();
    }
  }
}

function keyupHandler(e) {
  var stringId = this.id;
  const idValue = document.getElementById(stringId).value;
  var currentPosition = parseInt(stringId[stringId.length - 1]);
  const key = e.key;

  // console.log(stringId);
  if (key === "Backspace" && currentPosition > 1) {
    document.querySelector(`#form1_${currentPosition - 1}`).focus();
  }
  isKeyDown = false;
}

inputs.forEach((input) => {
  input.addEventListener("keydown", keydownHandler);
  input.addEventListener("keyup", keyupHandler);
});

function submit(e) {
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
  console.log(inputArray);
  console.log(boolean);
}

submitButton.addEventListener("click", submit);

// Increment upwards
// Decrement downwards when key is backspaced
// When hit position 5, submit form

// Move to next form if valid word but wrong answer,
// provides array of words - maybe API of 5 words only ?

// Fixed:
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

// The focus of input field when user hold key:
// - should stay on the current field
// - use setTimeout()
// used isKeyDown boolean

// Fix:
// on second submit after first submit, the function did not record user input
