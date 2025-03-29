class EventEmitter {
    constructor() {
        this._eventSubscriptionsMap = new Map();
    }

    subscribe(eventName, cb) {
        if (typeof cb !== "function") {
            throw new TypeError("callback should be a function");
        }

        if (!this._eventSubscriptionsMap.has(eventName)) {
            this._eventSubscriptionsMap.set(eventName, new Map());
        }

        let subscriptionId = Symbol();
        const subscriptions = this._eventSubscriptionsMap.get(eventName);
        subscriptions.set(subscriptionId, cb);

        return {
            remove: function () {
                if (!subscriptions.has(subscriptionId)) {
                    throw new Error("Subscription has already removed");
                }
                subscriptions.delete(subscriptionId);
            },
        };
    }

    emit(eventName, ...args) {
        const subscriptions = this._eventSubscriptions.get(eventName);
        if (!subscriptions) {
            throw new Error("No event found");
        }

        // ForEach runs on Map Data Structure.
        subscriptions.forEach((callback) => callback(...args));
    }
}

const emitter = new EventEmitter();

const subscription = emitter.subscribe("modify", (link) => {
    console.log(`Modified: ${link}`);
});

emitter.emit("modify", "test@gmail.com");

subscription.remove();
// No event will get published as it is removed
emitter.emit("modify", "test@gmail.com");
// No event found
emitter.emit("noEventfount", "test@gmail.com");
