const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

exports.createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(products);
};

exports.getAllProducts = (req, res) => {
    res.json(products);
};

exports.getProductById = (req, res) => {
    const id = +req.params.id;
    const product = products.find(product => product.id === id);
    res.json(product);
};

exports.replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(product => product.id === id);
    const updateData = {...req.body, id:id};
    console.log(updateData);
    products.splice(productIndex, 1,  updateData)
    res.status(201).json(products);
};

exports.updatePartialProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(product => product.id === id);
    const product = products[productIndex];
    console.log(product);
    const partialUpdatedData = {...product, ...req.body};
    products.splice(productIndex, 1, partialUpdatedData)
    res.status(201).json(products);
};

exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(product => product.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1);
    res.status(201).json(products);
};
