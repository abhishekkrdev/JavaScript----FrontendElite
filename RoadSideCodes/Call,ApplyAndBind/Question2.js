// 2. Give the output of the following code snippet.
const age = 10;

var person = {
    name: "Piyush",
    age: 20,
    getAge: function () {
        return this.age;
    },
};

var person2 = { age: 24 };

person.getAge.call(person2); // 24
