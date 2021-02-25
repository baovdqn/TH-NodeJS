const Product = require('../../models/product.model')


module.exports.index = async (req, res) => {
    const products = await Product.find();
    res.json(products)
};

module.exports.postProduct = async(req,res) => {
    const product = await Product.create(req.body);
    res.json(product);
}

module.exports.putProduct = async (req,res) => {
    const update = req.body;
    const result = await Product.updateOne({ _id: req.params.id}, update)
    res.json(result);
}
module.exports.deleteProduct = async (req,res) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    console.log(result)
    res.json(result);
}