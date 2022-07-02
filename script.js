// Buttons //
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
let clear = document.querySelector('#clear');
let equals = document.querySelector('#equals');
let adder = document.querySelector('#plus');
let subtractor = document.querySelector('#minus');
let multiplier = document.querySelector('#star');
let divider = document.querySelector('#slash');
let display = document.querySelector('.display');
// Buttons //

let firstOperand = null;
let secondOperand = null;
let displayValue = null;
let firstOperator = null;
let secondOperator = null;
let result;

// Operation //
function operate(operatorInput, num1, num2) {
    if (operatorInput == '+') {
        return num1 + num2;
    } else if (operatorInput == '-') {
        return num1 - num2;
    } else if (operatorInput == '*') {
        return num1 * num2;
    } else if (operatorInput == '/') {
        return num1 / num2;
    }
}
// Operation //


function updateDisplay () {
    display.innerText = displayValue;
}




// Event Listeners //
one.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '1';
    updateDisplay();
});
two.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '2';
    updateDisplay();
});
three.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '3';
    updateDisplay();
});
four.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '4';
    updateDisplay();
});
five.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '5';
    updateDisplay();
});
six.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '6';
    updateDisplay();
});
seven.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '7';
    updateDisplay();
});
eight.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '8';
    updateDisplay();
});
nine.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '9';
    updateDisplay();
});
zero.addEventListener('click', function() {
    if (displayValue == null) {
        displayValue = '';
    }
    displayValue += '0';
    updateDisplay();
});
adder.addEventListener('click', function() {
    if (firstOperator != null && secondOperator == null) {
        secondOperator = '+';
        secondOperand = Number(displayValue);
        result = operate(firstOperator, firstOperand, secondOperand);
        firstOperand = result;
        displayValue = firstOperand;
        displayValue = '';
        updateDisplay();
    } else if (firstOperator != null && secondOperator != null) {
        secondOperand = Number(displayValue);
        result = operate(secondOperator, firstOperand, secondOperand);
        secondOperator = '+';
        displayValue = result;
        firstOperand = displayValue;
        displayValue = '';
        updateDisplay();
    } else {
        firstOperator = '+';
        firstOperand = Number(displayValue);
        displayValue = '';
        updateDisplay()
    }
    
});
subtractor.addEventListener('click', function() {
    if (firstOperator != null && secondOperator == null) {
        // Second Operation //
        secondOperator = '-';
        secondOperand = Number(displayValue);
        result = operate(firstOperator, firstOperand, secondOperand);
        firstOperand = result;
        displayValue = firstOperand;
        displayValue = '';
        updateDisplay();
    } else if (firstOperator != null && secondOperator != null) {
        // Third+ Operation //
        secondOperand = Number(displayValue);
        result = operate(secondOperator, firstOperand, secondOperand);
        secondOperator = '-';
        displayValue = result;
        firstOperand = displayValue;
        displayValue = '';
        updateDisplay();
    } else {
        // First Operation //
        firstOperator = '-';
        firstOperand = Number(displayValue);
        displayValue = '';
        updateDisplay()
    }    
});
multiplier.addEventListener('click', function() {
    if (firstOperator != null && secondOperator == null) {
        secondOperator = '*';
        secondOperand = Number(displayValue);
        result = operate(firstOperator, firstOperand, secondOperand);
        firstOperand = result;
        displayValue = firstOperand;
        displayValue = '';
        updateDisplay();
    } else if (firstOperator != null && secondOperator != null) {
        secondOperand = Number(displayValue);
        result = operate(secondOperator, firstOperand, secondOperand);
        secondOperator = '*';
        displayValue = result;
        firstOperand = displayValue;
        displayValue = '';
        updateDisplay();
    } else {
        firstOperator = '*';
        firstOperand = Number(displayValue);
        displayValue = '';
        updateDisplay()
    }    
});
divider.addEventListener('click', function() {
    if (firstOperator != null && secondOperator == null) {
        secondOperator = '/';
        secondOperand = Number(displayValue);
        result = operate(firstOperator, firstOperand, secondOperand);
        firstOperand = result;
        displayValue = firstOperand;
        updateDisplay();
    } else if (firstOperator != null && secondOperator != null) {
        secondOperand = Number(displayValue);
        result = operate(secondOperator, firstOperand, secondOperand);
        secondOperator = '/';
        displayValue = result;
        firstOperand = displayValue;
        updateDisplay();
    } else {
        firstOperator = '/';
        firstOperand = Number(displayValue);
        displayValue = '';
        updateDisplay()
    }   
});

equals.addEventListener('click', function() {
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
})
// Event Listeners //