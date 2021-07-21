const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const CatchAsync = require('../utile/CatchAsync')
const AppError = require('../utile/AppError')


const multer = require("multer");
const sharp = require('sharp');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = CatchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.body.photo = `User-${Date.parse(new Date())}-photo.jpeg`;

  await sharp(req.file.buffer)
    .resize(1000, 1233)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/data/uploads/${req.body.photo}`);

  next();
});


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
    const data = {
      ...req.body,
      photo: req.body.photo
    }
    // 2) Filtered out unwanted fields names that are not allowed to be updated
    const filteredBody = filterObj(data, 'name', 'email');
    if (req.file) filteredBody.photo = req.body.photo;
  
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