const inputString = "a.b.c.d.e";

function unpack(str) {
    return str.split(".").reduceRight(function (acc, next) {
        return { [next]: acc };
    });
}

const output = unpack(inputString);
console.log(output);
