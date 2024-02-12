const express = require('express');

const orderController = require('../controller/order')

const router = express.Router();

router
    .get('/', orderController.getAllOrders);

exports.router = router;
