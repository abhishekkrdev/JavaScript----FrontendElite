---

**JavaScript `this` Keyword: Complex MCQs and Explanations**

---

**Question 1**

```javascript
function outer() {
    this.value = 10;
    function inner() {
        console.log(this.value);
    }
    inner();
}

var obj = new outer();
```

_What will be the output of the following code?_

a) `10`  
b) `undefined`  
c) `ReferenceError`  
d) `TypeError`

_Answer:_ b) `undefined`

_Explanation:_ In this code, `outer` is invoked with `new`, which means `this` inside `outer` refers to the newly created instance. However, `inner` is a regular function, and `this` inside `inner` refers to the global object (or `undefined` in strict mode). Thus, `this.value` is `undefined`.

---

**Question 2**

```javascript
const obj = {
    value: 42,
    method1: function () {
        return function () {
            return this.value;
        };
    },
};

console.log(obj.method1()());
```

_What will be the output?_

a) `42`  
b) `undefined`  
c) `ReferenceError`  
d) `TypeError`

_Answer:_ b) `undefined`

_Explanation:_ `obj.method1()` returns a regular function. When this function is called, `this` refers to the global object (or `undefined` in strict mode), not to `obj`. Thus, `this.value` is `undefined`.

---

**Question 3**

```javascript
const globalValue = "global";

function example() {
    const localValue = "local";
    const innerFunc = () => {
        console.log(this.localValue);
    };
    innerFunc();
}

example();
```

_What will be logged to the console?_

a) `local`  
b) `global`  
c) `undefined`  
d) `ReferenceError`

_Answer:_ c) `undefined`

_Explanation:_ Arrow functions inherit `this` from their surrounding scope. Here, `this` inside `innerFunc` refers to the global object (or `undefined` in strict mode), so `this.localValue` is `undefined`.

---

**Question 4**

```javascript
const obj1 = {
    name: "Object 1",
    method: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    },
};

obj1.method();
```

_What will be the result of the following code?_

a) `Object 1`  
b) `undefined`  
c) `ReferenceError`  
d) `TypeError`

_Answer:_ b) `undefined`

_Explanation:_ Inside `setTimeout`, the function is a regular function, so `this` refers to the global object (or `undefined` in strict mode). Thus, `this.name` is `undefined`.

---

**Question 5**

```javascript
const obj = {
    name: "Alice",
    greet: function () {
        return () => {
            console.log(this.name);
        };
    },
};

const greetFunction = obj.greet();
greetFunction();
```

_What will be the output of this code?_

a) `Alice`  
b) `undefined`  
c) `ReferenceError`  
d) `TypeError`

_Answer:_ a) `Alice`

_Explanation:_ The `greet` method returns an arrow function. Arrow functions inherit `this` from the surrounding scope, so `this` inside the arrow function refers to `obj`. Thus, `this.name` is 'Alice'.

---

You can copy this text and use it to create a PDF or any other document as needed. If you need further assistance, just let me know!
