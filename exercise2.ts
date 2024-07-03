class Calculator {
    validateInput(a: number, b: number): void {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Invalid input: Both arguments must be numbers.");
        }
    }

    add(a: number, b: number): number {
        this.validateInput(a, b);
        return a + b;
    }

    subtract(a: number, b: number): number {
        this.validateInput(a, b);
        return a - b;
    }

    multiply(a: number, b: number): number {
        this.validateInput(a, b);
        return a * b;
    }

    divide(a: number, b: number): number | string {
        this.validateInput(a, b);
        if (b === 0) {
            return "Division by zero is not allowed.";
        }
        return a / b;
    }
}

const calculator = new Calculator();

let currentOperation: string | null = null;
let firstOperand: number | null = null;

function appendNumber(number: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += number;
}

function setOperation(operation: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value === '') return;

    firstOperand = parseFloat(display.value);
    currentOperation = operation;
    display.value = '';
}

function calculateResult(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value === '' || firstOperand === null || currentOperation === null) return;

    const secondOperand = parseFloat(display.value);
    let result: number | string;

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
    } catch (error: unknown) {
        if (error instanceof Error) {
            result = error.message;
        } else {
            result = 'An unknown error occurred';
        }
    }

    display.value = String(result);
    firstOperand = null;
    currentOperation = null;
}

function clearDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
    firstOperand = null;
    currentOperation = null;
}
