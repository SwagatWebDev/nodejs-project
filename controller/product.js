const model = require('../model/product');
const mongoose = require('mongoose');
const Product = model.Product;

exports.createProduct = async (req, res) => {
   const product = new Product(req.body);
   try{
       const document = await product.save();
       console.log({document});
       res.status(201).json(document);
   } catch (err) {
       console.log({err});
       res.status(400).json(err);
   }
};

exports.getAllProducts = async (req, res) => {
    const products = await Product.find({price: {$gt: 400}});
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const id = req.params.id;
    console.log({id});
    const product = await Product.findById(id);
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
