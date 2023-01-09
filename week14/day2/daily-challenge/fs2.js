const fs = require('fs')

fs.readFile('RightLeft.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    let arr = data.split('')
    let pos = 0
    let count = 0
    for (let i=0; i<= arr.length; i++) {

      if (pos === -1) {
        console.log(count)
        return
      }
      else {
        if (arr[i] === '>') {
          pos += 1
        }
        else if (arr[i] === '<') {
          pos -= 1
        }
      }
      count += 1
    }
    console.log(pos, count)
});
