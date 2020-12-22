const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Shopstore = new Schema({
  id: {
    type: String
  },
  material: {                                             
    type: String
  },
  stock: {
    type: Number
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  jtype:{
    type:String
  }

},{
    collection: 'shopstore'
});

module.exports = mongoose.model('Shopstore', Shopstore);