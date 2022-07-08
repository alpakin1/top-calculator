// Buttons //
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const display = document.querySelector(".display");
// Buttons //

let firstOperand = null;
let secondOperand = null;
let displayValue = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const operatorButtons = [
    {
    id: "plus",
    operator: "+",
  },
  {
    id: "minus",
    operator: "-",
  },
  {
    id: "star",
    operator: "*",
  },
  {
    id: "slash",
    operator: "/",
  },
];

// Operation //
function operate(operatorInput, num1, num2) {
  if (operatorInput == "+") {
    return num1 + num2;
  } else if (operatorInput == "-") {
    return num1 - num2;
  } else if (operatorInput == "*") {
    return num1 * num2;
  } else if (operatorInput == "/") {
    return num1 / num2;
  }
}
// Operation //

function updateDisplay() {
  display.innerText = displayValue;
}

// Event Listeners //
const operandButtons = [
  {
    id: "one",
    dv: "1",
  },
  {
    id: "two",
    dv: "2",
  },
  {
    id: "three",
    dv: "3",
  },
  {
    id: "four",
    dv: "4",
  },
  {
    id: "five",
    dv: "5",
  },
  {
    id: "six",
    dv: "6",
  },
  {
    id: "seven",
    dv: "7",
  },
  {
    id: "eight",
    dv: "8",
  },
  {
    id: "nine",
    dv: "9",
  },
  {
    id: "zero",
    dv: "0",
  },
];

operandButtons.forEach((button) => {
  const $button = document.getElementById(button.id);
  $button.addEventListener("click", () => {
    ifsAndButs(button.dv);
    updateDisplay();
  });
});

function ifsAndButs(value) {
  if (displayValue == null) {
    displayValue = "";
  }
  displayValue += value;
}

function ifsAndButts(operator) {
  if (firstOperator != null && secondOperator == null) {
    secondOperator = operator;
    secondOperand = Number(displayValue);
    result = operate(firstOperator, firstOperand, secondOperand);
    firstOperand = result;
    displayValue = firstOperand;
    displayValue = "";
  } else if (firstOperator != null && secondOperator != null) {
    secondOperand = Number(displayValue);
    result = operate(secondOperator, firstOperand, secondOperand);
    secondOperator = operator;
    displayValue = result;
    firstOperand = displayValue;
    displayValue = "";
  } else {
    firstOperator = operator;
    firstOperand = Number(displayValue);
    displayValue = "";
  }
}

operatorButtons.forEach((button) => {
  const $button = document.getElementById(button.id);
  $button.addEventListener("click", function () {
    ifsAndButts(button.operator);
    updateDisplay();
  });
});

equals.addEventListener("click", function () {
  if (secondOperator != null) {
    secondOperand = Number(displayValue);
    result = operate(secondOperator, firstOperand, secondOperand);
    displayValue = result;
    result = firstOperand;
    updateDisplay();
  } else {
    secondOperand = Number(displayValue);
    result = operate(firstOperator, firstOperand, secondOperand);
    displayValue = result;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    updateDisplay();
  }
});

clear.addEventListener("click", function () {
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
  displayValue = null;
  updateDisplay();
});
// Event Listeners //
