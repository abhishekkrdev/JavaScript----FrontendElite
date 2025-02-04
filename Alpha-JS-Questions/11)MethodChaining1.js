function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function (val) {
    this.total = this.total + val;
    return this;
};

Calculator.prototype.subtract = function (val) {
    this.total = this.total - val;
    return this;
};

Calculator.prototype.multiply = function (val) {
    this.total = this.total * val;
    return this;
};

Calculator.prototype.divide = function (val) {
    this.total = this.total / val;
    return this;
};

Calculator.prototype.value = function (val) {
    return this.total;
};

const calculator = new Calculator();
calculator.add(10).subtract(2).divide(2).multiply(5);

console.log(calculator.total); // 20
