const model = require('../model/orders');
const mongoose = require('mongoose');
const Order = model.Order;


// Controller function to get all products with price greater than 400
exports.getAllOrders = async (req, res) => {
    try {
        // Find all products with price greater than 400
        const order = await Order.find({});
        // Send the products as a JSON response
        res.json(order);
    } catch (err){
        res.status(400).json(err);
    }
};
