const User = require('../models/User')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const medicalProfile = require('../models/medicalProfile')

	exports.register = async (req, res,) => {
		const { fullname, email, password, phone, cccd, address, ward, district, city } = req.body

		// Simple validation
		if (!password || !email)
			return res
				.status(400)
				.json({ success: false, message: 'vui lòng nhập email và mật khẩu' })

		try {
			// Check for existing user
			const usern = await User.findOne({ email })

			if (usern)
				return res
					.status(400)
					.json({ success: false, message: 'email đã được sử dụng' })
			if(password.length < 6) 
				return res.status(400).json({message: "Mật khẩu phải có độ dài it nhất 6 ký tự"})

			// All good
			const hashedPassword = await argon2.hash(password)
			const newUser = new User({ fullname, email, password: hashedPassword, phone, cccd, address, ward, district, city, role: "BasicUser"})
			await newUser.save()

			// Return token
			const accessToken = jwt.sign(
				{ userId: newUser._id, role: newUser.role },
				process.env.ACCESS_TOKEN_SECRET,{expiresIn: '11m'}
			)

			const refreshtoken = jwt.sign(
				{ userId: newUser._id, role: newUser.role },
				process.env.ACCESS_TOKEN_SECRET,{expiresIn: '7d'}
			)

			res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

			res.json({
				success: true,
				message: 'tạo tài khoản thành công',
				accessToken
			})
		} catch (err) {
			console.log(err)
			res.status(500).json({ success: false, message: 'lỗi server' })
		}
	}
	exports.login = async (req, res,) => {
		try {
			const {email, password } = req.body
			if (!email || !password)
				return res
					.status(400)
					.json({ success: false, message: 'vui lòng nhập email và mật khẩu' })
			// Check for existing user
			const user = await User.findOne({email})
			if (!user)
				return res
					.status(400)
					.json({ success: false, message: 'Người dùng không tồn tại' })

			// email found
			const passwordValid = await argon2.verify(user.password, password)
			if (!passwordValid)
				return res
					.status(400)
					.json({ success: false, message: 'Mật khẩu không đúng' })

		// All good
		// Return token
			const accessToken = jwt.sign(
				{ userId: user._id, role: user.role},
				process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'}
			)
			const refreshtoken = jwt.sign(
				{ userId: user._id, role: user.role},
				process.env.ACCESS_TOKEN_SECRET, {expiresIn: '7d'}
			)

			res.cookie('refreshtoken', refreshtoken, {
				httpOnly: true,
				path: '/refresh_token',
				maxAge: 7*24*60*60*1000 // 7d
			})

			res.json({
				success: true,
				message: 'Đăng nhập thành công',
				accessToken
			})
		} catch (err) {
			console.log(err)
			return res.status(500).json({msg: err.message})
		}
	}
	exports.logout = async (req, res) =>{
        try {
            res.clearCookie('refreshtoken', {path: '/refresh_token'})
            return res.json({msg: "đã đăng xuất"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
	exports.refreshToken = (req, res) =>{
        try {
            const rf_token = req.localstorage.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = jwt.sign(
					{ userId: user._id },
					process.env.ACCESS_TOKEN_SECRET, {expiresIn: '7d'}
				)

                res.json({accesstoken})
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
	exports.getUser = async (req, res) => {
		try {
			const user = await User.findById(req.userId).select('-password')
			if (!user)
				return res.status(400).json({ success: false, message: 'người dùng không tồn tại' })
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
			res.status(500).json({ success: false, message: 'lỗi server' })
		}
	}
	exports.getProfile = async(req, res) =>{
		try {
			const Profile = await medicalProfile.find({user_id: req.user.id})
			res.json(Profile)
		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false, message: 'lỗi server' })
		}
	}
