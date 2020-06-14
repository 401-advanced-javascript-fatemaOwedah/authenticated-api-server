'use strict';

const Model = require('../model');
const productSchema = require('./product-schema');

class Product extends Model {
  constructor() {
    super(productSchema);
  }
}

module.exports = new Product(); 