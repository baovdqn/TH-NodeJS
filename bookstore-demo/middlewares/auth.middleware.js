const UserModel = require('../models/user.model')

module.exports.userName = async (req, res, next) => {
    if(req.cookies.cookiesId){
        const id = req.cookies.cookiesId;
        const user = await UserModel.findById(id);
        res.locals.user = user;
        next();
    }else{
        next();
    }
}