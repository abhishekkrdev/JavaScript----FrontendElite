// Polyfill of Promise All
// Promise.all trigger all the promises at once

Promise.all = function (promises = []) {
    return new Promise(function (resolve, reject) {
        const result = [];
        let completed = 0;

        if (!promises.length) {
            resolve([]);
        }
        promises.forEach(function (promise, index) {
            promise
                .then((data) => {
                    result[index] = data;
                    completed++;
                    if (completed === promises.length) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });
};

function fakeFetcher(url, time, failIt = false) {
    return () => {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (failIt) {
                    reject("API failed for " + url);
                } else {
                    resolve("Data received for " + url);
                }
            }, time);
        });
    };
}

const p1 = fakeFetcher("P1", 1000, true);
const p2 = fakeFetcher("P2", 2000);
const p3 = fakeFetcher("P3", 3000);

// yes
p1().then();
p2().then();
p3().then();

// no
p1().then(() => {
    p2().then(() => {
        p3().then();
    });
});

const allData = Promise.all([p1(), p2(), p3()]);

allData
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
