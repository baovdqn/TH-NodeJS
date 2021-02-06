const express = require('express');

const controller = require('../controllers/users.controller')

const router = express.Router();

// render ra list user
router.get('/', controller.index);
// Search
router.get('/search', controller.search);

// Create
router.get('/create', controller.create);

// create method post
router.post('/create', controller.postUser);

// View user use route params
router.get('/:id', controller.get);

module.exports = router;