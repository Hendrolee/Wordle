console.log("helloworld");

// console.log(document.querySelector("#form1_1"));
// document.querySelector("#form1_1").addEventListener("keyup", logkey);

// function logkey(e) {
//   console.log(this.id);
//   var stringId = this.id;
//   var currentPosition = parseInt(stringId[stringId.length - 1]);
//   document.querySelector(`#form1_${currentPosition + 1}`).focus();
// }

// console.log(document.querySelectorAll("input"));
const inputs = document.querySelectorAll("input");
const userInputForm1 = document.getElementById("form1").elements;
const submitButton = document.getElementById("submit_button");

let inputArray = [];
const answer = "dirty";
const validWords = ['audio', 'brush', 'coach', 'dirty', 'entry']

function keylog(e) {
  var stringId = this.id;
  // const idValue = document.getElementById(stringId).value;
  var currentPosition = parseInt(stringId[stringId.length - 1]);
  // const regex = /\b[^\d\W]+\b/g;
  const key = e.key;

  console.log(key)

  if (key !== "Backspace" && currentPosition < 5) {
    document.querySelector(`#form1_${currentPosition + 1}`).focus();
  } 
  else if (key === "Backspace" && currentPosition > 1) {
    document.querySelector(`#form1_${currentPosition - 1}`).focus();
  }
}

// function keydown(e) {
//   var stringId = this.id;
//   var currentPosition = parseInt(stringId[stringId.length - 1]);
//   const inputType = e.inputType;

//   console.log(inputType)
//   if (inputType === "deleteContentBackward" && currentPosition > 1) {
//     document.querySelector(`#form1_${currentPosition - 1}`).focus();
//   }
// }

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

inputs.forEach((input) => {
  input.addEventListener("keyup", keylog);
  // input.addEventListener("beforeinput", keydown);
});

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


