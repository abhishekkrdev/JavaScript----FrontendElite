function Event() {
    this.handlers = [];
}

Event.prototype.subscribe = function (fn) {
    this.handlers.push(fn);
};

Event.prototype.unsubscribe = function (fn) {
    this.handlers = this.handlers.filter((item) => item !== fn);
};

Event.prototype.fire = function (data, thisObj) {
    const scope = thisObj || global;
    this.handlers.forEach((item) => {
        item.call(scope, data);
    });
};

/* Test cases */
// // 1st observer
const eventHandler = function (item) {
    console.log("fired: " + item);
};

// // 2nd observer
const eventHandler2 = function (item) {
    console.log("Moved: " + item);
};

const event = new Event();

// // subscribe 1st observer
event.subscribe(eventHandler);
event.fire("event #1");

// // unsubscribe 1st observer
event.unsubscribe(eventHandler);
event.fire("event #2");
// Output: "fired: event #1"

// // subscribe 1st & 2nd observer
event.subscribe(eventHandler);
event.subscribe(eventHandler2);
event.fire("event #3");
// Output: "fired: event #3"
// Output: "moved: event #3"
