const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    type: String,
    author: String,
    price: Number,
    description: String,
    img: String
})

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;