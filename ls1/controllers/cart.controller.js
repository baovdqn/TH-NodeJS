const db = require('../db')


module.exports.addTocart = (req,res)=>{
    const productId = req.params.productId;
    const sessionId = req.signedCookies.sessionId;

    if(!sessionId){
        res.redirect('/product');
        return;
    }

    console.log('Đã thêm vào giỏ hàng')

    let count = db.get('sessions') //đếm 
    .find({id: sessionId})
    .get('cart.' + productId, 0)
    .value();

    db.get('sessions')
    .find({id: sessionId})
    .set('cart.' + productId, count + 1)
    .write();

    res.redirect('/product');
};
