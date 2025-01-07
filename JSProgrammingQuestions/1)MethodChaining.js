// How would you implement a calculator class with methods for addition,
// subtraction, and multjplication, supporting method chaining ?

// calculator.add(3).multiply(4).subtract(5).getValue()

class Calculator {
    constructor(initialVal = 0) {
        this.initialValue = initialVal;
    }

    addition(value) {
        this.initialValue += value;
        return this; // Enabling Method Chaining
    }

    subtract(value) {
        this.initialValue -= value;
        return this; // Enabling Method Chaining
    }

    multiply(value) {
        this.initialValue *= value;
        return this; // Enabling Method Chaining
    }

    getValue() {
        return this.initialValue;
    }
}

// this will return same instance of the Calculator, will allow method
// chaining

const calculator = new Calculator();
console.log(calculator.add(3).multiply(4).subtract(5).getValue());
