const express = require('express')
const argon2 = require('argon2')
const hospital = require('../models/hospital')


exports.Create = async (req,res)=>{
    const {hospitalnames, address, SDT} = req.body

	if(!hospitalnames)
		return res
			.status(400)
			
	/*const hospitalNames = await hospital.findOne({ hospitalnames })
	if(hospitalNames)
		return res
			.status(400)
			.json({success: false, message: "Hospital already exists"})*/

	try {
		const newHospital = new hospital({
			hospitalnames,
            address,
			SDT,
		})
		await newHospital.save()

		res.json({ success: true, message: 'create completed', hospital: newHospital })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}

}
exports.gethospital = async (req,res)=>{
    try {
		const getHospital = await hospital.find()
		res.send(getHospital)
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}
exports.edithospital = async (req, res) =>{
	const { hospitalnames,address, SDT } = req.body

	if (!hospitalnames)
	return res
			.status(400)
			.json({ success: false, message: 'Hospital is required' })

	try {
		let updatedHospital = {
			hospitalnames,
			address,
			SDT
		}

		const hospitalUpdateCondition = { _id: req.params.id}

		updatedHospital = await diseases.findOneAndUpdate(
			hospitalUpdateCondition,
			updatedHospital,
			{ new: true }
		)

		
		if (!updatedHospital)
			return res.status(401).json({
				success: false,
				message: ' the hospital could not update'
			})

		res.json({
			success: true,
			message: 'Excellent progress!',
			disease: updatedHospital
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}

exports.deletehospital = async (req, res) =>{
	try {
		const hospitalDeleteCondition = { _id: req.params.id}
		const deletedHospital = await hospital.findOneAndDelete(hospitalDeleteCondition)

		// User not authorised or post not found
		if (!deletedHospital)
			return res.status(401).json({
				success: false,
				message: 'not authorised'
			})

		res.json({ success: true, hospital: deletedHospital })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'error' })
	}
}