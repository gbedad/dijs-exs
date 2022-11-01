function hotelCost() {
  const HOTEL_COST = 140;
  let nights = prompt('How many nights');
  return HOTEL_COST * parseInt(nights);
}

function planeRideCost() {
  let destination = prompt('What is your destination ? :');
  let price;

  switch (destination) {
    case 'London':
      price = 183;
      break;
    case 'Paris':
      price = 220;
      break;
    default:
      price = 300;
  }
  return price;
}

function rentalCarCost() {
  const RENTAL_PRICE = 40;
  const REBATE = 0.05;
  let days = parseInt(prompt('How many days do you want to rent the car ? :'));
  if (days < 10) {
    return RENTAL_PRICE * days;
  }
  return RENTAL_PRICE * days * (1 - REBATE);
}

function totalVacationCost() {
  let hotel = hotelCost();
  let travel = planeRideCost();
  let car = rentalCarCost();

  totalCost = hotel + travel + car;

  return `The total cost for your vacation is $${totalCost} (Hotel: $${hotel}, Travel: $${travel} and car: $${car})`;
}

let totalVacation = totalVacationCost();

console.log(totalVacation);
