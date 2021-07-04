const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'hotel muste have a name'],
        unique:true
    },
    rating: {
        type: Number,
        require: [true, 'hotel must have a rating'],
        default: 4
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)
module.exports = Hotel