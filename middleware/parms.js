'use strict';
/**
 * @module params
 * @requires categories-model
 * @requires product-model
 */

const categories = require('../models/categories/categories-model');
const products = require('../models/product/product-model');

/**
 * @function getModel
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
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