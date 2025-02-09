// https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

// 1. Currying in JS can be implemented by closures
/*f(a,b) implementation */
function f(a, b) {
    return "Works";
}

/*f(a)(b) implementation */
function f(a) {
    return (b) => {
        "Works";
    };
}
console.log(f(1)(2)); // works
console.log(f(1)); /* (b) => {return "Works" } */

// 2. Currying can also be implemented through bind function
function multiply(a, b) {
    return a * b;
}

let curriedFunc = multiply.bind(this, 10);

// Question 1 - sum(2)(6)(1)

/*Simple function*/
const add = (a, b, c) => {
    return a + b + c;
};
console.log(add(1, 2, 3)); // 6

/* Curried Function */
const addCurry = (a) => {
    // takes one argument
    return (b) => {
        //takes second argument
        return (c) => {
            //takes third argument
            return a + b + c;
        };
    };
};
console.log(addCurry(1)(2)(3)); //6

// Question 2 - Reuse Function
// evaluate ("sum")(4)(2) => 6
// evaluate ("mulitply")(4)(2) => 8

function evaluate(operation) {
    return (a) => {
        return (b) => {
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "subtract") return a - b;
            else return "No / Invalid Operation Selected";
        };
    };
}

const mul = evaluate("mul");
console.log(mul(3)(5));

// Question 3  - Infinite Currying
// sum(1)(2)(3)(4)(5)....(n)()

//recursive solution
function sum(a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    };
}

console.log(sum(4)(5)(7)());

// Question 4  - Currying Vs Partial Application

// Below is partial Application
function sum(a) {
    return (b, c) => {
        return a * b * c;
    };
}

const sum = (a) => {
    // takes one argument
    return (b) => {
        //takes second argument
        return (c) => {
            //takes third argument
            return a + b + c;
        };
    };
};

let x = sum(10);
x(1, 2);
x(20, 30);
x(40, 50);
// OR
sum(10)(1, 2);
sum(10)(20, 30);
sum(10)(40, 50);

// We concluded that the above function named sum expected 3 arguments
// and had 2 nested functions (Partial Application)
// unlike previous implementation where the
// function expected 3 arguments and had 3 nested functions.(currying)

// Question 5  - Dom Manipulation using Currying

function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    };
}

const updateHeader = updateElementText("heading");
// We can use update Header Again and Again
updateHeader("I will win");

// Question 6 - Curry() Implementation
// Converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
    // args takes arguments in the form of array eg - [a, b, c]
    return function curriedFunc(...args) {
        //check if current args passed equals the number of args function expects
        if (args.length >= func.length) {
            // if yes, we spread args elements to pass into func (spread). This is our base case.
            return func(...args);
        } else {
            /* if not, we return a function that collects the next arguments passed in next and 
        we recursively call curriedFunc, accumulating and spreading the values of args first and then
        the values of next. next will take into consideration a variable amount of next arguments
        e.g (1, 2) (1) (1,2,3) */
            return function (...next) {
                return curriedFunc(...args, ...next);
            };
        }
    };
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3); // '1_2_3'

// Question 6
// Write a function curry() that converts f(a,b,c) into a
// curried function f(a)(b)(c) with placeholder ( _ ) support.

function curry(func) {
    return function curried(...args) {
        // we need to return a function to make it curry-able.

        // 1. If the arguments are extra then eliminate them
        // we don't want to pass 6 arguments when the expected is 3.
        // it will interfere with our placeholder logic
        const sanitizedArgs = args.slice(0, func.length);

        // see if placeholder is available in arguments
        const hasPlaceholder = sanitizedArgs.some(
            (arg) => arg == curry.placeholder
        );

        // if no placeholder and arguements are equal to what expected then it is normal function call
        if (!hasPlaceholder && sanitizedArgs.length == func.length) {
            return func.apply(this, sanitizedArgs);
        }

        // else we need to replace placeholders with actual values
        // we call helper function `mergeArgs` for this
        // we pass first and next arguments to helper function
        return function next(...nextArgs) {
            return curried.apply(this, mergeArgs(sanitizedArgs, nextArgs));
        };
    };
}

function mergeArgs(args, nextArgs) {
    let result = [];

    // iterate over args (because we need to replace from it)
    // in each iteration, if we find element == curry.placeholder
    // then we replace that placeholder with first element from nextArgs
    // else we put current element
    args.forEach((arg, idx) => {
        if (arg == curry.placeholder) {
            result.push(nextArgs.shift());
        } else {
            result.push(arg);
        }
    });

    // we merge both, because there might be chance that args < nextArgs
    return [...result, ...nextArgs];
}

curry.placeholder = Symbol();
