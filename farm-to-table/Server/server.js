const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('this is home')
})

app.get('/user', (req, res) => {
	res.send({ name: 'joe', age: 25 })
})

app.listen(9000, () => {
	console.log('The server is running')
})
