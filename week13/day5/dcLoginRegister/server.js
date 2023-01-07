const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express()

const PORT = 3000

app.use('/', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.post('/register', (req, res) => {
  console.log(req.body)
  let users = [];
  try {
    const file = fs.readFileSync('./users');
    users = JSON.parse(file)
  }
  catch (err) {
    console.log(err)
  }
  finally {
    if (users.some(user => user.username === req.body.username || user.email === req.body.email)) {
      res.send({ message: 'User already registred' })
    }
    else {
      users.push(req.body)
    }
  }

  fs.writeFile('./users', JSON.stringify(users), err => {
    if (err) {
      console.log('Error writing to file')
    }
  })
  res.send({ message: "Hello Your account is now created!" })
})

app.post('/login', (req, res) => {
  console.log(req.body)
  let users = []
  try {
    const file = fs.readFileSync('./users');
    users = JSON.parse(file)
  }
  catch (err) {
    console.log(err)
  }
  finally {
    if (users.some(user => user.username === req.body.username && user.password === req.body.password)) {
      res.send({ message: `Hi welcome back again!` })
    }
    else {
      res.send({ message: 'Username is not registred' })
    }
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})