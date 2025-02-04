function CalculateAmount() {
    this.store = 0;
}

CalculateAmount.prototype.lacs = function (val) {
    this.store = this.store + Math.pow(10, 5) * val;
    return this;
};

CalculateAmount.prototype.crore = function (val) {
    this.store = this.store + Math.pow(10, 7) * val;
    return this;
};

CalculateAmount.prototype.thousand = function (val) {
    this.store = this.store + Math.pow(10, 3) * val;
    return this;
};

CalculateAmount.prototype.ten = function (val) {
    this.store = this.store + Math.pow(10, 1) * val;
    return this;
};

CalculateAmount.prototype.unit = function (val) {
    this.store = this.store + Math.pow(10, 0) * val;
    return this;
};

CalculateAmount.prototype.value = function (val) {
    return this.store;
};

const ComputeAmount = function () {
    let obj;

    function createObj() {
        obj = new CalculateAmount();
    }
    if (!obj) {
        createObj();
    }
    return obj;
};

const amount = ComputeAmount()
    .lacs(9)
    .lacs(1)
    .thousand(10)
    .ten(1)
    .unit(1)
    .value();
console.log(amount === 1010011); // true

const amount2 = ComputeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value();
console.log(amount2 === 143545000);
