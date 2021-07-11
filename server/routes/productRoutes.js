const express = require('express');
const productController = require('../controllers/productController')
const authController = require('../controllers/authController');


const router = express.Router();
router
    .route('/')
    .get(productController.getAllProduct)
    .post(productController.test, productController.createProduct)
router
    .route('/:id')
    .get(productController.getProduct)
    .patch(productController.test, productController.updatProduct)
    .delete(productController.deleteProduct)  
module.exports = router; 