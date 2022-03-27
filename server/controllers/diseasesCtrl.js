const Diseases = require('../models/Diseases')

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const DiseasesCtrl = {
    getDiseases: async(req, res) =>{
        try {
            const features = new APIfeatures(Diseases.find(), req.query)
            //.filtering().sorting().paginating()

            const diseases = await features.query

            res.json({
                status: 'success',
                result: diseases.length,
                diseases: diseases
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createDisease: async(req, res) => {
        try {
            const {disease_id, diseaseName, description, category} = req.body;

            const disease = await Diseases.findOne({disease_id})
            if(disease)
                return res.status(400).json({msg: "bệnh này đã tồn tại"})

            const newDiseases = new Diseases({
                disease_id, diseaseName: diseaseName.toLowerCase(), description, category
            })

            await newDiseases.save()
            res.json({msg: "thêm bệnh thành công"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteDiseases: async(req, res) =>{
        try {
            await Diseases.findByIdAndDelete(req.params.id)
            res.json({msg: "đã xóa"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateDiseases: async(req, res) =>{
        try {
            const {diseaseName, description, category} = req.body;

            await Diseases.findOneAndUpdate({_id: req.params.id}, {
                diseaseName: diseaseName.toLowerCase(), description, category
            })

            res.json({msg: "cập nhật thành công"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}


module.exports = DiseasesCtrl