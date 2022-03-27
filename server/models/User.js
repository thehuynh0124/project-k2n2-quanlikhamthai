const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	fullname: {
		type: String,
		required: true,
		trim: true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	password: {
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
	role:{
		/*type: Schema.Types.ObjectId, ref: 'role'*/
		type: String
	}

},
{
    timestamps: true
})

module.exports = mongoose.model('users', UserSchema)