let fs = require('fs');
let newContent = "This part is added on the file data2.txt with append method."

fs.appendFile('../data2.txt', newContent + '\n', function (err) {
    if (err) {
        console.error(err)
        return
    }
});
