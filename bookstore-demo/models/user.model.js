const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
}, { versionKey: false })

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;