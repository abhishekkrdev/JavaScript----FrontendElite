// https://roadsidecoder.hashnode.dev/javascript-interview-questions-call-bind-and-apply-polyfills-output-based-explicit-binding

// 1. Give the output of the following question.

const person = { name: "Piyush" };

function sayHi(age) {
    return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24)); //  Piyush is 24 years.
console.log(sayHi.bind(person, 24)); // function sayHi
