const http = require('http');

const PORT = 8080;

const user = {
    firstname: 'John',
    lastname: 'Doe'
}


const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(user))
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
