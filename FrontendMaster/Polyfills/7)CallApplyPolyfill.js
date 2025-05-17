Function.prototype.myApply = function (thisArg, argsArray) {
    // Fallback to globalThis if null or undefined
    thisArg = thisArg || globalThis;

    // Create a unique property to avoid collision
    const fnSymbol = Symbol();

    // Assign the function (this) to the thisArg
    thisArg[fnSymbol] = this;

    // Call the function with the provided arguments
    const result = thisArg[fnSymbol](...argsArray);

    // Clean up
    delete thisArg[fnSymbol];

    return result;
};

Function.prototype.myCall = function (thisArg, ...args) {
    // Use globalThis if thisArg is null or undefined
    thisArg = thisArg || globalThis;

    // Create a temporary unique function property
    const fnSymbol = Symbol();

    // Assign the function to the object
    thisArg[fnSymbol] = this;

    // Invoke the function with spread arguments
    const result = thisArg[fnSymbol](...args);

    // Cleanup
    delete thisArg[fnSymbol];

    return result;
};
