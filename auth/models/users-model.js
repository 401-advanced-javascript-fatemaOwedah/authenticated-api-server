'use strict';
/**
 * @module users-schema
 */
/**
 * @requires dotenv
 * @requires bcrypt
 * @requires jsonwebtoken
 * @requires mongoose
 */
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const SECRET = process.env.SECRET;
/**
 * user schema
 * @property {string} username - The account's unique name
 * @property {string} password - The account's password
 * @property {string} role - The account's rol
 */
const users = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, required: false},
});
let complexity = 10;

/**
 * @method pre 
 * @param {string} users.username 
 */

users.pre('save', async function(){
  if (!users.username) {
    this.password = await bcrypt.hash(this.password, complexity);
    console.log(this.password);
  }
});
/**
 * @method authenticateBasic 
 * @param {String} username - The account's name
 * @param {String} password - The account's Password
 */

users.statics.authenticateBasic = function(auth) {
  return this.findOne({username:auth.username})
    .then(user => user.passCompare(auth.password))
    .catch(console.error);
};
/**
 * @method passCompare
 * @param {String} password - The password
 */
users.methods.passCompare = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};
/**
 * @method generateToken
 * @param {String} user - The username
 */
users.methods.generateToken = function(user) {
  let roles = {admin : ['read','create','update','delete'],
    writer: ['read','create'],
    regular: ['read'],
    editor:['read','create','update'],
  };
  let token = jwt.sign({ username: user.username, role: roles[user.role]}, SECRET, {
    expiresIn: '15m'});
  return token;
};
/**
 * @method list
 * @returns results
 */
users.statics.list =  async function(){
  let results = await this.find({});
  return results;
};
/**
 * @method verifyToken
 * @param {string} token - The user's token
 * @returns {string} parsedToken
 */
users.statics.verifyToken = function (token) {
  let parsedToken = jwt.verify(token, SECRET);
  let query ={username: parsedToken.username};
  return this.findOne(query)
    .then(()=>{
      return parsedToken;
    });
};
/**
 * @method can
 * @param {string} permision - The user's permision
 */
users.statics.can = function (permision){
  console.log(permision);
  if(permision){
    console.log(permision);
    return Promise.resolve(true);
  }
  else{
    return Promise.resolve(false);
  }
};


module.exports = mongoose.model('users',users);