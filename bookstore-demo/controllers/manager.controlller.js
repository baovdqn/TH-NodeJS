const ProductModel = require('../models/products.model')

module.exports.product = async (req, res) => {
    const products = await ProductModel.find();
    const perpage = 7;
    const page = parseInt(req.query.page) || 1;
    const start = (page - 1) * perpage;
    const next = page * perpage;
    res.render('manager/product',{
        products: products.slice(start, next),
        page: page
    });
}

module.exports.createProduct = (req,res) => {
    res.render('manager/createProduct');
}
module.exports.postCreateproduct = async (req,res) => {
    if(req.body.price){
        req.body.price = parseInt(req.body.price);
    }
    const product = await ProductModel.create(req.body);
    res.redirect('/manager/product')
}