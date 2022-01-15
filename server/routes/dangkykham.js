const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const dangkykhamcontroller = require('../controllers/dangkykham.controller')


router.post('/create', verifyToken, dangkykhamcontroller.Create)
router.get('/getdangkykham', verifyToken, dangkykhamcontroller.getdangkykham)
module.exports = router
