// global

// this will always point to an object or undef
console.log(this); // window

// Called from a function
function gfFunction() {
    console.log(this);
}

gfFunction(); // this

// window.gfFunction() // this is same as above statement

// Called wrt to BF

let bfObject = {
    name: "Atul Jha",
    age: 21,
    gfFunction: function () {
        console.log(this);
    },
};

bfObject.gfFunction(); //bfObject

// Called wrt window by passing reference

const gfRefFunction = bfObject.gfFunction;
gfRefFunction(); //this

// Call , apply , bind
var bf1Object = {
    name: "Rahul",
    age: 30,
    car: "Ola Auto",
    gfFunction: function (a, b) {
        console.log(a, b, this);
    },
};

const bf2Object = {
    name: "Amit",
    age: 24,
    car: "Mercedes",
    gfFunction: function (a, b) {
        console.log(a, b, this);
    },
};

bf1Object.gfFunction(1, 2); // Rahul

bf1Object.gfFunction.call(bf2Object, 1, 2); // Amit  // Change the object ref for a function

bf1Object.gfFunction.apply(bf2Object, [1, 2]); // Same as call but only syntactic sugar

const wifeFunction = bf1Object.gfFunction.bind(bf1Object);
wifeFunction(); // When you call this function anywhere , it will be called with bf10Object

// Advance

// When this is present in async method/Callback

const obj = {
    value: 42,
    regularMethod: function () {
        // this -> obj
        setTimeout(function () {
            console.log("Regular method's this", this.value); // This function is called by browser or global object, so undefined
        }, 1000);
    },
};

obj.regularMethod();

// Using Arrow Function

const obj1 = {
    value: 42,
    regularMethod: function () {
        // this -> obj
        setTimeout(function () {
            console.log("Regular method's this", this.value); // This function is called by browser or global object, so undefined
        }, 1000);
    },
    arrowMethod: function () {
        // this -> obj
        setTimeout(() => {
            console.log("Regular method's this", this.value); // This function is called by browser or global object, so undefined
        }, 1000);
    },
};

let obj2 = {
    a: 1,
    print: function () {
        function innerPrint() {
            console.log("a > ", this.a);
        }
        innerPrint();
    },
};

obj2.print(); // undefined ->ultimately run by global

let obj3 = {
    a: 1,
    print: function () {
        const innerPrint = () => {
            console.log("a > ", this.a);
        };
        innerPrint();
    },
};

obj3.print(); // a
