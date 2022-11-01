function wordsInput() {
  let wordsInput = prompt('Enter separated comma words');
  wordsToArray = wordsInput.split(',');
  return wordsToArray;
}

function findLonguestWord(arr) {
  let lengthArr = [];
  for (word in arr) {
    lengthArr.push(arr[word].length);
  }
  return Math.max(...lengthArr);
}

function onlyStars() {
  console.log('*'.repeat(findLonguestWord(myArr) + 4));
}

function wordAndStars(arr, l) {
  for (word in myArr) {
    console.log(`* ${arr[word]}` + ' '.repeat(l - arr[word].length) + ' *');
  }
}

let myArr = wordsInput();

let theLonguest = findLonguestWord(myArr);

onlyStars();
wordAndStars(myArr, theLonguest);
onlyStars();
