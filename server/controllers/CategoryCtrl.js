const Category = require('../models/Category')
const Diseases = require('../models/Diseases')

const categoryCtrl = {
    getCategories: async(req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async (req, res) =>{
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const {name} = req.body;
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg: "Danh mục đã tồn tại"})

            const newCategory = new Category({name})

            await newCategory.save()
            res.json({msg: "tạo thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteCategory: async(req, res) =>{
        try {
            const diseases = await Diseases.findOne({category: req.params.id})
            if(diseases) return res.status(400).json({
                msg: "Please delete all diseases with a relationship."
            })

            await Category.findByIdAndDelete(req.params.id)
            res.json({msg: "đã xóa"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCategory: async(req, res) =>{
        try {
            const {name} = req.body;
            await Category.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({msg: "cập nhật thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = categoryCtrl