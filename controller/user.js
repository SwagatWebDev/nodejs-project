const model = require('../model/users');
const mongoose = require('mongoose');
const User = model.User;


// Controller function to get all products with price greater than 400
exports.getAllUsers = async (req, res) => {
    // Find all products with price greater than 400
    const users = await User.find({});
    // Send the products as a JSON response
    res.json(users);
};


exports.getUsersWithOrders = async (req, res) => {
    try{
        const userWithOrders = await User.aggregate([
            {
                $lookup: {
                    from: 'orders',
                    localField: '_id',
                    foreignField: 'user',
                    as: 'orders'
                }
            },
            // {
            //     $match: {
            //         "orders.product": "Iphone 15 Pro Max"
            //     }
            // }
        ]);
        res.json(userWithOrders);
    } catch(error) {
        res.json({error: error.message});
    }
}
