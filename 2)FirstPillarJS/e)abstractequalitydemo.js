console.log(null == undefined); // true
console.log(12 == "12"); // string will be converted to number  -> true

console.log(false == "0"); // true
/**
 * x -> boolean -> ToNumber -> false -> 0
 * x = 0, y="0" , x == y
 * y -> ToNumber -> 0
 * 0 == 0
 */

console.log(null == false);

/**
 * y -> is a boolean -> ToNumber -> 0
 *  null == 0
 *  false
 */

console.log(NaN == "NaN"); // false
let obj = {
    x: 10,
    valueOf() {
        return 100;
    },
};

console.log(99 == obj); // false
console.log(100 == obj); // true
