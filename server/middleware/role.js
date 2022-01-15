const jwt = require('jsonwebtoken')
const User = require('../models/User')
const express = require('express')



const checkAdmin = async (req, res, next) => {
    try {
		const user = await User.findById(req.userId)//.select(role)
		if(user.role === 'Admin')
			next()
		else{
            res.json('not permission')
        }
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}

module.exports = checkAdmin