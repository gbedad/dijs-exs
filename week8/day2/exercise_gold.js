// Exercise 1

const test = [1, 2, 3].map((num) => {
  if (typeof num === 'number') return num * 2;
  return;
});

console.log(test);

// Exercise 2

const test2 = [
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);

console.log(test2);

// Exercise 3

/* const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});

console.log(newArray); */

// Exercise 4

const array = [[1], [2], [3], [[[4]]], [[[5]]]];

const flattened = array.flatMap((num) => num);
console.log(flattened);

const greeting = [
  ['Hello', 'young', 'grasshopper!'],
  ['you', 'are'],
  ['learning', 'fast!'],
];

const flattenedString = greeting.flatMap((str) => str.join(' '));
const stringFromFlattened = flattenedString.join(' ');
console.log(flattenedString);
console.log(stringFromFlattened);

function findArrayDimension(arr) {
  let flat = arr.flatMap((val) => val);

  return flat;
}

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

let newTrapped = [...trapped];
while (newTrapped[0][0]) {
  newTrapped = findArrayDimension(newTrapped);
}

console.log(newTrapped);
