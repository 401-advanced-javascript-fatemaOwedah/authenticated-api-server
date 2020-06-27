'use strict ';
/**
 * @module 404
 */
/**
 * @param {object} req The request object. 
 * @param {object} res The response object.
 */
module.exports = (req,res) => {
  res.status(404);
  res.json({error:'404/NOT-FOUND'});
}; 