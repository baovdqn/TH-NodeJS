const express = require('express');

const controller = require('../controllers/jobs.controller')

const router = express.Router();


router.get('/', controller.index);

// job create

router.get('/create',controller.create);

router.post('/create',controller.postCreate);

module.exports = router;