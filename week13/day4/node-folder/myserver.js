const http = require('http');

const PORT = 3000

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html')
	res.end(`<h1>This is my first response</h1>
			<h2>This is my second response</h2>
			<p>This is my third response</p>`)

})

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})