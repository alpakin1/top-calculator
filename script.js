// Basic Operators //
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}
// Basic Operators //

let displayValue = [];
let operatorInput;

function operate(operatorInput, inputOne, inputTwo) {
    if (operatorInput == 'add') {
        add(inputOne, inputTwo);
    } else if (operatorInput == 'subtract') {
        subtract(inputOne, inputTwo);
    } else if (operatorInput == 'multiply') {
        multiply(inputOne, inputTwo);
    } else if (operatorInput == 'divide') {
        divide(inputOne, inputTwo);
    }
}

function clearDisplay () {
    display.textContent = '';
}


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

// Event Listeners //
one.addEventListener('click', function() {
    display.textContent += 1
});
two.addEventListener('click', function() {
    display.textContent += 2
});
three.addEventListener('click', function() {
    display.textContent += 3
});
four.addEventListener('click', function() {
    display.textContent += 4
});
five.addEventListener('click', function() {
    display.textContent += 5
});
six.addEventListener('click', function() {
    display.textContent += 6
});
seven.addEventListener('click', function() {
    display.textContent += 7
});
eight.addEventListener('click', function() {
    display.textContent += 8
});
nine.addEventListener('click', function() {
    display.textContent += 9
});
zero.addEventListener('click', function() {
    display.textContent += 0
});
adder.addEventListener('click', function() {
    displayValue.push(0);
    displayValue.push(parseInt(display.textContent.trim('')));
    let result = add(displayValue[0], displayValue[1]);
    display.textContent = result;
    console.log(result);
});
subtractor.addEventListener('click', function() {
    displayValue.push(display.textContent.trim(''));
    clearDisplay();
    operatorInput = 'subtract';
    let result = operate(operatorInput, displayValue[0], displayValue[1]);
    console.log(result)
});
multiplier.addEventListener('click', function() {
    displayValue = display.textContent.trim('');
    clearDisplay();
    operatorInput = 'multiply';
});
divider.addEventListener('click', function() {
    displayValue = display.textContent.trim('');
    clearDisplay();
    operatorInput = 'divide';
});
// Event Listeners //