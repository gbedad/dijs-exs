let fs = require('fs');

fs.writeFile('../data2.txt', 'This is a new text using writeFile method on nodejs', function (err) {
    if (err){
        console.log(err);
    }
    else{
        console.log('Text created.');
    }
});
