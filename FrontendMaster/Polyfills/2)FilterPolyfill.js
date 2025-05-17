Array.prototype.myFilter = function (callbackFn, thisArg) {
    if (typeof callbackFn !== "function") {
        throw new TypeError("Callback fn is not a function");
    }

    const newResult = [];

    let flag = 0;

    while (flag < this.length) {
        if (this.hasOwnProperty(flag)) {
            const value = this[flag];
            const needToAdd = callbackFn.call(thisArg, value, flag, this);

            if (needToAdd) {
                newResult.push(value);
            }
        }

        flag++;
    }

    return newResult;
};
