const screen = document.querySelector(".display-screen");

// State variables
let firstNumber = "";
let secondNumber = "";
let operator = null;

// Main click handler
function handleClick(e) {
    const value = e.target.value;

    if (!value) return;

    if (value === "clear") {
        clearAll();
    } else if (["+", "-", "x", "/", "^"].includes(value)) {
        handleOperator(value);
    } else if (value === "equal") {
        handleEqual();
    } else if (isDigit(value)) {
        handleDigit(value);
    }

    updateDisplay();
}

// Helpers
function isDigit(val) {
    return /^[0-9]$/.test(val);
}

function clearAll() {
    firstNumber = "";
    secondNumber = "";
    operator = null;
}

function handleDigit(digit) {
    if (!operator) {
        firstNumber += digit;
    } else {
        secondNumber += digit;
    }
}

function handleOperator(op) {
    if (firstNumber && secondNumber) {
        // real-time calculation for chainable operations
        firstNumber = String(calculate(Number(firstNumber), Number(secondNumber), operator));
        secondNumber = "";
    }
    operator = op;
}

function handleEqual() {
    if (firstNumber && operator && secondNumber) {
        firstNumber = String(calculate(Number(firstNumber), Number(secondNumber), operator));
        secondNumber = "";
        operator = null; // reset operator after equals
    }
}

function calculate(num1, num2, op) {
    switch (op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "x": return num1 * num2;
        case "/": return num1 / num2;
        case "^": return num1 ** num2;
        default: return num1;
    }
}

function updateDisplay() {
    let displayValue = firstNumber;
    if (operator) displayValue += ` ${operator} `;
    if (secondNumber) displayValue += secondNumber;

    screen.textContent = displayValue;
}

// Attach listener once
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", handleClick));
