const Role = require('../models/role')
const User = require('../models/User')

const roleCtrl = {
    getRole: async(req, res) =>{
        try {
            const role = await Role.find()
            res.json(role)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createRole: async (req, res) =>{
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const {name} = req.body;
            const role = await Role.findOne({name})
            if(role) return res.status(400).json({msg: "loại quyền đã tồn tại"})

            const newRole = new Role({name})

            await newRole.save()
            res.json({msg: "tạo thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
};
module.exports = roleCtrl