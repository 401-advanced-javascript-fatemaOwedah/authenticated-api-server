'use strict';

const logger = (req, res, next) => {
  console.log(' request Information => ','METHOD',req.method,'PATH', req.path, 'at', new Date().toLocaleString());
  next();
};

module.exports = logger; 