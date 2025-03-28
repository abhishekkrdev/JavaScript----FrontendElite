function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        let context = this;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(context, args); // fn ko kaun call kar raha hai is context
        }, delay);
    };
}

const fn = debounce((message) => {
    console.log(message);
}, 300);

// Simulate rapid function calls
fn("Hello");
fn("Hello, World!");
fn("Debounced!"); // Only this should log after 300ms
setTimeout(() => {
    fn("Debounced twice");
}, 400);
