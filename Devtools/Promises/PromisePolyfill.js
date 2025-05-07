/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO NOT CHANGE CLASS NAME
const STATES = {
    PENDING: "PENDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
};

class CustomPromise {
    value = undefined;
    state = STATES.PENDING;
    resolutionHandler = [];
    rejectionHandler = [];

    constructor(executorFn) {
        try {
            executorFn(this.resolve, this.reject);
        } catch (err) {
            this.reject(err);
        }
    }

    resolve = (value) => {
        queueMicrotask(() => {
            if (this.state !== STATES.PENDING) return;
            this.value = value;
            this.state = STATES.FULFILLED;
            this.runResolutionHandlers();
        });
    };

    reject = (value) => {
        queueMicrotask(() => {
            if (this.state !== STATES.PENDING) return;
            this.value = value;
            this.state = STATES.REJECTED;
            this.runRejectionHandlers();
        });
    };

    then(resolutionHandler, rejectionHandler) {
        return new CustomPromise((resolve, reject) => {
            const wrappedResolution = (value) => {
                if (!resolutionHandler) return resolve(value);
                try {
                    const result = resolutionHandler(value);
                    result instanceof CustomPromise
                        ? result.then(resolve, reject)
                        : resolve(result);
                } catch (err) {
                    reject(err);
                }
            };

            const wrappedRejection = (value) => {
                if (!rejectionHandler) return reject(value);
                try {
                    const result = rejectionHandler(value);
                    result instanceof CustomPromise
                        ? result.then(resolve, reject)
                        : resolve(result);
                } catch (err) {
                    reject(err);
                }
            };

            if (this.state === STATES.FULFILLED) {
                queueMicrotask(() => wrappedResolution(this.value));
            } else if (this.state === STATES.REJECTED) {
                queueMicrotask(() => wrappedRejection(this.value));
            } else {
                this.resolutionHandler.push(wrappedResolution);
                this.rejectionHandler.push(wrappedRejection);
            }
        });
    }

    catch(rejectionHandler) {
        return this.then(null, rejectionHandler);
    }

    runResolutionHandlers = () => {
        this.resolutionHandler.forEach((handler) => handler(this.value));
        this.resolutionHandler = [];
    };

    runRejectionHandlers = () => {
        this.rejectionHandler.forEach((handler) => handler(this.value));
        this.rejectionHandler = [];
    };
}
