let http = require('http');
const { largeNumber, getDateToday } = require('./main');

const host = 'localhost';
const port = 3000;

const b = 5;

//console.log(`The sum of ${largeNumber} and ${b} is ${largeNumber + b}`); */

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(`<html>
                <body>
                    <p>My Module is</p>
                    <p>${largeNumber + b}</p>
                    <p>The date and time are currently: ${getDateToday()}</p>
                    <h1>Hi there at the frontend</h1>
                </body>
            </html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});

/* const { largeNumber } = require('./main');

const b = 5;

console.log(`The sum of ${largeNumber} and ${b} is ${largeNumber + b}`); */
