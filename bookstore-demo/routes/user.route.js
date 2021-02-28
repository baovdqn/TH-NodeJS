const express = require('express');

//require controlller
const userController = require('../controllers/user.controller')

const router = express.Router();

router.get('/signin', userController.signin) //rder trang đang nhập
router.get('/signup', userController.signup); //rder trang đăng ki

router.post('/signin', userController.postSignin)
router.post('/signup', userController.postSignup)

module.exports = router;