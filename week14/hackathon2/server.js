const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const {db} = require('./modules/database.js')

const app = express();
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
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

// app.get('/', (req, res) => {
//   res.render(path.join(__dirname, "public/views/home"))
// })

app.get('/', (req, res) => {
  res.render("home")
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
