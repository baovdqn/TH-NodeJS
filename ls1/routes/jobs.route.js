const express = require('express');

const db = require('../db')

const router = express.Router();


router.get('/', (req,res)=>{
    res.render('jobs/index',
    {
        jobs: db.get('jobs').value()
    });
});

// job create

router.get('/create',(req,res)=>{
    res.render('jobs/create');
})

router.post('/create',(req,res)=>{
    // console.log(req.body);
    db.get('jobs').push(req.body).write();
    res.redirect('/jobs')
});

module.exports = router;