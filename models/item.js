const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number
  }

});


module.exports = mongoose.model(
  'Item', itemSchema
);
