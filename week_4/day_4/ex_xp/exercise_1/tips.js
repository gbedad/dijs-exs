const defineTipPercent = (amount) => {
  let tip;
  if (amount <= 50) {
    tip = 0.2 * amount;
  } else if (amount > 50 && amount <= 200) {
    tip = 0.15 * amount;
  } else if (amount > 200) {
    tip = 0.1 * amount;
  }
  return tip;
};

const calculateTip = () => {
  let billAmount = prompt('Enter the amount of the bill: ');
  tip = defineTipPercent(billAmount);
  return `Tip is $${tip} and total invoice is $${parseInt(billAmount) + tip}`;
};

console.log(calculateTip());
