const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const {db} = require('./modules/database.js')

const app = express();
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))

app.get('/', (req, res) => {
  db('masterclasses')
  .select('mc_name', 'mc_location', 'mc_date')
  .then(data => {
    console.log(data);
    res.render("home", {mc_classes: data})
  })
  .catch(err => {
    console.log(err);
    res.send({message:err.detail})
  })

})

app.post('/login', (req, res) => {
    res.render('login')
})

app.post('/register', (req, res) => {
  res.render('register')
})

app.get('/about', (req, res) => {
    res.render('about')
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
