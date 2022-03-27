const User = require('../models/User')
const express = require('express')




const checkAdmin = async (req, res, next) => {
	try {
		const user = await User.findById(req.userId)
		if(user.role === 'Admin')
			next()
		else{
            res.json('không có quyền')
        }
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}

module.exports = checkAdmin