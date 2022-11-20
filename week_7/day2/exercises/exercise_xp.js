// Exercise 2 : Ternary operator

/* function winBattle(){
    return true;
}
Transform the winBattle() function to an arrow function.
Create a variable called experiencePoints.
Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
Console.log the experiencePoints variable. */

const winBattle = () => {
  return true;
};
let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// Exercise 3 : Is it a string ?
/* Instructions
Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
Check out the example below to see the expected output */

const isString = (val) => {
  let check = typeof val === 'string' ? true : false;

  return check;
};

console.log(isString('My name is Bond'));

// Exercise 4 : Colors
/* Instructions
Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
Hint : Use the array methods taught in class. Look at the lesson Array Methods. */
const colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'];

let sentence = '';

const assignPositionToColor = (arr) => {
  arr.forEach((item, i) => {
    return console.log(`${i + 1}# choice is ${item}`);
  });
};
const checkPositionViolet = (arr) => {
  const lastIndex = arr.length - 1;
  if (arr[lastIndex] === 'Violet') {
    console.log('Yeah !');
  } else {
    console.log('No...');
  }
};

assignPositionToColor(colors);

checkPositionViolet(colors);

/* 🌟 Exercise 5 : Colors #2
Instructions
Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator.
 */

const ordinal = ['th', 'st', 'nd', 'rd'];

const defineSuffix = (arr) => {
  arr.forEach((item, i) => {
    let pos =
      i === 0
        ? ordinal[1]
        : i === 1
        ? ordinal[2]
        : i === 2
        ? ordinal[3]
        : ordinal[0];
    console.log(`${i + 1}${pos} choice is ${item}`);
  });
};

defineSuffix(colors);

/* Exercise 6 : Bank Details
Instructions
In this exercise, you have to decide which type of variables you have to use (ie. let or const):

Create a global variable called bankAmount which value is the amount of money currently in your account.
Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
Create an array with all your monthly expenses, both positive and negative (money made and money spent).
Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
Display your current bankAccount standing at the end of the month. */

const VAT = 0.17;

const expenses = ['+200', '-100', '+146', '+167', '-2900'];

const modifyExpenses = (arr) => {
  let sum = 0;
  arr.forEach((item) => {
    sum += Number(item) * (1 + VAT);
  });
  return sum;
};

console.log(modifyExpenses(expenses));
