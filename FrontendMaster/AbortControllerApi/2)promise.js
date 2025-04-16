// Way 1
function makeCancelable(promise) {
    let cancel;
    const wrappedPromise = new Promise((resolve, reject) => {
        cancel = () => reject(new Error("Promise Canceled"));
        promise.then(resolve).catch(reject);
    });

    return { promise: wrappedPromise, cancel };
}

// Usage
const { promise, cancel } = makeCancelable(
    new Promise((resolve) => {
        resolve("Data loaded");
    }, 3000)
);

promise.then(console.log).catch((err) => console.error(err.message));

// Cancel promise after 1 Second
setTimeout(cancel, 1000);

// Way 2
function makeCancelableWithAbortController(asyncFunction) {
    const controller = new AbortController();
    const signal = controller.signal;

    const wrappedPromise = new Promise((resolve, reject) => {
        signal.addEventListener("abort", () => {
            reject(new Error("Promise Canceled"));
        });
        asyncFunction(signal).then(resolve).catch(reject);
    });

    return { _promise: wrappedPromise, _cancel: () => controller.abort() };
}

// ✅ Example Usage
const { _promise, _cancel } = makeCancelableWithAbortController(
    (signal) =>
        new Promise((resolve) => {
            const timeout = setTimeout(() => resolve("Data loaded"), 3000);
            signal.addEventListener("abort", () => clearTimeout(timeout));
        })
);

_promise.then(console.log).catch((err) => console.error(err.message));

/*
Scenario:
2 APIs are fired, if any one succeed, cancel the second one.
*/

let responseHandled = false;

function fetchData(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (!responseHandled) {
                responseHandled = true;
                console.log("Fastest response:", data);
            }
        })
        .catch(console.error);
}

fetchData("https://fast-api.com/data");
fetchData("https://slow-api.com/data");

const controller = new AbortController();
const signal = controller.signal;

Promise.race([
    fetch("https://fast-api.com/data", { signal }),
    fetch("https://slow-api.com/data", { signal }),
])
    .then((response) => {
        controller.abort(); // Cancel slower request
        return response.json();
    })
    .then((data) => console.log("Winner:", data))
    .catch(console.error);
