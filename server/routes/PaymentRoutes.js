const express = require('express');
const payment = require('../controllers/payment')
const authController = require('../controllers/authController')


const router = express.Router();

router.post('/checkout-session', authController.Protect, payment.getCheckoutSession)

module.exports = router
    