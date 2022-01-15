const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Dangkykham =  new Schema({
    lankham: {
        type: String,
        required: false
    },
    ngaykham: {
        type: String,
        required: true
    },
    giokham: {
        type: String,
        required: true
    },
    coso: {
        type: String,
        required: true
    },
    bacsi: {
        type: String,
        required: false
    }
})
module.exports = mongoose.model('Dangkykham', Dangkykham)