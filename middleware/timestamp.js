'use strict';

module.exports = function timestamp(req, res, next) { 
  const time = new Date().toLocaleString();
  req.requestTime = time ;
  console.log('REQ TIME ==> ', req.requestTime);
  next();
}; 