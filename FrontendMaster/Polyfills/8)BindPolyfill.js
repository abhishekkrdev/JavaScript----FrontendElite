Function.prototype.myBind = function (thisArg, ...bindArgs) {
    const originalFn = this;

    // Default to globalThis if thisArg is null or undefined
    thisArg = thisArg ?? globalThis;

    return function (...callArgs) {
        return originalFn.apply(thisArg, [...bindArgs, ...callArgs]);
    };
};

Function.prototype.myBind = function (thisArg, ...bindArgs) {
    const originalFn = this;
    thisArg = thisArg ?? globalThis;

    return function (...callArgs) {
        // Create a temporary unique property
        const fnSymbol = Symbol();
        thisArg[fnSymbol] = originalFn;

        // Call it with all arguments
        const result = thisArg[fnSymbol](...bindArgs, ...callArgs);

        // Clean up
        delete thisArg[fnSymbol];

        return result;
    };
};
