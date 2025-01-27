function createPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve('Operation successful!');
    } else {
      reject('Operation failed.');
    }
  });
}

// Promise.all
// This returned promise fulfills when all of the input's ////
// promises fulfill (including when an empty iterable is passed),
// with an array of the fulfillment values. It rejects when any
const promise1 = createPromise();
// of the input's promises rejects, with this first rejection reason.

try {
  const promise1 = createPromise();
  const promise2 = createPromise();
  const promise3 = createPromise();
  const result = await Promise.all([promise1, promise2, promise3]);
  console.log(result);
} catch (err) {
  console.log(err);
}
