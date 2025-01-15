// Implement a debouncing function in JavaScript that delays the execution
// of a given function until after a specified wait time has passed since the
// last call.

//Solution
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        // Set a new timeout to call the function after the delay
        timeout = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}
