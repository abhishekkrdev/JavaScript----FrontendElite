export default function mapAsync(arr, callbackFn) {
  return new Promise((resolve, reject) => {
    let results = new Array(arr.length);

    let unresolved = arr.length;

    if (unresolved === 0) {
      resolve(results);
    }

    arr.forEach((item, index) => {
      callbackFn(item)
        .then((value) => {
          results[index] = value;
          unresolved--;

          if (unresolved === 0) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

// Working
const asyncDouble = (x) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

const doubled = await mapAsync([1, 2], asyncDouble);
console.log(doubled); // [2, 4]
