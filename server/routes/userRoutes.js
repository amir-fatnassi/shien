const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup',authController.Signup )
router.post('/login',authController.Login )
router.get('/logout',authController.logout )

router.post('/forgetpassword',authController.forgetPassword )
router.patch('/resetpassword/:token',authController.ResetPassword )
router.patch('/updatcurentuser',authController.Protect, authController.UpdateCurentUser )

router.patch(
    '/updateme', 
    authController.Protect,
    userController.uploadUserPhoto,
    userController.resizeUserPhoto, 
    userController.updateMe
);
router.delete('/deletme', authController.Protect, userController.deletMe);


router
    .route('/')
    .get( userController.allUsers)
router
    .route('/:id')
    .delete(
          authController.Protect,
          authController.restrectTo('admin'),
          userController.deletUser
          ) 

module.exports = router