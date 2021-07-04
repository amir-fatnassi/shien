const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const CatchAsync = require('../utile/CatchAsync')
const AppError = require('../utile/AppError')


const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
      if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
  };

exports.deletUser = CatchAsync(async(req, res, next) => {
    
    await User.findByIdAndDelete(req.params.id);
   
    res.status(200).json({
        status: 'success'
    })
})

exports.allUsers = CatchAsync(async(req, res, next) => {
        const users = await User.find()
        res.status(200).json({
            length:users.length,
            status: 'success',
            data: {
                users
            }
        })
})

exports.updateMe = CatchAsync(async (req, res, next) => {
    // 1) Create error if user POSTs password data
    if (req.body.password || req.body.confirmPassword) {
      return next(
        new AppError(
          'This route is not for password updates. Please use /updateMyPassword.',
          400
        )
      );
    }
  
    // 2) Filtered out unwanted fields names that are not allowed to be updated
    const filteredBody = filterObj(req.body, 'name', 'email');
  
    // 3) Update user document
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
      new: true,
      runValidators: true
    });
  
    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser
      }
    });
  });
    

  exports.deletMe = CatchAsync(async(req, res, next) => {

      const user = await User.findByIdAndUpdate(req.user.id, {active: false})
      
      res.status(204).json({
          status: 'success'
      })
  })