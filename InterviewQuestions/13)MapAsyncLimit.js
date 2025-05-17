// Chunking Version
export default function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  if (iterable.length === 0) {
    return Promise.resolve([]);
  }

  const currentChunk = iterable.slice(0, size);
  const remainingChunk = iterable.slice(size);

  return Promise.all(currentChunk.map(callbackFn)).then((results) => {
    return mapAsyncLimit(remainingChunk, callbackFn, size).then((rest) => {
      return [...results, ...rest];
    });
  });
}



// Usage Code

async function fetchUpperCase(q) {
  // Fake API service that converts a string to uppercase.
  const res = await fetch('https://uppercase.com?q=' + encodeURIComponent(q));
  return await res.text();
}

// Only a maximum of 2 pending requests at any one time.
const results = await mapAsyncLimit(
  ['foo', 'bar', 'qux', 'quz'],
  fetchUpperCase,
  2,
);
console.log(results); // ['FOO', 'BAR', 'QUX', 'QUZ'];
