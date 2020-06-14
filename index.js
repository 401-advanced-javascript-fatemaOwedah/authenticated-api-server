'use strict';
// express
require('dotenv').config();
const mongoose = require('mongoose');
// internal modules
const server = require('./lib/server');

// const MONGODB_URI = 'mongodb://localhost:27017/class-08-db';

server.start(process.env.PORT);

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions); 