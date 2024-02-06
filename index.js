require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const fs = require('fs');
const server = express();
const morgan = require('morgan');
const baseURL = '/api/v1';
const productURL = '/products';
const userURL = '/users';
const productRouter = require('./router/product');
const userRouter = require('./router/user');
const {Schema} = require("mongoose");

// Server Middleware
server.use(express.json())
server.use(morgan('dev'));
server.use(baseURL+productURL, productRouter.router);
server.use(baseURL+userURL, userRouter.router);

// DB Connection
async function main(){
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Database Connected')
}

main().catch(err => console.log(err));

console.log('DB Password', process.env.DB_PASSWORD);

const productSchema = new Schema({

})

// starting server
server.listen(process.env.PORT, () => {
   console.log(`Express Server running on http://localhost:${process.env.PORT}`);
 });


