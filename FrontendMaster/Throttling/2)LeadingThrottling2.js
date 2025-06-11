// Below is leading throttle
function throttle(callback, delay) {
    let lastCall = 0;

    return function throttledFunction(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            callback.apply(this, args); // or callback.call(this, ...args)
        }
    };
}
