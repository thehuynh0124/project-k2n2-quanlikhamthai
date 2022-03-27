const vaccine = require('../models/vaccin')
const express = require('express')

exports.Create = async (req,res)=>{
    const {vaccine_id,vaccineName,price,description, category} = req.body

	// Simple validation
	if(!vaccineName)
		return res
			.status(400)
			
	const vaccinname = await vaccine.findOne({vaccineName})
	if(vaccinname)
		return res
			.status(400)
			.json({success: false, message: "Vaccine đã tồn tại"})

	try {
		const newVaccin = new vaccine({
			vaccine_id,
			vaccineName,
			price,
			description,
			category
		})
		await newVaccin.save()

		res.json({ success: true, message: 'thêm thành công', vaccin: newVaccin })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}

}
exports.getvaccin = async (req,res)=>{
    try {
		const getVaccin = await vaccine.find()
		res.send(getVaccin)
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}
exports.updateVaccine = async (req, res) =>{
	const {vaccineName, price,description, category} = req.body


	if (!vaccineName)
	return res
			.status(400)
			.json({ success: false, message: 'vaccine is required' })

	try {
		let UpdateVaccine = {
			vaccineName,
			price,
			description,
			category,
		}

		const vaccineUpdateCondition = { _id: req.params.id}

		UpdateVaccine = await vaccine.findOneAndUpdate(
			vaccineUpdateCondition,
			UpdateVaccine,
			{ new: true }
		)

		
		if (!UpdateVaccine)
			return res.status(401).json({
				success: false,
				message: ' the hospital could not update'
			})

		res.json({
			success: true,
			message: 'Excellent progress!',
			vaccine: UpdateVaccine
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}
exports.deleteVaccine = async(req, res) =>{
	try {
		await vaccine.findByIdAndDelete(req.params.id)
		res.json({msg: "đã xóa"})
	} catch (err) {
		return res.status(500).json({msg: err.message})
	}
}