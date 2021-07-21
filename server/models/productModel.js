const mongoose = require('mongoose');

const FemmeProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'product muste have a name']
    },
    price:{
        type: Number,
        required: [true, 'please add the price']
    },
    taill:{
        type: String,
        enum: ['standard', 'XS', 'S', 'M', 'L', 'XL'],
        default: 'standard'
    },
    imageProduct:{
        type: String,
        // required: [true, 'please add the image product']
    },
    images: [String],
    color: String


    // rating: {
    //     type: Number,
    //     require: [true, 'hotel must have a rating'],
    //     default: 4
    // }
})

const FemmeProduct = mongoose.model('Product', FemmeProductSchema)
module.exports = FemmeProduct