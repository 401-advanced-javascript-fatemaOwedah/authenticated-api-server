'use strict';

const Model = require('../model');
const categoriesSchema = require('./categories-schema.js');

class Category extends Model {
  constructor() {
    super(categoriesSchema);
  }
}

module.exports = new Category();