// If the variables are not intended to use outside block, use let
function fun() {
    for (let i = 0; i < 10; i++) {
        // do something
    }
    console.log(i);
}

function process(x, y) {
    if (x > y) {
        // var temp = x;
        let temp = x;
        x = y;
        y = temp;
    }
    return y - x;
}

fun();
