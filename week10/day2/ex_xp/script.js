function compareToTen(num) {
  let promise = new Promise(function (resolve, reject) {
    if (num <= 10) {
      resolve(`${num} lower than 10`);
    } else {
      reject(`${num} higher than 10`);
    }
  });
  return promise;
}

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

/* compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
 */

// Exercise 2

let timePromise = new Promise((resolve, reject) => {
  resolve(
    setTimeout(() => {
      console.log('Success');
    }, 4000)
  );
  reject('Oops something went wrong');
});

timePromise.then((result) => console.log(result));
timePromise.catch((error) => console.log(error));

Promise.resolve('Success 2').then((value) => {
  setTimeout(() => {
    console.log(value);
  }, 4000);
});

// Exercise 3

const p = Promise.resolve(3);
p.then((v) => {
  console.log(v); // 1
});

let promise = Promise.reject('Boo');

// Catch the promise and pass the
// function for logging the error in console
promise.catch(function (error) {
  console.log(error);
});
