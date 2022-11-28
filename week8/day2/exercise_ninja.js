// Exercise 1

const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Cuty',
    age: 5,
    type: 'rabbit',
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat',
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog',
  },
];
let sum = 0;
for (let dogItem of data) {
  if (dogItem.type === 'dog') {
    sum += dogItem.age * 7;
  }
}

console.log(sum);

let filteredDogs = data.filter((item) => item.type === 'dog');

console.log(filteredDogs);

let reduced = filteredDogs.reduce(
  (total, item) => {
    console.log('Item', item.age);
    return { age: total.age + item.age * 7 };
  },
  { age: 0 }
);

console.log(reduced.age);

// Exercise 2

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';

let trimmedUserEmail = userEmail3.trim();

console.log(trimmedUserEmail);

// Exercise 3

const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' },
];

let newObj = {};

users.forEach((item) => {
  return (newObj[item.firstName] = item.role);
});

console.log(newObj);
// Exercise 4

const letters = ['x', 'y', 'z', 'z', 'z', 'x'];

let obj = {};

for (let item of letters) {
  if (item in obj) {
    obj[item] += 1;
  } else {
    obj[item] = 1;
  }
}

console.log('With for loop ===> ', obj);

const letters2 = [...letters];

let obj2 = {};

letters2.reduce((acc, item) => {
  if (item in obj2) {
    obj2[item] = acc[item] + 1;
  } else {
    obj2[item] = 1;
  }
  return obj2;
}, 0);

console.log('With reducer ===> ', obj2);
