// 5. Third Party Middleware

const express = require('express');

const fs = require('fs');

const server = express();

const morgan = require('morgan');

const port = 9000;

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const products = data.products;

server.use(express.json())
server.use(morgan('dev'));

//CRUD

// http://localhost:8000/products

// http://localhost:8000 / http://localhost:8000/api/v1 - API Route, base URL


// GET Request
const baseURL = "/api/v1";

server.post(baseURL+"/products", (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(products);
})
server.get(baseURL+'/products', (req, res) => {
    res.json(products);
})

server.get(baseURL+'/products/:id', (req, res) => {
    const id = +req.params.id;
    const product = products.find(product => product.id === id);
    res.json(product);
})

server.listen(port, () => {
   console.log(`Express Server running on http://localhost:${port}`);
 });


