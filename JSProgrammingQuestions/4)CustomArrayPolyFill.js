// Write custom polyfill for map, reduce, filter, every ??

Array.prototype.myMap = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError("Callback must be function");
    }
    let results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(callback(this[i], i, this));
    }

    return results;
};

Array.prototype.myFilter = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError("Callback must be function");
    }

    let results = [];
    for (let i = 0; i < this.length; i++) {
        let result = callback(this[i], i, this);
        if (result) results.push(result);
    }

    return results;
};

Array.prototype.myEvery = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError("Callback must be function");
    }

    for (let i = 0; i < this.length; i++) {
        let result = callback(this[i], i, this);
        if (!result) return false;
    }

    return true;
};

Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== "function") {
        throw new TypeError("Callback must be function");
    }

    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(initialVal, this[i], i, this);
    }

    return accumulator;
};
