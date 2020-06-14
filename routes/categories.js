'use strict';

const express = require('express');
const router = express.Router();

const categoryModel = require('../models/categories/categories-model');

router.post('/categories', postCategories);
router.get('/categories', getCategories);
router.get('/categories/:id', getCategorybyid);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

function postCategories(req,res,next){
  categoryModel
    .post(req.body)
    .then(addCategory=>{res.status(201).json(addCategory);})
    .catch(next);
}
function getCategories(req,res,next){
  categoryModel
    .get()
    .then(categories =>{res.status(200).json(categories);})
    .catch(next);
}
function getCategorybyid(req,res,next){
  categoryModel
    .get(req.params.id)
    .then(category =>{res.status(200).json(category);})
    .catch(next);  
}
function updateCategory(req,res,next){
  categoryModel
    .update(req.params.id , req.body)
    .then(categoryafterUpdate =>{res.status(200).json(categoryafterUpdate);})
    .catch(next);  
}
function deleteCategory(req,res,next){
  categoryModel
    .delete(req.params.id)
    .then(categoryDelete =>{res.status(200).json(`the category delete successfully`);})
    .catch(next);
}
module.exports = router; 
