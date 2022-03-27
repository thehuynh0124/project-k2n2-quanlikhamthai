const mongoose = require('mongoose')


const vaccineSchema = new mongoose.Schema({
    vaccine_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    vaccineName:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Vaccine", vaccineSchema)