"use strict";
class Calculator {
    validateInput(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Invalid input: Both arguments must be numbers.");
        }
    }
    add(a, b) {
        this.validateInput(a, b);
        return a + b;
    }
    subtract(a, b) {
        this.validateInput(a, b);
        return a - b;
    }
    multiply(a, b) {
        this.validateInput(a, b);
        return a * b;
    }
    divide(a, b) {
        this.validateInput(a, b);
        if (b === 0) {
            return "Division by zero is not allowed.";
        }
        return a / b;
    }
}
const calculator = new Calculator();
let currentOperation = null;
let firstOperand = null;
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}
function setOperation(operation) {
    const display = document.getElementById('display');
    if (display.value === '')
        return;
    firstOperand = parseFloat(display.value);
    currentOperation = operation;
    display.value = '';
}
function calculateResult() {
    const display = document.getElementById('display');
    if (display.value === '' || firstOperand === null || currentOperation === null)
        return;
    const secondOperand = parseFloat(display.value);
    let result;
    try {
        switch (currentOperation) {
            case 'add':
                result = calculator.add(firstOperand, secondOperand);
                break;
            case 'subtract':
                result = calculator.subtract(firstOperand, secondOperand);
                break;
            case 'multiply':
                result = calculator.multiply(firstOperand, secondOperand);
                break;
            case 'divide':
                result = calculator.divide(firstOperand, secondOperand);
                break;
            default:
                result = 'Invalid operation';
        }
    }
    catch (error) {
        if (error instanceof Error) {
            result = error.message;
        }
        else {
            result = 'An unknown error occurred';
        }
    }
    display.value = String(result);
    firstOperand = null;
    currentOperation = null;
}
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    firstOperand = null;
    currentOperation = null;
}
