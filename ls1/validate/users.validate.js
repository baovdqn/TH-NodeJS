module.exports.postCreate = (req,res,next) => {
    const errors = [];
    if(!req.body.name){
        errors.push('Chưa nhập name');
    }

    if(!req.body.phone){
        errors.push('Chưa nhập số điện thoại');
    }

    if(errors.length){
        res.render('users/create',{
        errors: errors,
        values: req.body
    })
        return;
    }

    next();
}