function splitSortJoin(str) {
  let toSortedArray = str.toLowerCase().split('').sort();
  let toString = toSortedArray.join('');
  return toString.trim();
}

function checkIfAnagram(str1, str2) {
  if (splitSortJoin(str1) === splitSortJoin(str2)) {
    return true;
  }
  return false;
}

console.log(splitSortJoin('Moon starer'));
console.log(splitSortJoin('Astronomer'));

/* const checkAnagram = (str1, str2) => {
  const str1toArray = str1.toLowerCase().split('');
  const str2ToArray = str2.toLowerCase().split('');
  if (str1toArray.includes(' ')) {
    const pos = str1toArray.indexof(' ');
    str1toArray.slice(pos, 0);
  }
  if (str1toArray.length === str2ToArray.length) {
    return str1ToArray.every((element, index) => {
      if (element === str2ToArray[index]) {
        return true;
      }

      return false;
    });
  }

  return false;
};
*/

console.log(checkIfAnagram('Astronomer', 'Moon starer'));
console.log(checkIfAnagram('School master', 'The classroom'));
console.log(checkIfAnagram('Astronomer', 'Moon starer'));
