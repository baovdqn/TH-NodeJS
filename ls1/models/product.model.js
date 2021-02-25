const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String
}, { versionKey: false  });

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;