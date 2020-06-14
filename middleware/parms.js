'use strict';

const categories = require('../models/categories/categories-model');
const products = require('../models/product/product-model');

function getModel(req, res, next) {
  let model = req.params.model; 
  switch(model) {
  case 'products':
    req.model = products;
    next();
    return;
  case 'categories':
    req.model = categories;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}
module.exports = getModel;