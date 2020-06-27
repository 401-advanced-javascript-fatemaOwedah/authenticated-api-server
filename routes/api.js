'use strict';
/**
 * @module api
 * @requires express
 * @requires params
 */
const express = require('express');
const route = express.Router();
const getModel = require('../middleware/parms');
// const bearerMiddleware = require('../auth/middleware/bearer');
// const permissions = require('../auth/middleware/authorize');

route.param('model',getModel);
route.post('/api/v1/:model',postModel);
route.get('/api/v1/:model',getAll);
route.get('/api/v1/:model/:id',getById);
route.put('/api/v1/:model/:id',updateOne);
route.patch('/api/v1/:model/:id',updatePatchOne);
route.delete('/api/v1/:model/:id',deleteOne);
/**
 * @function postModel
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function postModel(req,res,next){
  req.model
    .post(req.body)
    .then(addResult=>{res.status(201).json(addResult);})
    .catch(next);
}
/**
 * @function getAll
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function getAll(req,res,next){
  req.model
    .get()
    .then(Result =>{
      let count = Result.length;
      res.json({count,Result});})
    .catch(next);
}
/**
 * @function getById
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function getById(req,res,next){
  req.model
    .get(req.params.id)
    .then(Result =>{res.status(200).json(Result);})
    .catch(next);  
}
/**
 * @function updateOne
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function updateOne(req,res,next){
  req.model
    .update(req.params.id , req.body)
    .then(ResultafterUpdate =>{res.status(200).json(ResultafterUpdate);})
    .catch(next);  
}
/**
 * @function updatePatchOne
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function updatePatchOne(req,res,next){
  req.model
    .update(req.params.id , req.body)
    .then(ResultafterUpdate =>{res.status(200).json(ResultafterUpdate);})
    .catch(next);  
}
/**
 * @function deleteOne
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function deleteOne(req,res,next){
  req.model
    .delete(req.params.id)
    .then(ResultDelete =>{res.status(200).json(`the Result delete successfully`);})
    .catch(next);
}
module.exports = route; 