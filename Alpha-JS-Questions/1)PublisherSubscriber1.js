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
    const scope = thisObj || window;
    this.handlers.forEach((item) => {
        item.call(scope, data);
    });
};
