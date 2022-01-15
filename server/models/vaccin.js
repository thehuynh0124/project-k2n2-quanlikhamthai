const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VaccinSchema =  new Schema({
    vaccinname: {
        type: String,
        required: true
    },

    note: {
        type: String,
        required: false
    },
    category:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('vaccin', VaccinSchema)