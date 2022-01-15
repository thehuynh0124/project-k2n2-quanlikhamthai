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
    SDT: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('hospital', HospitalSchema)