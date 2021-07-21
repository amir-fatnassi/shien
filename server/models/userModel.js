const crypto = require('crypto')
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchima = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please tell us your name"]
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: [true, "please provide your email"],
        unique: true,
        lowercase:true,
        validate: [validator.isEmail, 'please provide a valid email']
    },
    role: {
        type: String,
        enum: ['user', 'guide', 'lead-guide', 'admin'],
        default: 'user'
    },
    photo:{
        type: String
    },  
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    password: {
        type: String,
        required: [true, "please provide your password"],
        minLength: 8,
        select: false
    },
    confirmPassword : {
        type: String,
        required: [true, "user most have a name"],
        validate: {
            validator: function(el){
                return el===this.password
            },
            message: "password are not the same"
        }
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
})

userSchima.pre('save', async function(next){
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.confirmPassword = undefined;

    next();
});
userSchima.pre('save',  function(next){
    if (!this.isModified('password') || this.isNew) return next();

    this.passwordChangeAt = Date.now() - 1000;

    next();
});

userSchima.pre(/^find/,  function(next){
    
    this.find({active: {$ne:false}})
    next();
});

userSchima.methods.passwordCangeAfterDat = function(JWTTimestamp){
    if(this.passwordChangeAt) {
        return Date.parse(this.passwordChangeAt)/1000 > JWTTimestamp
    }
    return false
}

userSchima.methods.createPasswordSendToken = function(){
    const resetToken = crypto.randomBytes(32).toString('hex')

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000; 


    return resetToken;
};

const User = mongoose.model('User', userSchima);
module.exports = User