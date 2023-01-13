const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const {db} = require('./modules/database.js')

const app = express();

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public/views/index.html"))
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
