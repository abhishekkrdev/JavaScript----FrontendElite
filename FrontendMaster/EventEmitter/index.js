class EventEmitter {
    events = {};

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    emit(event, ...args) {
        const callbacks = this.events[event];
        if (callbacks) {
            callbacks.forEach(function (cb) {
                cb(...args);
            });
        }
    }

    once = (event, callback) => {
        const execute = (...args) => {
            callback(...args);
            this.remove(event, execute);
        };
    };

    // off
    remove() {}
}

const ev = new EventEmitter();
console.log(ev);
function orderDelivered(orderId) {
    console.log("orderDelievvered", orderId);
}

function orderPlaced(orders) {
    console.log("orderPlaced", orders);
}

function orderPlacedByAnotherUser(orders) {
    console.log("orderPlaced by ", orders);
}

ev.on("orderDelivered", orderDelivered);
ev.on("orderPlaced", orderPlaced);
ev.on("orderPlaced", orderPlaced);

ev.emit("orderPlaced", "ABC");
ev.emit("orderDelivered", "X1223243");
