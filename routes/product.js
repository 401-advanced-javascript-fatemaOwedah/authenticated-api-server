'use strict';
/**
 * @module product
 * @requires express
 * @requires product-model
 */
const express = require('express');
const router = express.Router();

const productsModel = require('../models/product/product-model');

router.post('/products', postProduct);
router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
/**
 * @function postProduct
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function postProduct(req,res,next){
  productsModel
    .post(req.body)
    .then(addProduct=>{res.status(201).json(addProduct);})
    .catch(next);
}
/**
 * @function getProducts
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function getProducts(req,res,next){
  productsModel
    .get()
    .then(products =>{res.status(200).json(products);})
    .catch(next);  
}
/**
 * @function getOneProduct
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function getOneProduct(req,res,next){
  productsModel
    .get(req.params.id)
    .then(product =>{res.status(200).json(product);})
    .catch(next);   
}
/**
 * @function updateProduct
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function updateProduct(req,res,next){
  productsModel
    .update(req.params.id , req.body)
    .then(productafterUpdate =>{res.status(200).json(productafterUpdate);})
    .catch(next);    
}
/**
 * @function deleteProduct
 * @param {object} req The request object. 
 * @param {object} res The response object.
 * @param {function} next The next function.
 */
function deleteProduct(req,res,next){
  productsModel
    .delete(req.params.id)
    .then(productDelete =>{res.status(200).json(`the product delete successfully`);})
    .catch(next);
}

module.exports = router; 