'use strict';
/**
 * @module bearerAuth
 * @requires users-models
 */
const users = require('../models/users-model');
/**
 * This checks the user login and validates it.
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 * @returns {function} Either gives an invalid user token, user not logged in errors if the login is wrong, or goes to the next step if the login is right
 */
module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    next('User is not loggedin');
    return;
  }

  let bearerToken = req.headers.authorization.split(' ').pop();

  users.verifyToken(bearerToken)
    .then(decodedUserObject => {
      console.log('decode======>',decodedUserObject);
      req.user = decodedUserObject;
      next();
    }).catch(err=> next('Protected: Invalid User Token'));
    
};