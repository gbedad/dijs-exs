let fs = require('fs');

fs.unlink('../data.txt', function (err) {
    console.log('File deleted.');
});
