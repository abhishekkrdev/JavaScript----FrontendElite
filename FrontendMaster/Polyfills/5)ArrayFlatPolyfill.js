Array.prototype.myFlat = function (depth) {
    if (!Array.isArray(this)) {
        throw new TypeError("Error in Array Input");
    }

    let res = [];

    this.forEach((el) => {
        if (Array.isArray(el) && depth > 0) {
            res.push(...el.myFlat(depth - 1));
        } else {
            res.push(el);
        }
    });

    return res;
};

console.log(myFlat([1, 2, [3, 4, [5, 6]]]));
