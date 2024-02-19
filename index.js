require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./db/connectdb.js');
const server = express();
const baseURL = '/api/v1';
const productURL = '/products';
const userURL = '/users';
const orderURL = '/orders';
const netflixUserURL = '/netflix-user';
const productRouter = require('./router/product');
const userRouter = require('./router/user');
const orderRouter = require('./router/order');
const netflixUserRouter = require('./router/netflix-user');
const { getUsersWithOrders } = require("./controller/user");
const cors = require('cors');

// Connect to MongoDB
connectDB();

// Server Middleware
server.use(cors());
server.use(express.json());
server.use(baseURL + productURL, productRouter.router);
server.use(baseURL + userURL, userRouter.router);
server.use(baseURL + orderURL, orderRouter.router);
server.use(baseURL + netflixUserURL, netflixUserRouter.router);

// Example of custom middleware usage
server.use(baseURL + '/user-with-order', getUsersWithOrders);

// starting server
server.listen(process.env.PORT, () => {
    console.log(`Express Server running on http://localhost:${process.env.PORT}`);
});
