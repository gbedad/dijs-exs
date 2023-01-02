import { createUser, returnNumbers, checkNameValidity } from './main.js';

const USERS = [];

for (let i = 0; i < 10; i++) {
  USERS.push(createUser());
}

console.log(USERS);

console.log(returnNumbers('k5k3q2g5z6x9bn'));


console.log(checkNameValidity("John Doe"));
