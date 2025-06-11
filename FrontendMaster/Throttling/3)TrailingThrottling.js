// Below is trailing throttle
function throttle(fn, delay) {
    let timeoutId = null;
    return function throttledFunction(...args) {
        let context = this;
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                fn.apply(context, args);
                timeoutId = null;
            }, delay);
        }
    };
}
