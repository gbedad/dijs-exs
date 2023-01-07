const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 5000

app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.post('/api/addItem', (req, res) => {
  console.log(req.body)
  let myList = []
  try {
    const f = fs.readFileSync('./shoppingList')
    myList = JSON.parse(f)

  }
  catch (e) {
    console.log(e)
  }
  finally {
    myList.push(req.body)

  }
  fs.writeFile('./shoppingList', JSON.stringify(myList), err => {
    if (err) {
      console.log('Error writing to file')
    }
  })
  //res.send({ message: 'Item added to list' })
  //res.redirect('../api/show')
})

app.get('/api/show', (req, res) => {
  let myList = [];
  try {
    const f = fs.readFileSync('./shoppingList')
    myList = JSON.parse(f)
  }
  catch (e) {
    res.send({ msg: 'Data not found' })
  }
  res.send(myList)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})