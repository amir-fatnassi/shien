const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
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
    image: [String],
    color: String


    // rating: {
    //     type: Number,
    //     require: [true, 'hotel must have a rating'],
    //     default: 4
    // }
})

const Hotel = mongoose.model('Product', productSchema)
module.exports = Hotel