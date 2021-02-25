const express = require('express');

const controller = require('../controllers/products.controller')

const router = express.Router();

router.get('/', controller.index);

router.post('/', controller.postProduct);

router.put('/:id', controller.putProduct);

router.delete('/:id', controller.deleteProduct);

module.exports = router;