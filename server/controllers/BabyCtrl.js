const baby = require ('../models/baby')

const babyCtrl = {
    createBaby: async(req, res) => {
        try {
            const {baby_id, babyName, gender, hospital, doctor} = req.body;

            const Baby = await baby.findOne({baby_id})
            if(Baby)
                return res.status(400).json({msg: "bác sĩ đã tồn tại"})
            
            const newBaby = new baby({
                baby_id, babyName, gender, hospital, doctor
            })

            await newBaby.save()
            res.json({msg: "tạo hồ sơ em bé thành công"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getBaby: async (req, res) => {
        try {
            const Baby = await baby.find()
            res.send(Baby)
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }
}
module.exports = babyCtrl