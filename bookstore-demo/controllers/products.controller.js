const Product = require('../models/products.model')

module.exports.index = async (req, res) => {
    const products = await Product.find();
    res.render('index', {
        products: products
    })
}

module.exports.getProduct = async (req, res) => {
    const products = await Product.find();
    const filter = products.filter((product) => {
        return product.type == req.params.id
    })
    res.render('index',{
        products: filter
    })
    
}