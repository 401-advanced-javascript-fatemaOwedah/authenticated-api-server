'use strict';
/**
 * This is the authorization module that is responsible for allowing users passage depending on their roles.
 * @module authorization
 * @requires users-model
 */
const userModel = require('../models/users-model');
/**
 * check the role
 * @param {object} capability 
 * @returns userModel.can(req.user.role.includes(capability)
 */
module.exports= (capability)=>{
  return (req,res,next) =>{
    console.log('role======>',req.user.role);
    console.log('capab=======>', capability);
    return userModel.can(req.user.role.includes(capability))
      .then(result =>{
        result ? next() : next('access Denide');
      });
    
  };
};