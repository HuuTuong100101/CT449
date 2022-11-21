const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Name : {
        type : String,
        require: true
    },
    Address: {
        type : String,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    Phone: {
        type: String,
        require: true
    },
    Image: {
        type : String,
        require: true
    },
    Birth: {
        type : String,
        require: true
    },
    Position: {
        type : String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('users', userSchema)
