const express = require('express')
const dangkykham = require('../models/Dangkykham')
const Users = require('../models/User')



const dangkykhamCtrl ={
	Create: async (req,res)=>{

		const user = await Users.findById(req.userId).select('fullname phone address ward district city ')
            if(!user) return res.status(400).json({msg: "chưa đăng ký hoặc đăng nhập"})
			
		const {lankham, ngaykham, giokham, coso, bacsi} = req.body
		const {_id, fullname, phone, address, ward, district, city} = user;

		if(!coso && !giokham) return res .status(400)
				
		const iddangkykham = await dangkykham.findOne({ ngaykham, giokham, bacsi})

		if(iddangkykham) return res .status(400) .json({success: false, message: "bac si ban, moi ban chon gio khac"})

		try {
			const newDangkykham = new dangkykham({
				user_id: _id, fullname, phone, address, ward, district, city,
				lankham, ngaykham, giokham, coso, bacsi, status: "chờ xác nhận"
	
			})
			await newDangkykham.save() 
			res.json({ success: true, message: 'đăng ký thành công', dangkykham: newDangkykham })

		} catch (error) { console.log(error)
			res.status(500).json({ success: false, message: 'lỗi server' })
		}
	},
	
	
	getdangkykham: async (req,res)=>{
		try {
			const getDangkykham = await dangkykham.find()
			res.send(getDangkykham)
		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false, message: 'error' })
		}
	},

	confirmSchedule: async (req, res) =>{
		const status = 'Đã xác nhận'
		try {
			let confirm = {
				status
			}
			const confirmCondition = { _id: req.params.id}
			confirm = await dangkykham.findOneAndUpdate(
				confirmCondition,
				confirm,
				{ new: true }
			)
	
			res.json({
				success: true,
				message: 'xác nhận thành công',
				dangkykham: confirm
			})
	
	
		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false, message: 'Internal server error' })
		}
	}
	

}


module.exports = dangkykhamCtrl