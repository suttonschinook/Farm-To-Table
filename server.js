const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost:27017/producedb',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
	() => console.log('Connected to the DB')
);

app.use('/produce', require('./routes/prodRouter.js'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.use((err, req, res, next) => {
	console.log(err);
	return res.send({ errMsg: err.message });
});

app.listen(port, () => {
	console.log('The server is running');
});
