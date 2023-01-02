import { faker } from '@faker-js/faker';

// Exercise 1
export const createUser = () => {
  return {
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.street(),
    city: faker.address.city(),
    country: faker.address.country(),
  };
};

//console.log(createUser());

// Exercise 2
export const returnNumbers = (exp) => {
  const matches = exp.match(/\d+/g)
  if (matches) {
    return matches.join('')
  }
}

// Exercise 3
export const checkNameValidity = (str) => {
  return /^[A-Z][a-z]{1,}\s{1}[A-Z][a-z]{1,}/.test(str)
}
