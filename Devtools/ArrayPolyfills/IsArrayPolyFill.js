// The Array.isArray() static method determines whether the passed value is an Array.

function customIsArray(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
}
