const Hotel = require('./../models/hotelModel');
const CatchAsync = require('../utile/CatchAsync')

exports.createHotel = CatchAsync(async(req, res, next) => {

        const newHotel = await Hotel.create(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                hotel: newHotel
            }
        })
    
})


exports.getAllHotels = CatchAsync(async(req, res, next) => {
    const hotels = await Hotel.find()

    res.status(200).json({
        status: 'success',
        dataSize: hotels.length,
        data: {
            hotels
        }
    })

})

exports.getHotel = CatchAsync(async(req, res, next) => {
    const hotel = await Hotel.findById(req.params.id)

    res.status(200).json({
        status: 'success',
        data: {
            hotel
        }
    })

})

exports.updatHotel = CatchAsync(async(req, res, next) => {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { 
        new: true,
        runValidators:true
    });

    res.status(200).json({
        status: 'success',
        data: { 
            hotel
        }
    })   
})

exports.deleteHotel = CatchAsync(async(req, res, next) => {
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(204).json({
        status: 'success',
        message:'deleted'
    }) 
    
})