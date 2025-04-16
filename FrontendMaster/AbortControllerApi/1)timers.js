let timeoutId;

function startTimeout() {
    timeoutId = setTimeout(() => {
        console.log("Timeout finished");
    }, 3000);
}

function cancelTimeout() {
    clearTimeout(timeoutId);
    console.log("Timeout canceled");
}

// Start the timeout
startTimeout();

// Cancel it after 1 second
setTimeout(cancelTimeout, 1000);

// Doing Above using Abort Controller

const controller = new AbortController();
const signal = controller.signal;

function startTimeout() {
    const timerId = setTimeout(() => {
        if (!signal.aborted) {
            console.log("Timeout finished");
        } else {
            console.log("Don't execute");
        }
    }, 3000);

    // Listen for abort signal
    signal.addEventListener("abort", () => {
        // clearTimeout(timerId); // Not necessary
        console.log("Timeout cancelled");
    });
}

startTimeout();

// Cancel it after 1 second
setTimeout(() => controller.abort(), 1000);
