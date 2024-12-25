let obj = {
    toString() {
        // By default gives [object Object]
        return 10;
    },

    valueOf() {
        // by default returns same obj
        return 10;
    },
};
// console.log(obj.toString()); // [object Object]

let obj2 = {};

console.log(10 - obj2); // NaN
console.log(obj2 - obj2); // NaN

let obj1 = {
    x: 9,
    y: 8,
    valueOf() {
        return 99;
    },
};
console.log(100 - obj1); // 1

let obj3 = {
    x: 9,
    y: 8,
    valueOf() {
        return "88";
    },
};

console.log(100 - obj3); // 112

let obj4 = {
    x: 9,
    y: 8,
    toString() {
        return {};
    },
};

console.log(100 - obj4); // Type Error
