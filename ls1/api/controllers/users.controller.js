const shortid = require('shortid'); // require short id

// const db = require('../db');
const User = require('../../models/user.model');

module.exports.index = async (req,res) => {
    const users = await User.find();
    res.json(users);
}

module.exports.search = async (req,res) =>{
    const users = await User.find();
    const q = req.query.q;
    const matchesUsers = users.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render(
        'users/index',
        {
            users: matchesUsers,
            keyword: q
        }
    
    )
}

module.exports.create = (req,res)=>{
    res.render('users/create');
}

module.exports.get = async (req,res)=>{
    const users = await User.find();
    const id = req.params.id; 
    const user = users.find((user) =>user._id == id )
    res.json(user)
}

module.exports.postUser = (req,res)=>{
    // req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    // db.get('users').push(req.body).write();
    // res.json(req.body);
    console.log(req.body)
    const user = new User(req.body);
    user.save(function (err) {
        if (err) return handleError(err);
        // saved!
    });
    res.redirect('/users')
}