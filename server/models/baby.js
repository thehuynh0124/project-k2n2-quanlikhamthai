const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BabySchema = new Schema({
    baby_id:{
        type: String,
        required: true,

    },
	babyName: {
		type: String,
		required: true,
		trim: true
	},
    gender:{
        type: String,
        required: true
    },
    birthday:{
        type: Date,
        required: true
    },
	hospital:{
		type: String,
		required: true
	},
    doctor:{
        type:String,
        required: true
    }

},
{
    timestamps: true
})

module.exports = mongoose.model('baby', BabySchema)