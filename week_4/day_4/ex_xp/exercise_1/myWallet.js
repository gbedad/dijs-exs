function changeEnough(itemPrice, amountOfChange) {
  const changes = {
    quarter: 0.25,
    dime: 0.1,
    nickel: 0.05,
    penny: 0.01,
  };
  let myChange =
    amountOfChange[0] * changes.quarter +
    amountOfChange[1] * changes.dime +
    amountOfChange[2] * changes.nickel +
    amountOfChange[3] * changes.penny;

  if (itemPrice <= myChange) {
    return true;
  }
  return false;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));
