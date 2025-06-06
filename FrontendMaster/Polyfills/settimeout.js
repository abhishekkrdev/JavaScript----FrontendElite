// Polyfill of setTimeout

// setTimeout(callback, delayInMS, name);

// function showMyName(name) {
//     console.log(name);
// }

// setTimeout(() => {
//     showMyName("silver surfer");
// }, 10);

// setTimeout(showMyName, 1000, "silver surfer");

window.timerId = 1232323;

window.timers = {};

window.setTimeout = function (callback, delay, ...args) {
    const timerid = window.timerId;
    window.timerId++;

    const time = Date.now() + delay;

    window.timers[timerid] = {
        callback,
        time,
        args: [...args],
    };

    if (Object.keys(window.timers.length === 1)) {
        requestIdleCallback(processTimers); // Schedule Low Priority Function
    }

    return timerid;
};

function processTimers() {
    function executeTimers(key) {
        const { callback, time, args } = window.timers[key];
        if (Date.now() >= time) {
            callback(...args);
            delete window.timers[key];
        } else {
            requestIdleCallback(processTimers);
        }
    }
    Object.keys(window.timers).forEach(executeTimers);
}

window.clearTimeout = function (key) {
    if (window.timers[key]) {
        delete window.timers[key];
    }
};

setTimeout(
    function (name) {
        console.log("name", name);
    },
    1000,
    "silver surfer1"
);
setTimeout(
    function (name) {
        console.log("name", name);
    },
    1000,
    "silver surfer2"
);

setTimeout(
    function (name) {
        console.log("name", name);
    },
    1000,
    "silver surfer3"
);
