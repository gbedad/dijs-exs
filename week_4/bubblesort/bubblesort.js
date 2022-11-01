const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

const numbers_to_string = numbers.join('');

console.log(numbers_to_string);

let higher;
for (let i = 0; i < numbers.length; i++) {
  higher = numbers[i];
  for (let j = i; j < numbers.length; j++) {
    if (numbers[j] > higher) {
      higher = numbers[j];
      numbers[j] = numbers[i];
      numbers[i] = higher;
      console.log(higher);
    }
  }
}

console.log(numbers);
