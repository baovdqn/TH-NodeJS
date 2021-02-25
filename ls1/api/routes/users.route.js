const express = require('express');
var multer  = require('multer')
var upload = multer({ dest: './../public/uploads/' })

const controller = require('../controllers/users.controller')
// const validate = require('../../validate/users.validate')

const router = express.Router();

// render ra list user
router.get('/', controller.index);
// Search
router.get('/search', controller.search);

// Create
router.get('/create', controller.create);

// create method post
router.post('/create',
upload.single('avatar'),
// validate.postCreate, 
controller.postUser);

// View user use route params
router.get('/:id', controller.get);

module.exports = router;