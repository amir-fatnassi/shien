const crypto = require('crypto')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const CatchAsync = require('../utile/CatchAsync')
const AppError = require('../utile/AppError')
const sendEmail = require('../utile/email')

const sendToken = id => {
    return jwt.sign({id}, process.env.JWT_SCRIT, {expiresIn: process.env.EXPIRES_IN})
}
const CreateSendToken = (user, statusCode, res) => {
    const token = sendToken(user._id)

    const cookieOption = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN *86400000),
        httpOnly: true
    }

    if(process.env.NODE_ENV === 'production') cookieOption.scure=true
    res.cookie('jwt', token, cookieOption)

    user.password = undefined

    res.status(statusCode).json({
        status: 'success',
        token,
        data:{
            user
        }
    })
}

exports.Signup = CatchAsync(async(req, res, next) => {
    // const newUser = await User.create({
    //     name: req.body.name,
    //      lastName: req.body.lastName,
    //     email: req.body.email,
    //     password: req.body.password,
    //     confirmPassword: req.body.confirmPassword
    // });

    const newUser = await User.create(req.body)

    CreateSendToken(newUser, 201, res)

})

exports.Login = CatchAsync(async(req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        const message = 'Please provide email and password!'
        return next(new AppError( message, 400))
    };

    const test = await User.findOne({email}).select('+password').select('+active')

    if (!test || !(await bcrypt.compareSync(password, test.password))) {

        return next(new AppError( 'Incorrect email or password', 400))
    }

    CreateSendToken(test, 200, res)

})

exports.Protect = CatchAsync(async(req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = await req.headers.authorization.split(' ')[1] 
    }else if(req.cookies.jwt){
        token = req.cookies.jwt
    }
    

    if(!token) {
        return next(new AppError('You are not logged in! Please log in to get access.', 401))
    }

    const decoded = await jwt.verify(token, process.env.JWT_SCRIT) ;
    
    const freshUser = await User.findById(decoded.id)

    if(!freshUser) {
        return next(new AppError('The user belonging to this token does no longer exist.', 401))
    }

    if( freshUser.passwordCangeAfterDat(decoded.iat)) {
        return next(
            new AppError('User recently changed password! Please log in again.', 401)
        );
    }
    req.user = freshUser;
    next() 
}) 

exports.restrectTo = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return next(new AppError('You do not have permission to perform this action', 403))
        }
        next()
    }
}

exports.forgetPassword = CatchAsync(async(req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if(!user) {
        return next(new AppError('There is no user with email address.', 404))
    }
    const resetToken = user.createPasswordSendToken()

    await user.save({ validateBeforeSave: false })
 
    const resetURL = `${req.protocol}://${req.get(
        'host'
      )}/api/v1/users/resetpassword/${resetToken}`;
    
      const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
    
      try {
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10 min)',
            message
        });
        
        res.status(200).json({
            status: 'success',
            message: 'Token sent to email!'
        });
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });
    
    
        return next(new AppError('There was an error sending the email. Try again later!', 500))

    }

})

exports.ResetPassword = CatchAsync(async(req, res, next) => {

    const passwordToken =  crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    const user = await User.findOne({passwordResetToken: passwordToken}); 
    

    if(!user || new Date().getTime() - user.passwordResetExpires.getTime() > 10000){
    
        return next(new AppError('Token is invalid or has expired', 400))
    }

    user.password = req.body.password,
    user.confirmPassword = req.body.confirmPassword,
    user.passwordResetToken = undefined,
    user.passwordResetExpires = undefined
    await user.save()

    CreateSendToken(user, 200, res)

})

exports.UpdateCurentUser = CatchAsync(async(req, res, next) => {
    const user = await User.findById(req.user._id).select('+password')
    
    if (!await bcrypt.compareSync(req.body.expassword, user.password)) {
        return next( new AppError('Your current password is wrong', 401))
    }

    user.password = req.body.newPassword
    user.confirmPassword = req.body.confirmNewPassword   
    await user.save()

    CreateSendToken(user, 200, res)

})

exports.logout = (req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 5000),
        httpOnly: true
    });

    res.status(200).json({status: 'success'})
}