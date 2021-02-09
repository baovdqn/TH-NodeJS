const express = require('express');

const controller = require('../controllers/cart.controller')

const router = express.Router();

router.get('/add/:productId',controller.addTocart);


module.exports = router;