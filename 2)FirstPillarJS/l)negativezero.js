let x = -0;
console.log(x === 0); // true
console.log(Object.is(x, -0)); // true
console.log(Object.is(x, 0)); // false

console.log(Math.sign(-3)); // -1
console.log(Math.sign(2)); // 1
console.log(Math.sign(-0)); // -0
console.log(Math.sign(0)); // 0

console.log(x < 0); // false

/*
    Can we write a custom function that can give us sign of a number properly ? expected -> -1, 1
*/

function customSign(num) {
    if (num === 0) {
        return 1; // Treat both +0 and -0 as positive
    }
    return num < 0 ? -1 : 1; // Return -1 for negative numbers and 1 for positive numbers
}

// Example usage
console.log(customSign(-3)); // -1
console.log(customSign(2)); // 1
console.log(customSign(-0)); // 1
console.log(customSign(0)); // 1
console.log(customSign(100)); // 1
console.log(customSign(-100)); // -1
