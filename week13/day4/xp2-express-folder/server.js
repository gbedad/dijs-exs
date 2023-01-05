const express = require('express');

const app = express();

const PORT = 3000;

const user = {
  firstname: 'John',
  lastname: 'Doe'
}



app.get('/', (req, res) => {
console.log(user)
res.json(user)
})

app.get('/api/:id', (req, res) => {
  let resp_id = req.params
  console.log(resp_id)
  res.json(resp_id)
})

app.use('/', express.static(__dirname+'/public'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
