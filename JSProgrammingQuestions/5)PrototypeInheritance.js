// Explain how prototypal inheritance works in JavaScript
// and how a child inherits properties from a parent using prototype

// Parent Constructor Function
function Person(name) {
    this.name = name;
}

Person.prototype.hello = function () {
    return `Hello ${this.name}`;
};

// Child Constructor Function
function Developer(name, title) {
    Person.call(this, name);
    this.title = title;
}

// Overrided Person prototype in Developer's prototype
Developer.prototype = Object.create(Person.prototype);

// Reset the constructor property of Developer's prototype
Developer.prototype.constructor = Developer;

// Now you can add any methods in developer prototype
Developer.prototype.getTitle = function () {
    return this.title;
};

const obj = new Developer("Alice", "Software Engineer");
console.log(obj.hello()); // Output: Hello Alice
console.log(obj.getTitle()); // Output: Software Engineer
