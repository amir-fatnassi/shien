const express = require('express');
const productController = require('../controllers/productController')
const authController = require('../controllers/authController');
const Homme = require('../models/hommeProductModel')


const router = express.Router();
router
    .route('/')
    .get(productController.getAllProduct(Homme))
    .post( 
        productController.uploadTourImages, 
        productController.resizeTourImages,
        productController.createProduct(Homme)
    )
router
    .route('/:id')
    .get(productController.getProduct(Homme))
    .patch(
        productController.uploadTourImages, 
        productController.resizeTourImages, 
        productController.updatProduct(Homme)
    )
    .delete(productController.deleteProduct(Homme))  
module.exports = router; 