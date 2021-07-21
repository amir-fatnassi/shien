const express = require('express');
const productController = require('../controllers/productController')
const authController = require('../controllers/authController');
const Product = require('../models/productModel')

// productController.test,
const router = express.Router();
router
    .route('/')
    .get(productController.getAllProduct(Product))
    .post(
        productController.uploadTourImages, 
        productController.resizeTourImages, 
        productController.createProduct(Product)
    )
router
    .route('/:id')
    .get(productController.getProduct(Product))
    .patch(
        productController.uploadTourImages, 
        productController.resizeTourImages,
        productController.updatProduct(Product)
    )
    .delete(productController.deleteProduct(Product))  
module.exports = router; 