const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    author: String,
    price: Number,
    description: String,
    img: String
})

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;