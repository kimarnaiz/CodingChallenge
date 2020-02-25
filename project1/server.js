var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),

  Product = require('./api/models/model'), //load model
  Seller = require('./api/models/model'),
  
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/EMarketplace'); 

app.use(bodyParser.urlencoded({ 
  extended: true })
);
app.use(bodyParser.json());

var routes = require('./api/routes/route'); //importing route
routes(app); //register the route

app.listen(port);

console.log('API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});