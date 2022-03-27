const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HospitalSchema =  new Schema({
    hospitalnames: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    ward:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    link:{
        type: String
    }
})
module.exports = mongoose.model('hospital', HospitalSchema)