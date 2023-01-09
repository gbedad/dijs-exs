let fs = require('fs');

fs.readFile('../data.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

console.log("-----This is the text---------", '\n',);
