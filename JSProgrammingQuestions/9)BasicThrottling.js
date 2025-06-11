// Implement Basic Throttling

// Best Sol
function throttle(func, delay) {
    let inThrottle = false;

    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, delay);
        }
    };
}

//Solution - Tough
const throttleFnTimeBased = (fn, delay) => {
    let lastExecuted = null;
    let timerId = null;

    return function (...args) {
        const context = this;
        if (!lastExecuted) {
            fn.apply(context, args);
            lastExecuted = Date.now();
        } else {
            // remove previous timer
            clearTimeout(timerId);
            // create new timer remaning time
            timerId = setTimeout(() => {
                if (Date.now() - lastExecuted >= delay) {
                    fn.apply(context, args);
                    lastExecuted = Date.now();
                }
            }, delay - (Date.now() - lastExecuted)); // No pause like deboucing
        }
    };
};

// Another Soln
function throttle2(func, limit) {
    let lastCall = 0;

    return function (...args) {
        let context = this;
        const now = Date.now();
        if (now - lastCall >= limit) {
            func.apply(context, args);
            lastCall = now;
        }
    };
}

const throttledFunction = throttleFnTimeBased((msg) => {
    console.log(msg, Date.now());
}, 2000);

throttledFunction("Call 1"); // Executes immediately
throttledFunction("Call 2"); // Throttled
throttledFunction("Call 3"); // Throttled

setTimeout(() => throttledFunction("Call 4"), 1100);
// Executes after 1.1 seconds
setTimeout(() => throttledFunction("Call 5"), 900);

// throttle
setTimeout(() => throttledFunction("Call 6"), 2100);
