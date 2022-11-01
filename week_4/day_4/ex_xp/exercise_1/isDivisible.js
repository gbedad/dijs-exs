const isDivisible = () => {
  let divisors23 = [];
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      divisors23.push(i);
      sum += i;
    }
  }
  return { divisibles: divisors23, sum: sum };
};

const isDivisible2 = (divisor) => {
  let divisors = [];
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      divisors.push(i);
      sum += i;
    }
  }
  return { divisor: divisor, divisibles: divisors, sum: sum };
};

console.log(isDivisible());

console.log(isDivisible2(3));
console.log(isDivisible2(45));
