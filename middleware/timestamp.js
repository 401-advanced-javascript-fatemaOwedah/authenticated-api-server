'use strict';
/**
 * @module timestamp
 */
/**
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 * @returns console.log 
 */
module.exports = function timestamp(req, res, next) { 
  const time = new Date().toLocaleString();
  req.requestTime = time ;
  console.log('REQ TIME ==> ', req.requestTime);
  next();
}; 