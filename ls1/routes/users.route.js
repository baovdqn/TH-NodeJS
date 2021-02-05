const express = require('express');
const shortid = require('shortid'); // require short id

const db = require('../db');

const router = express.Router();

// render ra list user
router.get('/', (req,res) => 
    res.render(
    'users/index',
    {
        users: db.get('users').value()
    }
    
))
// Search
router.get('/search', (req,res) =>{
    const q = req.query.q;
    const users = db.get('users').value();
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
})

// Create
router.get('/create', (req,res)=>{
    res.render('users/create');
})

// create method post
router.post('/create',(req,res)=>{
    req.body.id = shortid.generate();
    db.get('users')
    .push(req.body)
    .write()
    res.redirect('/')
})

// View user use route params
router.get('/:id', (req,res)=>{
    const id = req.params.id; 
    const user = db.get('users').find({ id: id }).value()
    res.render('users/viewuser',
    {
        user: user
    }
    )
})

module.exports = router;