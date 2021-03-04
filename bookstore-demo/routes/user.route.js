const express = require('express');

//require controlller
const userController = require('../controllers/user.controller')

const router = express.Router();

router.get('/signin', userController.signin) //rder trang đang nhập
router.get('/signup', userController.signup); //rder trang đăng ki
router.get('/signout', userController.signout); // GET đăng xuất

// [POST]: signin
router.post('/signin', userController.postSignin)

// [POST]: signup
router.post('/signup', userController.postSignup)

module.exports = router;