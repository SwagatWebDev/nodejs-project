const express = require('express');

const fs = require('fs');

const server = express();

const morgan = require('morgan');

const port = 9000;

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const products = data.products;

server.use(express.json())
server.use(morgan('dev'));

const router = express.Router();

//CRUD

// http://localhost:8000/products

// http://localhost:8000 / http://localhost:8000/api/v1 - API Route, base URL


const baseURL = "/api/v1";
server.use(router);

const createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(products);
};

const getAllProducts = (req, res) => {
    res.json(products);
};

const getProduct = (req, res) => {
    const id = +req.params.id;
    const product = products.find(product => product.id === id);
    res.json(product);
};

const replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(product => product.id === id);
    const updateData = {...req.body, id:id};
    console.log(updateData);
    products.splice(productIndex, 1,  updateData)
    res.status(201).json(products);
};

const updatePartialProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(product => product.id === id);
    const product = products[productIndex];
    console.log(product);
    const partialUpdatedData = {...product, ...req.body};
    products.splice(productIndex, 1, partialUpdatedData)
    res.status(201).json(products);
};

const deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(product => product.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1);
    res.status(201).json(products);
};

// POST Request
router.post(baseURL+"/products", createProduct);

// GET Request
router.get(baseURL+'/products', getAllProducts);

router.get(baseURL+'/products/:id', getProduct);

// PUT Request
router.put(baseURL+ '/products/:id', replaceProduct);

// PUT Request
router.patch(baseURL+ '/products/:id', updatePartialProduct);

// DELETE Request
router.delete(baseURL+ '/products/:id', deleteProduct)

server.listen(port, () => {
    console.log(`Express Server running on http://localhost:${port}`);
});


