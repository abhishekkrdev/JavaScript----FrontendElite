// Simple Execution

const throttle = (func, limit) => {
    let isThrottling;

    return function () {
        const args = arguments;
        const ctx = this;

        if (!isThrottling) {
            func.apply(ctx, args);
            isThrottling = true;
            setTimeout(() => {
                isThrottling = false;
            }, limit);
        }
    };
};

function shoot(msg) {
    console.log("Shooting Called", msg);
}

const throttledShoot = throttle(shoot, 500);

throttledShoot("1");
throttledShoot("2");
throttledShoot("3");

setTimeout(() => {
    throttledShoot("Exec");
}, 1000);
