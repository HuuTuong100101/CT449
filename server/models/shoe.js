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
