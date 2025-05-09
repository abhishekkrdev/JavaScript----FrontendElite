// Best Solution
// Recursive Approach without Depth
const flattenRecursive = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    const result = [];
    for (const ele of arr) {
        if (Array.isArray(ele)) {
            result.push(...flattenRecursive(ele));
        } else {
            result.push(ele);
        }
    }
    return result;
};

const flattenRecursiveReduce = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    return arr.reduce(
        (acc, ele) =>
            acc.concat(Array.isArray(ele) ? flattenRecursive(ele) : ele),
        []
    );
};

const resultRecursive = flattenRecursive([
    [[[0]], [1]],
    [[[2], [3]]],
    [[4], [5]],
]); // [0, 1, 2, 3, 4, 5]
console.log(resultRecursive, "Recursive Result");

// Iterative Approach without Depth
// Mimic Recursion Stack
const flattenIterative = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    const stack = [...arr];
    const result = [];
    while (stack.length) {
        const ele = stack.pop();
        if (Array.isArray(ele)) {
            stack.push(...ele);
        } else {
            result.push(ele);
        }
    }
    return result.reverse();
};
// Test case for Iterative Approach
const resultIterative = flattenIterative([
    [[[0]], [1]],
    [[[2], [3]]],
    [[4], [5]],
]); // [0, 1, 2, 3, 4, 5]
console.log(resultIterative, "Iterative Result");

//solution
// Recursive Approach with Depth
const flattenRecursiveWithDepth = (arr, depth) => {
    if (!Array.isArray(arr)) {
        throw new TypeError("The first argument must be an array.");
    }
    let result = [];
    if (depth === 0) return arr;
    for (let ele of arr) {
        if (Array.isArray(ele) && depth > 0) {
            result.push(...flattenRecursiveWithDepth(ele, depth - 1));
        } else {
            result.push(ele);
        }
    }
    return result;
};
const result = flattenRecursiveWithDepth(
    [[[[[0]]], [1]], [[[2], [3]]], [[4], [5]]],
    1
);
console.log(result);
