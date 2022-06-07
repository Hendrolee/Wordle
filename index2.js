console.log("hello world");

const answer = "couch";
const form1 = document.querySelector("#form1");
const submitButton = document.querySelector("#submit_button");
let array1 = [];

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
    console.log("pushing");
  }

  if (key === "Backspace") {
    if (array1.length === 0) {
      return;
    }

    array1.pop();
    updateDisplayPanel();
    console.log("popping");
  }

  console.log("Array", array1);
});

submitButton.addEventListener("click", () => {
  if (array1.length === 5) {
    let inputString = array1.join("");
    if (inputString === answer) {
      console.log("WINN!");
    } else {
      console.log("try againn");
    }
  }
});
