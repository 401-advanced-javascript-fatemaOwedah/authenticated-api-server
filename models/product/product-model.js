'use strict';
/**
 * @module product-model
 * @requires model
 * @requires product-schema
 */

const Model = require('../model');
const productSchema = require('./product-schema');

class Product extends Model {
  constructor() {
    super(productSchema);
  }
}

module.exports = new Product(); 