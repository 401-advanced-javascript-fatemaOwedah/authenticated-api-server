'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// const categoriesRouter = require('../routes/categories');
// const productRouter = require('../routes/product');

const v1Router = require('../routes/api');

const notfoundError = require('../middleware/404');
const clientError = require('../middleware/500');
const authRouter = require('../auth/router');
const extraRouter = require('../auth/extra-routes');
const app = express();
app.use(express.json());


app.use(express.json());
app.use(express.static('./public'));


app.use(authRouter);
app.use(extraRouter);
app.use(v1Router);
// app.use(productRouter);

app.use(cors());
app.use(morgan('dev'));

app.use('*', notfoundError);
app.use('/bad',clientError);
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, ()=> {console.log(`Listening on ${PORT}`);});
  },
}; 