const express = require('express');

//require model
const productController = require('../controllers/products.controller')
const router = express.Router();


router.get('/', productController.index)

router.get('/:id', productController.getProduct)

module.exports = router;