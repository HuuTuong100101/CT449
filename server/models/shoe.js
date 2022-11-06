const mongoose = require('mongoose')

const shoeSchema = mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    brand: {
        type : String,
        require: true
    },
    price: {
        type : String,
        require: true
    },
    quality: {
        type: Number,
        require: true
    },
    state: {
        type: Number,
    },
    description: {
        type : String,
    },
    image: {
        type : String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Shoes', shoeSchema)
