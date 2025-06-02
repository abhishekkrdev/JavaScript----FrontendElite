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
