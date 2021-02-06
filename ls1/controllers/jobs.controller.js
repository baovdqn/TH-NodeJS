const db = require('../db');

module.exports.index = (req,res)=>{
    res.render('jobs/index',
    {
        jobs: db.get('jobs').value()
    });
};

module.exports.create = (req,res)=>{
    res.render('jobs/create');
};

module.exports.postCreate = (req,res)=>{
    // console.log(req.body);
    const errors = [];
    if(!req.body.name){
        errors.push('Chưa nhập tên ngành');
        res.render('jobs/create',{
            errors: errors
        })
        return;
    }
    db.get('jobs').push(req.body).write();
    res.redirect('/jobs')
}