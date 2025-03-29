// Arrow function context can't be changed

Function.prototype.mycall = function (context, ...args) {
    if (typeof this !== "function") {
        throw new TypeError("Some Issue with Input");
    }

    context.fn = this;
    context.fn(...args);
};

Function.prototype.myapply = function (context, args) {
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
