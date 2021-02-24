const Job = require('../models/job.model')

module.exports.index = async (req,res)=>{
    const jobs = await Job.find();
    res.render('jobs/index',
    {
        jobs: jobs
    });
};

module.exports.create = (req,res)=>{
    res.render('jobs/create');
};

module.exports.postCreate = (req,res)=>{
    const errors = [];
    //check 
    if(!req.body.name){
        errors.push('Chưa nhập tên ngành');
        res.render('jobs/create',{
            errors: errors
        })
        return;
    }
    // save to mongodb
    const job = new Job(req.body);
    job.save(function (err) {
        if (err) return handleError(err);
        // saved!
    });
    res.redirect('/jobs')
}