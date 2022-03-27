const mongoose = require('mongoose')


const profileSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
		type: Number,
	},
    address:{
		type: String,
	},
	ward: {
		type: String,

	},
	district:{
		type: String,
	},
	city:{
		type: String,
	},
    profileID:{
        type: String,
        required: true
    },
   
    note:{
        type: String,
        require:true
    },
    status:{
        type: String,
        require:true
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Profile", profileSchema)