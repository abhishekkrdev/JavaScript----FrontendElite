// Call, Bind And Apply in JavaScript ( Explicit Binding)
// Question 14 - Explicit Binding With Arrow Functions
// Arrow Functions can not be explicit binded

const age = 10;

var person = {
    name: "Abhishek",
    age: 29,
    getAgeArrow: () => console.log(this),
    getAge: function () {
        console.log(this.age);
    },
};

var person2 = { age: 31 };

person.getAgeArrow.call(person2); // undefined
person.getAge.call(person2); // 31
