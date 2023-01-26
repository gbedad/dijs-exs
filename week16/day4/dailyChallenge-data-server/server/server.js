const express = require('express');

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3010

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

app.get('/api/hello', (req, res) => {
    res.send("Hello from Express Server")
})

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.json({post: req.body.content})
})