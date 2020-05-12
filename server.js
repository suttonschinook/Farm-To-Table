const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
	mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/producedb',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
	() => console.log('Connected to the DB')
);

app.use('/produce', require('./routes/prodRouter.js'));

app.use((err, req, res, next) => {
	console.log(err);
	return res.send({ errMsg: err.message });
});

//Not sure what this is or if its being used in future....

// app.get("/", (req, res) => {
//   res.send("this is home");
// });

// app.get("/user", (req, res) => {
//   res.send({ name: "joe", age: 25 });
// });

app.listen(9000, () => {
	console.log('The server is running');
});

// ... other imports 
const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(...)