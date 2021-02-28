const express = require('express');

//require model
const Product = require('../models/products.model')
const router = express.Router();


router.get('/', async (req, res) => {
    const products = await Product.find();
    res.render('index', {
        products: products
    })
})

router.get('/:id', async (req, res) => {
    const products = await Product.find();
    const filter = products.filter((product) => {
        return product.type == req.params.id
    })
    res.render('index',{
        products: filter
    })
})

module.exports = router;