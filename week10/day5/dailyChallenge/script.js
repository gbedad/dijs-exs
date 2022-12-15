const API_KEY = '16abc17ad43ec74816cf340d';
BASE_URL = 'https://v6.exchangerate-api.com/v6/';

let currencyFrom = 'EUR';
let currencyTo = 'ILS';
//let amount = 100;

const getSupportedExchanges = async () => {
  const response = await fetch(`${BASE_URL}${API_KEY}codes`);
  const data = await response.json();
  console.log(data.supported_codes);
  try {
    let selectFrom = document.getElementById('select-from');
    let selectTo = document.getElementById('select-to');
    let currenciesArray = data.supported_codes;
    for (let i = 0; i < currenciesArray.length; i++) {
      let option = document.createElement('OPTION');
      let txt = document.createTextNode(currenciesArray[i][1]);
      option.appendChild(txt);
      option.setAttribute('value', currenciesArray[i][0]);
      selectFrom.insertBefore(option, selectFrom.lastChild);
    }
    for (let i = 0; i < currenciesArray.length; i++) {
      let option = document.createElement('OPTION');
      let txt = document.createTextNode(currenciesArray[i][1]);
      option.appendChild(txt);
      option.setAttribute('value', currenciesArray[i][0]);

      selectTo.insertBefore(option, selectTo.lastChild);
    }
  } catch (err) {
    console.log(err);
  }
};

getSupportedExchanges();

const getExchange = async () => {
  let amount =
    document.getElementById('amount').value === ''
      ? document.getElementById('amount').value
      : 1;
  let currencyFrom = document.getElementById('select-from').value;
  let currencyTo = document.getElementById('select-to').value;
  const response = await fetch(
    `${BASE_URL}${API_KEY}/pair/${currencyFrom}/${currencyTo}/${amount}`
  );
  const data = await response.json();
  try {
    console.log(data);
    const dataObj = {
      conversion_rate: data.conversion_rate,
      base: data.base_code,
      target: data.target_code,
      result: data.conversion_result,
    };

    displayResult(dataObj);
    localStorage.setItem('converted', JSON.stringify(dataObj));
    console.log(dataObj.result);
  } catch (err) {
    console.log(err);
  }
};

const displayResult = (obj) => {
  document.getElementById('result').innerText = obj.result;
  document.getElementById('target').innerText = obj.target;
};

//getExchange();
//getValue(300);

const reversedConversion = async () => {
  let myValues = JSON.parse(localStorage.getItem('converted'));
  console.log(myValues);
  const { base, target } = myValues;
  let amount = document.getElementById('amount').value;

  const response = await fetch(
    `${BASE_URL}${API_KEY}/pair/${target}/${base}/${amount}`
  );
  const data = await response.json();
  try {
    console.log(data);

    const dataObj = {
      conversion_rate: data.conversion_rate,
      base: data.base_code,
      target: data.target_code,
      result: data.conversion_result,
    };

    displayResult(dataObj);

    console.log(dataObj.result);
  } catch (err) {
    console.log(err);
  }
};
