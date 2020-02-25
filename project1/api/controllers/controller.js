'use strict';

var mongoose = require('mongoose'),

//For model - PRODUCTS
Product = mongoose.model('Products');
  exports.list_all_products = function(req, res) {
    Product.find({}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };

  exports.create_a_product = function(req, res) {
    var new_product = new Product(req.body);
    new_product.save(function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
  exports.read_a_product = function(req, res) {
    Product.findById(req.params.productId, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
  exports.update_a_product = function(req, res) {
    Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };
  
  exports.delete_a_product = function(req, res) {
    Product.remove({
      _id: req.params.productId
    }, function(err, product) {
      if (err)
        res.send(err);
      res.json({ message: 'Product successfully deleted' });
    });
  };


//For model - SELLERS ----------------------
var mongoose2 = require('mongoose'),
Seller = mongoose2.model('Sellers');
  exports.list_all_sellers = function(req, res) {
    Seller.find({}, function(err, seller) {
      if (err)
        res.send(err);
      res.json(seller);
    });
  };

  exports.create_a_seller = function(req, res) {
    var new_seller = new Seller(req.body);
    new_seller.save(function(err, seller) {
      if (err)
        res.send(err);
      res.json(seller);
    });
  };
  
  exports.read_a_seller = function(req, res) {
    Seller.findById(req.params.sellerId, function(err, seller) {
      if (err)
        res.send(err);
      res.json(seller);
    });
  };
  
  exports.update_a_seller = function(req, res) {
    Seller.findOneAndUpdate({_id: req.params.sellerId}, req.body, {new: true}, function(err, seller) {
      if (err)
        res.send(err);
      res.json(seller);
    });
  };
  
  exports.delete_a_seller = function(req, res) {
    Seller.remove({
      _id: req.params.sellerId
    }, function(err, seller) {
      if (err)
        res.send(err);
      res.json({ message: 'Seller successfully deleted' });
    });
  };