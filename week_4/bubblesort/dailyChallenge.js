//? Part one tree

//* version 1
for (let i = 1; i <= 6; i++) {
  console.log(' *'.repeat(i));
}

//* version 2
let star = ' ';
for (let i = 0; i < 5; i++) {
  for (let j = 1; j < i; j++) {
    star = star + ' *';
    console.log(star);
  }
}

//? Part 2

//* Exercise gold
const numbers = [5, 0, 23, 567, 7, 90, 2, 91, 700, 8];

let new_array = numbers.toString();

console.log(new_array);
new_array = numbers.join('/');

console.log(new_array);

//* Bubble sort

let lengthNumbers = numbers.length;

for (let i = 0; i < lengthNumbers; i++) {
  let higher = numbers[i];
  for (let j = i; j < lengthNumbers; j++) {
    if (numbers[j] > higher) {
      higher = numbers[j];
      numbers[j] = numbers[i];
      numbers[i] = higher;
    }
    // console.log(higher);
  }
  console.log('higher', higher);
  console.log('Array to check', numbers);
}

console.log(numbers);
