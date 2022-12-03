/* Exercise 1 : Print Full Name
Instructions
Create a function called printFullName(studentObj) that accepts an object as a parameter.
For example : printFullName({first: 'Elie', last:'Schoppik'}).
The function should return a string like the example below
printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`
Destructure this object DIRECTLY from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

The output of the printFullName() function should be the exact same as the displayStudentInfo function. (Exercise XP)*/

const printFullName = ({ first, last }) => {
  return `Your full name is ${first} ${last}`;
};

const fullname = printFullName({ first: 'Elie', last: 'Schoppik' });

console.log(fullname);

const printFullNameV2 = (obj) => {
  const { first, last } = obj;

  return `Your full name is ${first} ${last}`;
};
const fullnameV2 = printFullNameV2({ first: 'Elie', last: 'Schoppik' });

console.log(fullnameV2);

/* Exercise 2 : Keys And Values
Instructions
Create a function that takes an object and returns the keys and values as separate arrays.
Return the keys sorted alphabetically, and their corresponding values in the same order.
Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
*/

const keysAndValues = (obj) => {
  return [Object.keys(obj), Object.values(obj)];
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: 'Apple', b: 'Microsoft', c: 'Google' }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

/*Exercise 3 : Counter Class
Instructions
Analyze the code below, what will be the output?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
 */
// thought 2, but result is 3 because counterTwo points on counterOne
