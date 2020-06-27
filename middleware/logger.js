'use strict';

/**
 * @module 500
 */
/**
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 * @returns console.log 
 */
const logger = (req, res, next) => {
  console.log(' request Information => ','METHOD',req.method,'PATH', req.path, 'at', new Date().toLocaleString());
  next();
};

module.exports = logger; 