const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Dangkykham =  new Schema({
    fullname:{
        type: String,
        required: true
    },
    phone:{
		type: Number,
		required: true
	},
    address:{
		type: String,
		required: true
	},
	ward: {
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
    lankham: {
        type: String,
        required: false
    },
    ngaykham: {
        type: Date,
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
    },
    status: {
        type: String,
        required: false
    }
})
module.exports = mongoose.model('Dangkykham', Dangkykham)