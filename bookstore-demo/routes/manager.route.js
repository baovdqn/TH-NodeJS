const express = require('express');
const router = express.Router();

const managerController = require('../controllers/manager.controlller');

router.get('/product', managerController.product)

router.get('/product/create', managerController.createProduct)

router.post('/product/create', managerController.postCreateproduct)

module.exports = router;