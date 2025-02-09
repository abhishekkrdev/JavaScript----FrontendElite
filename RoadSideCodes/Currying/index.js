// https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

// Currying in JS

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
