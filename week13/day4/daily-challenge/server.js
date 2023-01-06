const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const PORT = 5000;

app.use('/', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res) => {

})

app.get('/aboutMe/:hobby', (req, res) => {
console.log(typeof req.params.hobby)
    let myhobby = req.params.hobby
    if (/^[A-Za-z\s]*$/.test(myhobby) === false) {
      res.status(404).send('Bad request, error 404')
    }
      res.json({message: myhobby})
})

app.get('/pic', (req, res) => {
  res.send('<img src=/images/mypict.jpeg width=500/>')
})

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/form.html'))
})

app.post('/formData', (req, res) => {
  let msg = req.body
  console.log(msg)
  res.json(msg)
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
