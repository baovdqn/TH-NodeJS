const db = require('../db');

module.exports.login = (req,res)=>{
    res.render('auth/login');
};

module.exports.authLogin = (req,res)=>{
    console.log(req.body);
    const gmail = req.body.gmail;
    const password = req.body.password;

    const user = db.get('users').find({gmail: gmail}).value();
    if(!user){
        res.render('auth/login', {
            errors: [
                'Tài khoản không tồn tại'
            ],
            values: req.body

        }
        )
        return;
    }

    if(password !== user.password){
        res.render('auth/login', {
            errors: [
                'Sai mật khẩu'
            ],
            values: req.body

        })
        return;
    }
    res.cookie('userId',user.id)
    res.redirect('/users');
}