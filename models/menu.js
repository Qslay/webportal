const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  publish:{
    type:Boolean
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }]
});


module.exports = mongoose.model(
  'Menu', menuSchema
);
