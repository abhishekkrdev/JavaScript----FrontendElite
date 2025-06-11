function throttle(func, delay, option = { leading: true, trailing: false }) {
    let timeoutId = null;
    let lastArgs = null;
    let lastContext = null;

    return function (...args) {
        lastArgs = args;
        lastContext = this;

        if (option.leading && !timeoutId) {
            func.apply(lastContext, lastArgs);
        }

        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                if (option.trailing) {
                    func.apply(lastContext, lastArgs);
                }
                timeoutId = null;
            }, delay);
        }
    };
}

// Test the corrected version
let throttledConsole = throttle(
    function (event) {
        console.log("Throttled resize", event.timeStamp);
    },
    3000,
    { leading: true, trailing: true }
);

window.addEventListener("resize", throttledConsole);
