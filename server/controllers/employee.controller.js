const express = require('express')
const argon2 = require('argon2')
const verifyToken = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const employee = require('../models/employee')


exports.Create = async (req,res)=>{
    const {empname, position, email, phone } = req.body

	// Simple validation
	if(!empname)
		return res
			.status(400)
			.json({ success: false, message: ' name is required' })

    const employeename = await employee.findOne({ empname })
	if(employeename)
		return res
			.status(400)
			.json({success: false, message: "employee already exists"})

    const employeeEmail = await employee.findOne({ email })
    if (employeeEmail)
        return res
            .status(400)
            .json({ success: false, message: 'email already taken' })

	try {
		const newEmployee = new employee({
			empname,
			position,
            email,
            phone
		})
		await newEmployee.save()

		res.json({ success: true, message: 'create completed', employee: newEmployee })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}

}
exports.getEmp = async (req,res)=>{
    try {
		const getEmp = await employee.find()
		res.send(getEmp)
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}