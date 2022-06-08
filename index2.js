console.log("hello world");

const answer = "henry";
const inputs = document.querySelectorAll("input");
let count = 1; // to move input field in querySelector
const submitButton = document.querySelector("#submit_button");
let array1 = [];
const playersName = [
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

  if (key.length === 1 && key.match(/[a-z]/i) && count < 7) {
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

inputs.forEach((input) => {
  input.addEventListener("keyup", keyupHandler);
  input.readOnly = true;
});

const submitButtonHandler = (e) => {
  if (array1.length === 5) {
    let inputString = array1.join("");
    if (inputString === answer) {
      console.log("WINN!");
    } else if (inputString !== answer && playersName.includes(inputString)) {
      // reveal tiles function
      // after tiles reveal, form is readOnly

      // reseting array to empty
      array1 = [];

      // count is used for moving to the next form
      count += 1;
      console.log(count);

      console.log("close!!");
    } else {
      console.log("Not a valid player!");
    }
  }
};
submitButton.addEventListener("click", submitButtonHandler);

// create submit button handler function //
// checks validity of words //
// reveal tiles function
// move on to the next form //

// previous form is inaccessible after valid input is submited //
// --- alternative ---
// all other forms are readOnly except current form //

// display different background for any word that is within the answer

// why there is no selector when all inputs are readOnly ?
// Because letter is rendered when key is pressed (setAttribute/removeAttribute)
