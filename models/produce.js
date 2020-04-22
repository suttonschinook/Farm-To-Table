const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produceSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Produce", produceSchema);
