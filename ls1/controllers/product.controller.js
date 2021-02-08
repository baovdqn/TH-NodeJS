const db = require('../db');

const products = db.get('products').value();


module.exports.index = (req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const start = (page -1) * 4;
    const next = page * 4;
    res.render('product/index',{
        products: products.slice(start,next),
        page: page,
        start: start
    }
    );
};
