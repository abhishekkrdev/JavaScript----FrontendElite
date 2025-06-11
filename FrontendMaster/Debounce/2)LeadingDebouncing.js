function leadingDebounce(fn, delay) {
    let timeoutId = null;

    return function (...args) {
        const self = this;
        if (timeoutId === null) {
            fn.apply(self, args); // safely use this
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            timeoutId = null;
        }, delay);
    };
}

const log = leadingDebounce(() => console.log("Clicked!"), 1000);

document.addEventListener("click", log);
