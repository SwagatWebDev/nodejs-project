const express = require('express');
const fs = require('fs');
const server = express();
const morgan = require('morgan');
const port = 9000;
const baseURL = '/api/v1';
const productURL = '/products';
const productRouter = require('./router/product');

// Server Middleware
server.use(express.json())
server.use(morgan('dev'));
server.use(baseURL+productURL, productRouter.router)

// starting server
server.listen(port, () => {
   console.log(`Express Server running on http://localhost:${port}`);
 });


