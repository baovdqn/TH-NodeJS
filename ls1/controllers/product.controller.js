// const db = require('../db');

// const products = db.get('products').value();

const Product = require('../models/product.model')


module.exports.index = async (req, res) => {
    const products = await Product.find()
    // const page = parseInt(req.query.page) || 1;
    // const start = (page - 1) * 4;
    // const next = page * 4;
    // res.render('product/index',{
    //     products: products.slice(start,next),
    //     page: page,
    //     start: start
    // }
    // );

    res.render('product/index', {
        products: products
    })
};
