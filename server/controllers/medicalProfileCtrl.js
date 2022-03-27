const Profile = require('../models/medicalProfile')
const Users = require('../models/User')


const profileCtrl = {
    getProfile: async(req, res) =>{
        try {
            const profile = await Profile.find()
            res.json(profile )
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProfile: async(req, res) => {
        try {
            const user = await Users.findById(req.userId).select('fullname email phone address ward district city')
            if(!user) return res.status(400).json({msg: "người dùng không tồn tại"})
            //const profide = await Profile.findOne(req._id)
            //if(profide)  return res.status(400).json({msg: 'mã hồ sơ đã tồn tại'})

            const {profileID, note, status,} = req.body;

            const {_id, fullname, email, phone, address, ward, district, city} = user;

            const newProfile = new Profile({
                user_id: _id, fullname, email, phone, address, ward, district, city, profileID, note, status
            })
            
            await newProfile.save()
            res.json({msg: "thêm thông tin thành công"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProfile: async(req, res) => {
        try {
            const user = await Users.findById(req.userId).select('fullname email phone address ward district city')
            if(!user) return res.status(400).json({msg: "người dùng không tồn tại"})

            const {profileID, note, status,} = req.body;

            const {_id, fullname, email, phone, address, ward, district, city} = user;

            await Profile.findOneAndUpdate({_id: req.params.id}, {
                user_id: _id, fullname, email, phone, address, ward, district, city, profileID, note, status
            })
        
            res.json({msg: "thêm thông tin thành công"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = profileCtrl