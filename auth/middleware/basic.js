'use strict';
/**
 * @module basic
 * @requires users-models
 */

const users = require('../models/users-model');
/**
 * This checks the user login and validates it.
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
module.exports = (req, res, next) => {

  let [authType, encodedString] = req.headers.authorization.split(/\s+/);

  switch(authType.toLowerCase()) {
  case 'basic':
    return authBasic(encodedString);
  default:
    break;
  }
  function authBasic(authString) {
    let base64Buffer = Buffer.from(authString,'base64');
    let bufferString = base64Buffer.toString();
    let [username,password] = bufferString.split(':');
    let auth = {username,password};
    
    return users.authenticateBasic(auth)
      .then( user =>{
        console.log(user);
        req.user = user;
        req.token = user.generateToken(user);
        next();
      });
  }
};