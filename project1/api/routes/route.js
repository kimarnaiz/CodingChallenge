'use strict';

module.exports = function(app) {

  //for new route - PRODUCTS -------------------------------
  var productList = require('../controllers/controller');
  
  app.route('/products')
    .get(productList.list_all_products)
    .post(productList.create_a_product);

  app.route('/products/:productId')
    .get(productList.read_a_product)
    .put(productList.update_a_product)
    .delete(productList.delete_a_product);

  
    //for SELLER route ----------------------------------------
  var sellerList = require('../controllers/controller');
  
  app.route('/sellers')
    .get(sellerList.list_all_sellers)
    .post(sellerList.create_a_seller);

  app.route('/sellers/:sellerId')
    .get(sellerList.read_a_seller)
    .put(sellerList.update_a_seller)
    .delete(sellerList.delete_a_seller);

};