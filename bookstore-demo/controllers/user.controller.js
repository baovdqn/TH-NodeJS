const User = require('../models/user.model')

module.exports.signin = (req, res) => {
    res.render('users/sign-in');
}

module.exports.signup = (req, res) => {
    res.render('users/sign-up');
}
module.exports.signout = (req, res) => {
    if(req.cookies.cookiesId){
        res.clearCookie('cookiesId');
    }
    res.redirect('/');
}

//Sign in
module.exports.postSignin = async (req, res) => {
    const errors = [];
    const username = req.body.username;
    const password = req.body.password;
    if (!username) {
        errors.push('Chưa nhập username')
    }
    if (!password) {
        errors.push('Chưa nhập password')
    }
    if (errors.length) {
        res.render('users/sign-in', {
            values: req.body,
            errors: errors
        })
        return;
    }

    const user = await User.find({ username: username });
    if (!user.length) {
        errors.push('Tài khoản hoặc mật khẩu không chính xác');
        res.render('users/sign-in', {
            errors: errors
        })
    }

    if (user[0].password == password) {
        res.cookie('cookiesId', user[0]._id);
        res.redirect('/');
    } 
    else {
        errors.push('Tài khoản hoặc mật khẩu chưa chính xác')
        res.render('users/sign-in', {
            errors: errors
        })
    }
}

// đăng kí
module.exports.postSignup = async (req, res) => {
    const errors = [];
    const success = [];
    if (!req.body.name) {
        errors.push('Chưa nhập Full name')
    }
    if (!req.body.username) {
        errors.push('Chưa nhập username')
    }
    if (!req.body.password) {
        errors.push('Chưa nhập pass')
    }
    if (!req.body.passwordcheck) {
        errors.push('Chưa nhập confirm pass')
    }
    if (errors.length) {
        res.render('users/sign-up', {
            values: req.body,
            errors: errors
        })
        return;
    }

    //check confirm pass
    if (req.body.password != req.body.passwordcheck) {
        errors.push('Confirm password incorrect');
        console.log(req.body)
        res.render('users/sign-up', {
            errors: errors
        })
        return;
    }

    // check trùng user 

    const checkUsers = await User.find({ username: req.body.username });
    if (checkUsers.length) {
        errors.push('Username exist!');
        res.render('users/sign-up', {
            errors: errors
        })
        return;
    }

    //save user and redriect
    const user = await User.create(req.body);
    success.push('Đăng kí thành công')
    res.render('users/sign-up', {
        success: success
    })

}