// https://www.youtube.com/watch?v=RskdqbnG9x4&t=1798s

const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
};

class MyPromise {
    #value = "";
    #state = STATE.PENDING;
    #resolutionHandler = [];
    #rejectionHandler = [];
    constructor(executorFn) {
        try {
            executorFn(this.#resolve, this.#reject);
        } catch (err) {
            this.#reject(err);
        }
    }

    #runCallbacks = () => {
        queueMicrotask(() => {
            if (this.#state === STATE.REJECTED) {
                this.#rejectionHandler.forEach((cb) => {
                    cb(this.#value);
                });
                this.#rejectionHandler = [];
            }

            if (this.#state === STATE.FULFILLED) {
                this.#resolutionHandler.forEach((cb) => {
                    cb(this.#value);
                });

                this.#resolutionHandler = [];
            }
        });
    };

    // resolve -> OnSuccess
    #resolve = (value) => {
        if (this.#state !== STATE.PENDING) {
            return;
        }
        this.#value = value;
        this.#state = STATE.FULFILLED;
        this.#runCallbacks();
    };

    // reject -> OnFailure
    #reject = (err) => {
        if (this.#state !== STATE.PENDING) {
            return;
        }

        if (!this.#rejectionHandler.length) {
            throw new Error("Uncaught Promise");
        }

        this.#value = err;
        this.#state = STATE.REJECTED;
        this.#runCallbacks();
    };

    then = (thenCb, catchCb) => {
        return new MyPromise((resolve, reject) => {
            this.#resolutionHandler.push((value) => {
                if (thenCb === null) {
                    resolve(value);
                    return;
                }
                const res = thenCb(value);
                resolve(res);
            });

            this.#rejectionHandler.push((value) => {
                if (catchCb === null) {
                    reject(value);
                    return;
                }
                const res = catchCb(value);
                reject(res);
            });

            this.#runCallbacks();
        });
    };

    catch = (cb) => {
        return this.then(undefined, cb);
    };

    static resolve = (data) => {
        return new MyPromise(function (resolve) {
            resolve(data);
        });
    };

    static reject = (data) => {
        return new MyPromise(function (_, reject) {
            reject(data);
        });
    };
}

const myPromise = new MyPromise();
