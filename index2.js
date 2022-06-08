console.log("hello world");

const answer = "henry";
const form1 = document.querySelector("#form1");
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

const updateDisplayPanel = () => {
  for (let i = 0; i < 5; i++) {
    document
      .querySelector(`#form1_${i}`)
      .setAttribute("value", array1[i] || "");
  }

  if (array1.length) {
    document.querySelector(`#form1_${array1.length - 1}`).focus();
  }
};

form1.addEventListener("keyup", (e) => {
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
});

const submitButtonHandler = () => {
  if (array1.length === 5) {
    let inputString = array1.join("");
    if (inputString === answer) {
      console.log("WINN!");
    } else if (inputString !== answer && playersName.includes(inputString)) {
      console.log("close!!");
    } else {
      console.log("try againn");
    }
  }
};
submitButton.addEventListener("click", () => {
  submitButtonHandler();
  // console.log(array1.join(""));
  // console.log(playersName.includes(array1.join("")));
});

// create submit button handler function
// checks validity of words
// move on to the next form
// display different background for any word that is within the answer
// disable access for previous form
