function makeAllCaps(arr) {
  let capArr = [];
  let promise1 = new Promise((resolve, reject) => {
    arr.forEach((element) => {
      if (typeof element === 'string') {
        capArr.push(element.toLocaleUpperCase());
        resolve(capArr);
      } else {
        reject('Not type string');
      }
    });
  });

  return promise1;
}

function sortWords(array) {
  let promise2 = new Promise((resolve, reject) => {
    if (array.length > 4) {
      resolve(array.sort());
    } else {
      reject('Length of the array < 4');
    }
  });

  return promise2;
}

/* makeAllCaps([1, 'pear', 'banana'])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */

/* makeAllCaps(['apple', 'pear', 'banana'])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */

makeAllCaps(['apple', 'pear', 'banana', 'melon', 'kiwi'])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// Daily Challenge 2

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

function toJs() {
  return new Promise((resolve, reject) => {
    if (morse) {
      resolve(JSON.parse(morse));
    } else {
      reject('File not in txt');
    }
  });
}

let userWord;

function toMorse(morseJs) {
  let morseArr = [];
  let errArr = [];
  userWord = prompt('Enter a word');
  let wordArr = userWord.toLocaleLowerCase().split('');
  wordArr.forEach((item) => {
    if (morseJs.hasOwnProperty(item)) {
      morseArr.push(morseJs[item]);
    } else {
      errArr.push(item);
    }
  });
  return new Promise((resolve, reject) => {
    if (morseArr.length === wordArr.length) {
      resolve(morseArr);
    } else {
      reject(
        `One or more characters (${errArr.join('/')}) is not in morse alphabet`
      );
    }
  });
}

function joinWords(morseTranslation) {
  let div = document.getElementById('root');
  div.textContent = `"${userWord}" gives you :`;

  morseTranslation.map((item) => {
    let pg = document.createElement('p');
    div.appendChild(pg);

    pg.innerText = item;
  });
}

toJs()
  .then((res) => toMorse(res))
  .then((result) => joinWords(result))
  .catch((err) => console.log(err));
