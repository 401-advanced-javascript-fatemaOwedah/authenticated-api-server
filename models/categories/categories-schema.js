'use strict';
/**
 * @module categories-schema
 * @requires mongoose
 */
const mongoose = require('mongoose');
/**
 * categories schema
 * @property {string} name - The account's unique name
 * @property {string} display_name - The user's display_name
 * @property {string} description - The description
 */
const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('categorySchema', categorySchema); 