function trailingDebounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        const self = this;
        timeoutId = setTimeout(() => {
            fn.apply(self, args); // or fn.call(self, ...args)
        }, delay);
    };
}
