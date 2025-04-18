// ToString ->""+value
console.log("" + 0); // 0 -> "0"
console.log("" + -0); // -0 -> "0"

console.log("" + []); // [] -> ""
console.log("" + {}); // [object Object]

console.log("" + [1, 2, 3]); // 1,2,3

console.log("" + [null, undefined]); // ,
console.log("" + [1, 2, null, 4]); // 1,2,,4

// To Number
console.log(0 - " 010"); // -10
console.log(0 - " o10"); // NaN
console.log(0 - " O10"); // NaN
console.log(0 - 010); // octal number -> -8
console.log(0 - "0xb"); // hexadecimal number ->  -11

console.log(1 - []); // 1 -> [] -> 0
console.log([""] - 1); // 0 -> [""] -> 0
console.log(["0"] - 1); // 0 -> ["0"] -> 0
