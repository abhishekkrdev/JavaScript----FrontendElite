const sum = (...val) => {
    return function (innerVal) {
        if(innerVal){
            
        }

    };
};

const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();

console.log(res, res2, res3, res4, res5, res6);

// Output:
// 10 10 10 10 10 0
