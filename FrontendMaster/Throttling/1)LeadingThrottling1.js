// Below is leading throttle

function leadingThrottle(callback, delay) {
    let waiting = false;

    return function throttledFunction(...args) {
        if (!waiting) {
            callback.apply(this, args);
            waiting = true;
            setTimeout(() => {
                waiting = false;
            }, delay);
        }
    };
}

window.addEventListener(
    "resize",
    leadingThrottle(function (event) {
        console.log("Throttled resize", event);
    }, 1000)
);
