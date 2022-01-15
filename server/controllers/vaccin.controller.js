const vaccin = require('../models/vaccin')
const express = require('express')

exports.Create = async (req,res)=>{
    const {vaccinname, note, category} = req.body

	// Simple validation
	if(!vaccinname)
		return res
			.status(400)
			
	const vaccinName = await vaccin.findOne({vaccinname})
	if(vaccinName)
		return res
			.status(400)
			.json({success: false, message: "vaccin already exists"})

	try {
		const newVaccin = new vaccin({
			vaccinname,
			note,
			category
		})
		await newVaccin.save()

		res.json({ success: true, message: 'create completed', vaccin: newVaccin })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}

}
exports.getvaccin = async (req,res)=>{
    try {
		const getVaccin = await vaccin.find()
		res.send(getVaccin)
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}