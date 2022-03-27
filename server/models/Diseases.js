const mongoose = require('mongoose')
const {Schema} = mongoose

const diseaseSchema = new mongoose.Schema({
    disease_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    diseaseName:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category: [{type: Schema.Types.ObjectId, ref: "Category"}]
    
}, {
    timestamps: true //important
})
module.exports = mongoose.model('Diseases', diseaseSchema)