'use strict ';
/**
 * @module 500
 */
/**
 * @param {object} error The error object
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
module.exports = (error, req, res, next ) => {
  res.status(500);
  res.json({error: error});
}; 