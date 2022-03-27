const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DoctorSchema = new Schema({
    doctor_id:{
        type: String,
        required: true,

    },
	doctorName: {
		type: String,
		required: true,
		trim: true
	},
	phone:{
		type: Number,
		required: true
	},
    clinic:{
        type: String,
        required: true
    },
	hospital:{
		//type: Schema.Types.ObjectId, ref: 'hospital'
		type: String,
		required: true
	}

},
{
    timestamps: true
})

module.exports = mongoose.model('doctor', DoctorSchema)