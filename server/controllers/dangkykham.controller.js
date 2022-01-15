const express = require('express')
const argon2 = require('argon2')
const verifyToken = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const dangkykham = require('../models/Dangkykham')

exports.Create = async (req,res)=>{ const {lankham,ngaykham,giokham,coso,bacsi} = req.body

	if(!coso && !giokham) return res .status(400)
			
	const iddangkykham = await dangkykham.findOne({ giokham, bacsi})

	if(iddangkykham) return res .status(400) .json({success: false, message: "bac si ban, moi ban chon gio khac"})

	try {
		const newDangkykham = new dangkykham({
			lankham,
			ngaykham,
            giokham,
            coso,
            bacsi
		})
		await newDangkykham.save() 
        res.json({ success: true, message: 'dang ky thang cong', dangkykham: newDangkykham })

	} catch (error) { console.log(error)
		res.status(500).json({ success: false, message: 'dang ky khong thang cong' })
	}
}
exports.getdangkykham = async (req,res)=>{
    try {
		const getDangkykham = await dangkykham.find()
		res.send(getDangkykham)
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'error' })
	}
}