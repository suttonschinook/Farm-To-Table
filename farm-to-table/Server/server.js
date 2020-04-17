const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));

//Rewatch video and update....
// mongoose.connect(
//   "mongodb://localhost:27017/inventorydb",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   },
//   () => console.log("Connected to the DB")
// );

app.use("/produce", require("./routes/prodRouter"));

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
  console.log("The server is running");
});
