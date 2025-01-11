"use strict";

// this in global space
console.log(this); // globalObject - window, global

function x() {
    // the value depends on strict / non-strict mode
    console.log(this);
}

// this inside non-strict mode - (this substitution)
// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non strict mode

// this keyword value depends on how the function is called (without an explicit context)
x(); // undefined
window.x(); // window

// this inside a object's method

// `x` key below is a method as per terminology
const obj = {
    a: 10,
    x: function () {
        console.log(this); // {a: 10, x: f()}
        console.log(this.a); // 10
    },
};
obj.x(); // value of `this` is referring to current object i.e. `obj

const student = {
    name: "Alok",
    printName: function () {
        console.log(this.name);
    },
};
student.printName(); // Alok
const student2 = {
    name: "Kajal",
};
student2.printName(); // throw error

// ❓ how to re-use printName method from `student` object
student.printName.call(student2); // Kajal
// Above `call` method is taking the value of `this` keyword
// So, Inside `printName` method value of `this` is now `student2` object
// So, call, bind and apply is used to set the value of this keyword.

const obj1 = {
    a: 10,
    x: () => {
        console.log(this); // window object
        // Above the value of `this` won't be obj anymore instead it will be enclosing
        // lexical context i.e. window object in current scenario.
    },
};
obj1.x();
const obj2 = {
    a: 10,
    x: function () {
        const y = () => {
            console.log(this);
            // Above the value of `this` will be obj2 as function y's enclosing lexical
            // context is function `x`.
        };
        y();
    },
};
obj2.x();
