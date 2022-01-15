const User = require('../models/User')
const argon2 = require('argon2')
const verifyToken = require('../middleware/auth')
const jwt = require('jsonwebtoken')


exports.getuser = async (req, res) => {
    try {
		const user = await User.findById(req.userId).select('-password')
		if (!user)
			return res.status(400).json({ success: false, message: 'User not found' })
		res.json({ success: true, user })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}
exports.getAlluser = async (req, res) => {
    try {
		const user = await User.find()
		if (!user)
			return res.status(400).json({ success: false, message: 'User not found' })
		res.json({ success: true, user })
		req.user = user
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}


exports.register = async (req, res, next) => {
    const { username, password, realname, email, phone, cccd, adress, ward, district, city } = req.body

	// Simple validation
	if (!username || !password || !email)
		return res
			.status(400)
			.json({ success: false, message: 'Missing username and/or password, email' })

	try {
		// Check for existing user
		const usern = await User.findOne({ username })

		if (usern)
			return res
				.status(400)
				.json({ success: false, message: 'Username already taken' })

        const usere = await User.findOne({ email })

		if (usere)
			return res
				.status(400)
				.json({ success: false, message: 'email already taken' })

		// All good
		const hashedPassword = await argon2.hash(password)
		const newUser = new User({ username, password: hashedPassword,realname, email, phone, cccd, adress, ward, district, city, role: "basicUser"})
		await newUser.save()

		// Return token
		const accessToken = jwt.sign(
			{ userId: newUser._id },
			process.env.ACCESS_TOKEN_SECRET,
		)

		res.json({
			success: true,
			message: 'User created successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}

exports.login = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password)
		return res
			.status(400)
			.json({ success: false, message: 'Missing username and/or password' })

	try {
		// Check for existing user
		const user = await User.findOne({ username })
		if (!user)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect username or password' })

		// Username found
		const passwordValid = await argon2.verify(user.password, password)
		if (!passwordValid)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect username or password' })

		// All good
		// Return token
		const accessToken = jwt.sign(
			{ userId: user._id },
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({
			success: true,
			message: 'User logged in successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}

exports.deleteUser = async(req, res, next) =>{
	try {
		const userDeleteCondition = {_id: req.params.id}
		const deletedUser = await User.findOneAndDelete(userDeleteCondition)

		// User not authorised or post not found
		if (!deletedUser)
			return res.status(401).json({
				success: false,
				message: 'Post not found or user not authorised'
			})

		res.json({ success: true, message: 'user has been deleted', user: deletedUser })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
}
