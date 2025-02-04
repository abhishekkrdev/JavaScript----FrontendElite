const memoize = function (fn) {
    const cache = {};

    return function (...params) {
        const key = JSON.stringify(params);
        if (cache[key]) {
            console.log("Faster");
            return cache[key];
        }
        console.log("Slower");

        const val = fn(...params);
        cache[key] = val;

        return val;
    };
};

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}

const memoizedFactorial = memoize(factorial);
let a = memoizedFactorial(100); // slow
console.log(a); //9.33262154439441e+157 // slow

let b = memoizedFactorial(100); // faster
console.log(b); //9.33262154439441e+157 // faster
