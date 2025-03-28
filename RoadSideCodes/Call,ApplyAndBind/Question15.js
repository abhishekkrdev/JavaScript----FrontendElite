// Call, Bind And Apply in JavaScript ( Explicit Binding)
// Question 15 - Polyfill for call method

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error(this + " is not callable");
    }

    context.fn = this;
    context.fn(...args);
};

Function.prototype.myApply = function (context = {}, args) {
    if (typeof this !== "function") {
        throw new Error(this + " is not callable");
    }

    if (!Array.isArray(args)) {
        throw new TypeError("Issue with args");
    }

    context.fn = this;
    context.fn(...args);
};

Function.prototype.myBind = function (context = {}, ...boundArgs) {
    if (typeof this !== "function") {
        throw new Error(this + " is not callable");
    }

    if (!Array.isArray(boundArgs)) {
        throw new TypeError("Issue with args");
    }

    context.fn = this;
    return function (...args) {
        return context.fn(...boundArgs, ...args);
    };
};

function purchaseCar(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
    );
}

purchaseCar.call(car1, "$", 40000);
