require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./db/connectdb.js');
const fs = require('fs');
const server = express();
const morgan = require('morgan');
const baseURL = '/api/v1';
const productURL = '/products';
const userURL = '/users';
const productRouter = require('./router/product');
const userRouter = require('./router/user');
const {Schema} = require("mongoose");
// const cors = require('cors');

// Server Middleware
// server.use(cors)
server.use(express.json())
server.use(morgan('dev'));
server.use(baseURL+productURL, productRouter.router);
server.use(baseURL+userURL, userRouter.router);
console.log('DB Password', process.env.DB_PASSWORD);

// starting server
server.listen(process.env.PORT, () => {
   console.log(`Express Server running on http://localhost:${process.env.PORT}`);
 });


