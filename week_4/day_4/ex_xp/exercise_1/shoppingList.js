const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ['banana', 'orange', 'apple', 'pear'];

function myBill() {
  let bill = 0;
  for (key of shoppingList) {
    if (stock[key] > 0) {
      stock[key] = stock[key] - 1;
      //console.log(prices[key]);
      bill += prices[key];
    } else {
      console.log(`There is no stock for ${key}`);
    }
  }
  console.log(stock);
  return bill;
}

let value = myBill();

console.log(value);
