/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * Do not change the function name
 **/

function customReduce(callback, initialValue) {
    // DO NOT REMOVE
    "use strict";

    if (!callback || typeof callback !== "function") {
        throw new TypeError(`${callback} should be a function`);
    }

    if (this === null || this === undefined) {
        throw new TypeError(
            `Array.prototype.reduce called on null or undefined`
        );
    }

    if (!this.length) {
        if (arguments.length < 2) {
            throw new TypeError(`Reduce of empty array with no initial value`);
        } else if (arguments.length === 2) {
            return initialValue;
        }
    }

    let startIndex = initialValue !== undefined ? 0 : 1;

    let finalisedInitialValue = initialValue || this[0];

    for (let i = startIndex; i <= this.length - 1; i++) {
        finalisedInitialValue = callback(
            finalisedInitialValue,
            this[i],
            i,
            this
        );
    }

    return finalisedInitialValue;
    // write your solution below
}

Array.prototype.customReduce = customReduce;
