'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//New Schema for 'Products' -------------------------------
var ProductsSchema = new Schema({
  id: {
    type: String,
    required: 'Kindly enter a product ID'
  },
  name: {
    type: String,
    required: 'Kindly enter a product name'
  },
  description: {
    type: String,
    required: 'Kindly enter a product description'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    default: 0.00
  },
  currency: {
    type: String,
    default: 'Php'
  },
  quantity: {
    type: Number,
    default: 0
  },
  seller_name:{
    type: String,
    required: 'Kindly enter a seller name'
  }
});
module.exports = mongoose.model('Products', ProductsSchema);

//New schema for "Seller"
var SellersSchema = new Schema({
  id: {
    type: String,
    required: 'Kindly enter a seller ID'
  },
  name: {
    type: String,
    required: 'Kindly enter a seller name'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  sold_products: {
    type: String
  },
  sold_products_qty:{
    type: Number,
    default: 0
  }
});
module.exports = mongoose.model('Sellers', SellersSchema);