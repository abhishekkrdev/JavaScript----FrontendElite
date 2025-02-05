function MyLocalStorage() {}

MyLocalStorage.prototype.setItem = function (property, value, time) {
    localStorage.setItem(property, value);
    setTimeout(() => {
        localStorage.removeItem(property);
    }, time);
};

MyLocalStorage.prototype.getItem = function (property) {
    return localStorage.getItem(property);
};

const myLocalStorage = new MyLocalStorage();

// set 'bar' on 'foo' that will expiry after 1000 milliseconds
myLocalStorage.setItem("foo", "bar", 1000);

// after 2 seconds
setTimeout(() => console.log(myLocalStorage.getItem("foo")), 2000);
// null
