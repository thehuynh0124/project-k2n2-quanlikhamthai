const express = require('express')
const argon2 = require('argon2')
const verifyToken = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const diseases = require('../models/Diseases')


exports.Create = async (req,res)=>{
    const {diseasename, note, category} = req.body

	// Simple validation
	if(!diseasename)
		return res
			.status(400)
			
	const diseaseName = await diseases.findOne({ diseasename })
	if(diseaseName)
		return res
			.status(400)
			.json({success: false, message: "disease already exists"})

	try {
		const newDisease = new diseases({
			diseasename,
			note,
			category
		})
		await newDisease.save()

		res.json({ success: true, message: 'create completed', diseases: newDisease })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}

}
exports.getdiseases = async (req,res)=>{
    try {
		const getDiseases = await diseases.find()
		res.send(getDiseases)
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}
exports.editdiseases = async (req, res) =>{
	const { diseasename, note, category } = req.body
	try {
		let updatedDisease = {
			diseasename,
			note,
			category
		}

		const diseaseUpdateCondition = { _id: req.params.id}

		updatedDisease = await diseases.findOneAndUpdate(
			diseaseUpdateCondition,
			updatedDisease,
			{ new: true }
		)

		// User not authorised to update disease or disease not found
		if (!updatedDisease)
			return res.status(401).json({
				success: false,
				message: 'Disease not found or user not authorised'
			})

		res.json({
			success: true,
			message: 'Excellent progress!',
			disease: updatedDisease
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}

exports.deletediseases = async (req, res) =>{
	try {
		const diseaseDeleteCondition = { _id: req.params.id}
		const deletedDisease = await diseases.findOneAndDelete(diseaseDeleteCondition)

		// User not authorised or post not found
		if (!deletedDisease)
			return res.status(401).json({
				success: false,
				message: 'Post not found or user not authorised'
			})

		res.json({ success: true, diseases: deletedDisease })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}
