module.exports.signin = (req,res) => {
    res.render('users/sign-in');
}

module.exports.signup = (req,res) => {
    res.render('users/sign-up');
}

module.exports.postSignin = (req,res) => {
    const errors = [];
    const username = req.body.username;
    const password = req.body.password;
    if(!username){
        errors.push('Chưa nhập username')
    }
    if(!password){
        errors.push('Chưa nhập password')
    }
    if(errors.length){
        res.render('users/sign-in',{
            values: req.body,
            errors: errors
        })
        return;
    }
    if(username == 'admin' && password =='admin'){
        res.redirect('/')
    }else{
       errors.push('Tài khoản hoặc mật khẩu chưa chính xác')
       res.render('users/sign-in',{
        errors: errors
    }) 
    }
}

module.exports.postSignup = (req, res) => {
    const errors = [];
    // console.log(req.body)
    if(!req.body.name){
        errors.push('Chưa nhập Full name')
    }
    if(!req.body.username){
        errors.push('Chưa nhập username')
    }
    if(!req.body.password){
        errors.push('Chưa nhập pass')
    }
    if(!req.body.passwordcheck){
        errors.push('Chưa nhập confirm pass')
    }
    if(errors.length){
        res.render('users/sign-up',{
            values: req.body,
            errors: errors
        })
        return;
    }
    res.send('Đăng kí thành công')
    
}