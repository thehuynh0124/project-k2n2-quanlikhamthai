const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DiseaseSchema =  new Schema({
    diseasename: {
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
module.exports = mongoose.model('disease', DiseaseSchema)