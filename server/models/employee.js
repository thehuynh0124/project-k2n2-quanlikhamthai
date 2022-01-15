const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema =  new Schema({
    empname: {
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
    
})
module.exports = mongoose.model('employee', employeeSchema)