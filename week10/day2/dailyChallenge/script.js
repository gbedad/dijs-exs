function makeAllCaps(arr) {
  let capArr = [];
  let promise1 = new Promise((resolve, reject) => {
    arr.forEach((element) => {
      if (typeof element === 'string') {
        capArr.push(element.toLocaleUpperCase());
        resolve(capArr);
      } else {
        reject('Not type string');
      }
    });
  });

  return promise1;
}

function sortWords(array) {
  let promise2 = new Promise((resolve, reject) => {
    if (array.length > 4) {
      resolve(array.sort());
    } else {
      reject('Length of the array < 4');
    }
  });

  return promise2;
}

/* makeAllCaps([1, 'pear', 'banana'])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */

/* makeAllCaps(['apple', 'pear', 'banana'])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */

makeAllCaps(['apple', 'pear', 'banana', 'melon', 'kiwi'])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));
