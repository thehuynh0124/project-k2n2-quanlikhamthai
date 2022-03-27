const doctor = require ('../models/Doctor')

const doctorCtrl = {
    createDoctor: async(req, res) => {
        try {
            const {doctor_id, doctorName, phone, clinic, hospital} = req.body;

            const Doctor = await doctor.findOne({doctor_id})
            if(Doctor)
                return res.status(400).json({msg: "bác sĩ đã tồn tại"})
            
            const newDoctor = new doctor({
                doctor_id, doctorName: doctorName.toLowerCase(), phone, clinic, hospital
            })

            await newDoctor.save()
            res.json({msg: "thêm bác sĩ thành công"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getDoctor: async (req, res) => {
        try {
            const Doctor = await doctor.find()
            res.send(Doctor)
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }
}
module.exports = doctorCtrl