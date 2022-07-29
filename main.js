// 1,2,3 dot letters data

const Letters = {
  singleDots: ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"],
  doubleDots: ["ت", "ق"],
  tripleDots: ["پ", "ث", "چ", "ژ", "ش"],
  specialLetterDot: ["ی"],
};

// user input text variable
let userInput = document.getElementById("textInput");
// array for save letter after split
let splitText = [];

// output text vaiable
let outputText = document.getElementById("outputText");

// Each time the dots are calculated and their dot number is added to this variable
let counter = 0;

// split user input
function CalculateInput() {
  splitText = userInput.value.split("");
}

function ShowOutput() {
  // check letter dots and append their number to counter 
  splitText.forEach(function (letter) {
    if (Letters.singleDots.includes(letter)) {
      counter += 1;
    } else if (Letters.doubleDots.includes(letter)) {
      counter += 2;
    } else if (Letters.tripleDots.includes(letter)) {
      counter += 3;
    }
  });
  // check "ی" letters and If the next letter is not " ", append 2 number in counter 
  for (let i = 0; i < splitText.length; i++) {
    if (splitText[i] === "ی") {
      if (splitText[i + 1] !== " ") {
        counter += 2;
      }
    }
  }
  // with click on buttom show output
  outputText.innerHTML = ` تعداد نقطه های کلمه : ${counter} `;
}
