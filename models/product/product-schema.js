'use strict';
/**
 * @module product-schema
 * @requires mongoose
 */
const mongoose = require('mongoose');
/**
 * product schema
 * @property {string} category - The category name
 * @property {string} name - The account's unique name
 * @property {string} display_name - The user's display_name
 * @property {string} description - The description
 */
const productSchema = mongoose.Schema({
  category: { type: String, required: true },  
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('productSchema', productSchema); 