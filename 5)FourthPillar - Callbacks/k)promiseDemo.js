function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
    return new Promise(function executor(resolve, reject) {
        for (let i = 0; i < 10000000; i++) {} // blocking code
        let num = getRandomInt(10);
        if (num % 2 == 0) {
            // if the random number is even we fulfill
            resolve(num);
        } else {
            // if the random number is odd we reject
            reject(num);
        }
    });
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 10000);
    });
}

x = createPromiseWithLoop();
