const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')
const hospitalcontroller = require('../controllers/hospital.controller')

router.post('/create', verifyToken, hospitalcontroller.Create)
router.get('/gethospital', verifyToken, hospitalcontroller.gethospital)
router.put('/edithospital/:id', verifyToken, hospitalcontroller.edithospital)
router.delete('/delete/:id', verifyToken, hospitalcontroller.deletehospital)
module.exports = router