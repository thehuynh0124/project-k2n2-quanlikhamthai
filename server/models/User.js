const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	realname: {
		type: String,
		required: true
	},
	phone:{
		type: Number,
		required: true
	},
	cccd:{
		type: Number,
		required: true
	},
	adress:{
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
	role: {
		type: String
	}
})

module.exports = mongoose.model('users', UserSchema)